import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
     <footer>
        <div>
            <h3>Creado</h3>
        </div>
        <div>
           <p><Link to={"https://www.linkedin.com/in/fabio-eduardo-circuncisao/"}>linkedln: Fabio Eduardo  Circuncisao</Link></p>
            <p><Link to={"https://github.com/caffranksereia"}>Github: Cafffranksereia</Link></p>
        </div>
     </footer>
    );
   };