import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DoctorDetail = ({doctorInfo}) => {
    return (
        <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                  <img className="img-fluid" src={doctorInfo.img} alt="" />
                  <h6 className="mt-3">{doctorInfo.name}</h6>
                  <small className="text-secondary"><FontAwesomeIcon icon={faPhone}/>{doctorInfo.phone}</small>
              </div>
        </div>
    );
};

export default DoctorDetail;