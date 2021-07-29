import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/">Page d'accueil</Link>
            <Link to="/html">Html</Link>
            <Link to="/css">Css</Link>
            <Link to="/javascript">Javascript</Link>
        </div>
    )
}

export default Navbar
