import React, { useState, useEffect } from "react";
import { Button, Card, Modal } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import fireDb from '../firebase'
import img from "../assets/photo.jpeg";
import { AiOutlineDelete } from 'react-icons/ai';


const Cart = (props) => {
const [show, setShow] = useState(false);
const [data, setData] = useState({});
const [count, setCount] = useState(1);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


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
      console.log(setData({}));
    };
  }, []);

    // fireDb.child('product').on('value', (obj) => {
    //   setData({})
    // })

    const handleIncrement = (id) => {
        setCount(prevCount => prevCount + 1);
      };
    const handleDecrement = (id) => {
        setCount(prevCount => prevCount - 1);
      };

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      console.log('In cart>> ',cart);

      
      // debugger

      // const abc =Object.keys(data).map((obj) =>{
      //   return cart.filter(o => {
      //     return obj === o.id
      //   })
      // })
      const abc = cart && cart.length && cart.map(item => data.hasOwnProperty(item.id) && data[item.id])

      console.log('abc value>>',abc);

      // console.log('abc value',data[abc]?.name);
      // console.log('abc value',data[abc]?.description);
      // console.log('abc value',data[abc]?.price);
  // debugger

      // const storedata = abc.map(item => {return item.name})
      // console.log("map>>",storedata);

    // let result = cart.filter((cartId) => !Object.keys(data).some((fbId) => cartId.id === fbId.id));
    // console.log(result);
    // console.log(data.name);   

    const delInlocal = (id) => {
      // debugger
    var del =true;
    var cartlocal = JSON.parse(localStorage.getItem('cart'));

    cartlocal.forEach((item,index)=>{
    if(id !== item.id){
      del=false;
      cartlocal.splice(index,1)      
      }
      localStorage.setItem("cart", JSON.stringify(cartlocal)); 
      console.log(id);
      console.log('>>',item.id);

    });	
  }

  

      return (
        <>
        <div>

            <Button style={{width:'7%', float:'right', paddingLeft:'1px'}} variant="primary" onClick={handleShow}>
            <BsCart style={{fontSize:'xx-large'}}/>
            {/* <p style={{marginRight:'2px' , float:'right'}}>{count}</p> */}
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Selected Items</Modal.Title>
                </Modal.Header>
                
                {
                  abc.length && abc?.map((id,ind) => {
                    if(id.length <1) {return null}
                    return (
                      <div key={ind} className="row">
                        <p style={{marginBottom:'6px'}}>
                        <Card.Img variant="top" src={img} style={{height:"70p",width:'70px', float:'left'}}/>
       
                        <button type="button" onClick={() => delInlocal(id)} style={{paddingRight:'9px',marginRight:'139px'}}><AiOutlineDelete /></button>
       
                          <Card.Text>{id.name}</Card.Text>
                          
                          <Card.Text>{id.description}</Card.Text>
                           
                          <Card.Text>{id.price} </Card.Text>

                          <Card.Text>
                          {cart.length && cart?.map((id,index)=>{  
                            return(     
                              <div key={index}>             
                          {/* <input onClick={()=>handleDecrement(id)} style={{width:'8%', float:'center', paddingLeft:'1px'}} type='button'value='➖'/> */}
                              X{id.quantity}
                          {/* <input onClick={()=>handleIncrement(id)} style={{width:'8%', float:'center', paddingLeft:'1px'}} type='button' value='➕'/>             */}
                          </div>
                          )
                          }
                          )}
                          </Card.Text>
                          {/* <Card.Text>asdasda</Card.Text> */}
                          
                        </p>
                      {/* <p style={{float:'right'}}>Total:{id.price*cart.length}</p> */}
                      </div>
                    )
                  })
                }
            
            
                <Modal.Footer>
            
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    CHECK OUT
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
      </>
    )
}

export default Cart


// function Example() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   render(<Example />);