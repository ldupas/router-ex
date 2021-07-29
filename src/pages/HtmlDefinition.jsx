import React from 'react';
import { Link } from 'react-router-dom';

function HtmlDefinition() {
    return (
        <div>
            <h1>Je suis la page HTML !</h1>
            <Link to="/">Retour page d'accueil</Link>
        </div>
    )
}

export default HtmlDefinition
