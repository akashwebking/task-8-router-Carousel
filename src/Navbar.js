import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div className='navbar'>
           <div className='logo'>Innotech</div>
           <div>
            <ul>
               <Link to="/"><a ><li>Home</li></a></Link> 
               <Link to="/About"><a ><li>About</li></a></Link> 
               <Link to="/Project"><a ><li>Projects</li></a></Link> 
               <Link to="/Contact"><a ><li>Contact</li></a></Link> 
            </ul>
           </div>
        </div>
    )
}
export default Navbar;