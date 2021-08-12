import React from 'react';
import Fluoride from "../../../images/Fluoride.png";
import Cavity from "../../../images/cavity-filling.png";
import Whitening from "../../../images/teeth-whitening.png"
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const servicesInfo = [
    {
        img: Fluoride,
        name: "Fluoride Treatment",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quam. amet consectetur adipisicing elit"
    },
    {
        img: Cavity,
        name: "Cavity Filling",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quam. amet consectetur adipisicing elit"
    },
    {
        img: Whitening,
        name: "Teeth Whitening",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quam. amet consectetur adipisicing elit"
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
          <div className="text-center">
            <h5 style={{color: "#11c1ce"}}>OUR SERVICES</h5>
            <h1>Services We Provide</h1>
            <div className="w-75 row mx-auto mt-5 pt-5">
            {
                servicesInfo.map(service=> <ServiceDetail service={service}/> )
             }
            </div>
          </div>
        </section>
    );
};

export default Services;