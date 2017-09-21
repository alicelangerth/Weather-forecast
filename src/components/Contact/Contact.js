import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className="contact-wrapper">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
        </div>
    );
  }

export default Contact;