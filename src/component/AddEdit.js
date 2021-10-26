// import firebase from 'firebase/compat/app';
import React,{useState, useEffect} from 'react'
import './AddEdit.css';
import fireDb from '../firebase';
// import firebase, {child} from 'firebase';
import {set, ref, getDatabase, child, push} from "firebase/database";
import { toast } from 'react-toastify';
import {useHistory, useParams} from 'react-router-dom'
import Header from '../pages/Header';
import Footer from '../pages/Footer';


const initialState = {
    name: '',
    description: '',
    price: '',
};

const AddEdit = () => {
    const [state, setstate] = useState(initialState);
    const [data, setData] = useState({});

    const {name, description, price} = state;

    const history = useHistory();

    const {id} = useParams();
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
      }, [id]);

      useEffect(()=>{
          if(id){
            setstate({...data[id]});
          }else{
            setstate({...initialState});
          }

          return () =>{
            setstate({...initialState});
          }
      },[id, data])

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setstate({...state, [name]: value})
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !description || !price){
            toast.error("please provide value in each input field");
        }else{
            // setToDB(dbRef,state).then(() =>{
            // debugger
        // })
                // setData(state, (err)=>{ 
                    
            if(!id){
                fireDb.child('product').push(state, (err) => {   
                    if(err){
                        toast.error(err);
                    }else{
                        toast.success("product added Successfully");
                    }
                });
            }else{
                fireDb.child(`product/${id}`).set(state, (err) => {   
                    if(err){
                        toast.error(err);
                    }else{
                        toast.success("product Updated Successfully");
                    }
                });
            }      
        setTimeout(() => history.push("/home"), 500);
        }
    };

    return (
        <>
        <Header />
        <div className="divbar">
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit}>
                <label style={{marginTop:"50px"}} htmlFor="name">Product Name: </label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Product name..."
                    onChange={handleInputChange}
                />
                <label htmlFor="name">Product Description: </label>
                <input 
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Product description..."
                    onChange={handleInputChange}
                />
                <label htmlFor="contact">Product Price: </label>
                <input 
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    placeholder="Product price..."
                    onChange={handleInputChange}
                />

                <input 
                    type="submit" value={id ? "update" : "save"}
                />
            </form>
        </div>
        <Footer />
        </>
    )
}

export default AddEdit;
