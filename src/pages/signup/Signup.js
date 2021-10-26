import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Signup = () => {

        const [user, setUser] = useState({
            email:'',
            password:'',
            phone: ''
        });

    let name, value;
    const getUserdata = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]:value})
    }

    const postData =async (e) =>{
        e.preventDefault();

        const {email, password, phone}=user;

        if(email && password && phone){
            const res = await fetch('https://user-data-1d2b7-default-rtdb.firebaseio.com/userData.json',
            {
                method:"POST",
                header:{
                    'Content-Type': 'application/json',
                },
                body :JSON.stringify({
                        email,
                        password,
                        phone
                })
            }
            );
            if(res){
                setUser({
                    email:'',
                    password:'',
                    phone: '',
                })
            alert('Data Submitted');
            }
        }else{
            alert('plz fill email,password and phone');
        }
    }


    return (
        <div className="container mt-5">
            <h1>Sign Up Form</h1>
            <Form className="form-control p-5" method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={user.email} onChange={getUserdata} id="email" name="email" type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={user.password} onChange={getUserdata} id="password" name="password" type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={user.phone} onChange={getUserdata} id="phone" name="phone" type="Number" placeholder="Phone" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={postData}>
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}
