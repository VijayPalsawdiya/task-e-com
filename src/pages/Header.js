import React,{useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../pages/Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location =useLocation();
    
    useEffect(()=>{
        if(location.pathname === "/home"){
            console.log(location.pathname)
            setActiveTab('Home');
        }else if(location.pathname === "/add"){
            console.log(location.pathname)
            setActiveTab('AddContact');
        }else if(location.pathname==="/about"){
            console.log(location.pathname)
            setActiveTab('About');
        }else if(location.pathname === "/"){
            console.log(location.pathname)
            setActiveTab('SignOut');
        }
    },[location]);

    return (
        <div className="header">
            <p className="logo">Prodocto</p>
            <div className="header-right">    
                <Link to="/home">
                <p
                className={`${activeTab==="Home" ? "active" : ""}`}
                onClick={()=>setActiveTab('Home')}
                >
                    View
                </p>
                </Link>

                <Link to="/add">
                <p
                className={`${activeTab==="AddContact" ? "active" : ""}`}
                onClick={()=>setActiveTab('AddContact')}
                >
                    Add Product
                </p>
                </Link>

                <Link to="/about">
                <p
                className={`${activeTab==="About" ? "active" : ""}`}
                onClick={()=>setActiveTab('About')}
                >
                    About
                </p>
                </Link>

                <Link to="/">
                <p
                className={`${activeTab==="SignOut" ? "active" : ""}`}
                onClick={()=>setActiveTab('SignOut')}
                >
                    SignOut
                </p>
                </Link>
            </div>     
        </div>
    )
}

export default Header;
