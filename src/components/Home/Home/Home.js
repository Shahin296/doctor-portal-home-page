import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
         <Header/>
         <Services/>
         <FeatureService/>
         <Appointment/>
         <Reviews/>
         <Blogs/>
         <Doctors/>
         <ContactUs/>
         <Footer/>
        </div>
    );
};

export default Home;