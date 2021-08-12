import React from 'react';
import featureImg from "../../../images/feature-img.png"
import "./Feature.css"
const FeatureService = () => {
    return (
       <section className="feature-container mt-5 pb-5">
             <div className="w-75 row mx-auto d-flex align-items-center">
                 <div style={{padding: "0 5px"}} className="col-md-6">
                      <img style={{height:"400px", width: "450px", objectFit:"cover"}} className="img-fluid" src={featureImg} alt="" />
                 </div>
                 <div style={{padding: "0 5px"}} className="col-md-6">
                       <h2 className="mt-4 mb-4">Exceptional Dental <br/> Care, On Your Terms</h2> 
                       <p className="text-secondary mt-4 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id expedita ullam eum dolore, nostrum similique dignissimos cum laborum nesciunt incidunt. Est placeat voluptatem rem voluptates? Aliquid, aspernatur? Accusamus provident quam doloribus quo cum voluptates dolorum necessitatibus eius nobis. Nisi, minima.</p>
                       <button className="btn btn-primary mt-4 mb-4">Learn More</button>
                 </div>
             </div>
       </section>
    );
};

export default FeatureService;