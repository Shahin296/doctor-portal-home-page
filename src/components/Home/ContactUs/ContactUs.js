import React from 'react';
import "./ContactUs.css";


const ContactUs = () => {
    return (
        <div className="contact-us mb-5">
            <div className="contact-form container text-white text-center pt-5 w-50">
                <h5 style={{color:"#11c1ce"}}>CONTACT US</h5>
                <h2>Always Connect With Us</h2>
                <form action="">
                <input type="email" class="form-control mt-5"  placeholder="Email"/>
                <input type="email" class="form-control mt-4"  placeholder="Subject"/>
                <textarea class="form-control mt-4" placeholder="Your message" rows="4"></textarea>
                  <button className="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;