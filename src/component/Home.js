import React, { useState,useEffect } from 'react';
import fireDb from '../firebase';
import { Link } from 'react-router-dom'
import './Home.css';
import { toast } from 'react-toastify';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const Home = () => {
  const [data , setData] =useState({});

  useEffect(()=>{
    fireDb.child('product').on('value', (obj)=>{
      if(obj.val() !== null)  {
        setData({...obj.val() });
      }else{
        setData({});
      }
    })
    return() => {
      setData({});
    };
  }, []);

  const ondelete = (id) => {
    if(
      window.confirm('are you sure!')
      ){
        fireDb.child(`/product/${id}`).remove((err)=>{
          if(err){
            toast.error(err);
          }else{
            toast.success('successfully deleted');
          }
        })
    }
  }

    return (
      <>
      <Header />
        <div>
          <h1>Product details</h1>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product description</th>
                  <th>Product Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id,index)=>{
                  return(
                    <tr key={id}>
                    <th>{data[id].name}</th>
                    <th>{data[id].description}</th>
                    <th>{data[id].price}</th>
                    <th>
                      <Link to={`/update/${id}`}>
                      <button style={{margin:"1px"}} type="submit">Edit</button>
                      </Link>
                      <button style={{margin:"1px"}} type="submit" onClick={()=> ondelete(id)}>Delete</button>
                    </th>
                  </tr>  
                  );
                })}
              </tbody>
            </table>  
        </div>
        <Footer />
      </>
    )
}

export default Home;