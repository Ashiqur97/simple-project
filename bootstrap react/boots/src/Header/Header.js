import React from 'react';

function Header(props) {

    return (
        <div>
     <h1>Name{props.name}</h1>
     <p>lorem</p>
     <h2>Email:{props.email}</h2>
     <p>lorem</p>
     <h3>address:{props.address}</h3>
        </div>
          
    );
    
}

export default Header;

