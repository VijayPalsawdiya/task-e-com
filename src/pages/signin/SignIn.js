import React, { Component } from "react";
import './login.css'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  formSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const { history } = this.props;

    if (history && email === "admin@gmail.com" && password === "123") {
        
     history.push('/add');
    
        // createBrowserHistory().push('/admin');
    } else {
      history.push('/cards');
        // createBrowserHistory().push('/product');
    }
    e.preventDefault();
  }

    redirectToHome = () => {
      const { history } = this.props;
      if(history) history.push('/');
     }

  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <form>
          <div id="form">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Your name.."
              required
            />

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="Your Password.."
              required
            />

            <button
              className="mainbutton"
              type="submit"
              value="Submit"
              onClick={this.formSubmit.bind(this)}
            >
              Submit
            </button>
            <p id="loginpara">
              Don't have Account: <a href="/">SignUp here</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn




// import React, {useState} from 'react';
// import { Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


// export const SignIn = () => {

//         const [user, setUser] = useState({
//             email:'',
//             password:'',
//         });

//     let name, value;
//     const getUserdata = (event) => {
//         name = event.target.name;
//         value = event.target.value;

//         setUser({...user, [name]:value})
//     }

//     const postData =async (e) =>{
//         e.preventDefault();

//         const {email, password, phone}=user;

//         if(email && password && phone){
//             const res = await fetch('https://user-data-1d2b7-default-rtdb.firebaseio.com/userData.json',
//             {
//                 method:"POST",
//                 header:{
//                     'Content-Type': 'application/json',
//                 },
//                 body :JSON.stringify({
//                         email,
//                         password,
//                         phone
//                 })
//             }
//             );
//             if(res){
//                 setUser({
//                     email:'',
//                     password:'',
//                     phone: '',
//                 })
//             alert('Data Submitted');
//             }
//         }else{
//             alert('plz fill email,password and phone');
//         }
//     }


//     return (
//         <div className="container mt-5">
//             <h1>Sign Up Form</h1>
//             <h1></h1>
//             <Form className="form-control p-5" method="POST">
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control value={user.email} onChange={getUserdata} id="email" name="email" type="email" placeholder="Enter email" required/>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control value={user.password} onChange={getUserdata} id="password" name="password" type="password" placeholder="Password" required/>
//                 </Form.Group>
    
//                 <Button variant="primary" type="submit" onClick={postData}>
//                     Sign Up
//                 </Button>
//             </Form>
//         </div>
//     )
// }
