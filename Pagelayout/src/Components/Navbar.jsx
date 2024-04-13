import { space } from 'postcss/lib/list';
import React from 'react';

function Navbar(props) {
    return (
        <nav className='navbar'
         style={{background:'red',display:'flex', justifyContent:'space-around', alignItems:'center', height:50, color:'white' ,margin:5 }}>
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
           

        </nav>
        
        
    );
}

export default Navbar;