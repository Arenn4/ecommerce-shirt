import React, { Component } from 'react';
import ContactUs from './ContactUs'
import Footer from './Footer';
import Navbar from './Navbar';
import './styles.css'
// const client = require('@sendgrid/client')

class Contact extends Component{
    render(){
    return (
        <div className="contactus-container">
            <div className="one"><Navbar /></div>
            <div className='contact-container'><ContactUs /></div>
            <div className="five"><Footer /></div>
        </div>
        );
    }
};

export default Contact;