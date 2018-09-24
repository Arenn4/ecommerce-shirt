import React from 'react';

import { Link } from 'react-router-dom'
import './styles.css'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer #0d47a1 blue darken-4">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Site Details</h5>
                        <p className="grey-text text-lighten-4">Styled with CSS and materialize. E-commerce site with the ability to send an email, filter items and search for items by title.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                        <li><Link to="/contact" className="grey-text text-lighten-3">Contact Us</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;