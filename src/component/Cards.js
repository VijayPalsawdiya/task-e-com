import React, { useState, useEffect } from "react";
import img from "../assets/photo.jpeg";
import fireDb from "../firebase";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { useHistory } from "react-router";
import Footer from "../pages/Footer";
import Cart from "./Cart";

const Cards = () => {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fireDb.child("product").on("value", (obj) => {
      if (obj.val() !== null) {
        setData({ ...obj.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);

  // let cart = JSON.parse(localStorage.getItem('cart')) || [];
  //     console.log('cart =',cart);
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  console.log('cart...',cart);
  
  const handleaddToCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const exist = cart.filter(item => item.id === id)

    if(exist.length > 0){
      const newItem = {
        id,
        quantity : exist[0].quantity + 1
      }
      const newCart = cart.filter(item=> {
        return item.id !== exist[0].id;
      })
      newCart.push(newItem)
      localStorage.setItem('cart',JSON.stringify(newCart));
    }else{
      cart.push({id,quantity:1})
      localStorage.setItem('cart',JSON.stringify(cart));
    }
  
    
    // let exist = cart.length && 
    // JSON.parse(localStorage.getItem('cart'))
    
  //   if(!exist){
  //   var quantity = 1 ;
    
  //   console.log("quantity",quantity);   
    
  //   cart.push({ id ,quantity});
  //   localStorage.setItem('cart', JSON.stringify(
  //       cart,
  //     )
  //   );
  //   console.log('local :',id);
  //   console.log(localStorage.getItem("cart",cart));
  // }
}



  const history = useHistory();
  return (
    <>
      <div>
        <h1>Products</h1>
        <Cart />
        <p style={{marginRight:'-5rem', float:'right'}}>{cart.length}</p>
        <div className="row">
          {Object.keys(data).map((id, index) => {
            return (
              <div key={id} className="col-md-3 col-sm-3 mb-3">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={img} />
                  
                  <Card.Body>        
                    <Card.Title> Name : {data[id].name}</Card.Title>
                    
                    <Card.Text>Description :{data[id].description}</Card.Text>

                    <Card.Text>Price :{data[id].price}</Card.Text>

                    <Button type="submit"  onClick={() => handleaddToCart(id)}>Add to Cart </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cards;
