import React,{ useState } from 'react'

const practvalidation = () => {
    // const [name, setName] = useState({});
    // const [email, setEmail] = useState({});

    // const handlename = () => {
    //     if(name.value.lenght <2){
    //         setName({...name})
    //     }
    // }
    
    // const handleemail = () => {
    //     if(email.value.lenght <2){
    //         setEmail({...email})
    //     }
    // }
    return (
        <div>
            <h1>Login</h1>
            <labal>First Name</labal>
            <input
                type="text"
                // value={name}
                placeholder="name"
                // onChange={(e)=>{handlename(),setName({...name, value: e.target.value})}} 
            />
            <labal>Last Name</labal>
            <input
                type="text"            
                // value={email}
                placeholder="email"
                // onChange={(e)=>{handleemail(),setName({...email, value: e.target.value})}} 
            />

            <input type="button" value="submit"/>
        </div>
    )
}

export default practvalidation
