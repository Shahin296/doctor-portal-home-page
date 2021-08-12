import React from 'react';
import DoctorDetail from '../DoctorDetail/DoctorDetail';
import "./Doctors.css";
import doctorImg from "../../../images/appointment-doctor.png"

const doctorsData = [
    {
        img: doctorImg,
        name: "dr. Craudi",
        phone: "+13252735283"
    },
    {
        img: doctorImg,
        name: "dr. Craudi",
        phone: "+13252735283"
    },
    {
        img:doctorImg,
        name: "dr. Craudi",
        phone: "+13252735283"
    }
]


const Doctors = () => {
    return (
        <div className="our-doctors pb-5">
             <h5 className="text-center doctor-title-cl">Our Doctors</h5>
            <div className="row w-75 mx-auto">
            {
                 doctorsData.map(doctorInfo => <DoctorDetail doctorInfo={doctorInfo}/>)
             }
            </div>
        </div>
    );
};

export default Doctors;