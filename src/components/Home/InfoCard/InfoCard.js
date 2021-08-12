import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./InfoCard.css"

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 info-card">
           <div className="d-flex justify-content-center align-items-center info-container" style={{backgroundColor: info.background}}>
           <div style={{fontSize: "3rem", marginRight: "12px"}}>
             <FontAwesomeIcon icon={info.icon}/>
            </div>
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            </div>
           </div>
        </div>
    );
};

export default InfoCard;