import React from "react";

const ReviewDetail = ({ reviews }) => {
  return (
    <div className="col-md-4">
      <div class="card mt-5" style={{width: "18rem"}}>
        <div class="card-body">
          <p class="card-text">{reviews.comment}</p>
           <div className="d-flex align-items-center justify-content-around mt-4">
              <img src={reviews.img} alt="" />
              <div>
                  <h6 style={{color:"#11c1ce"}}>{reviews.name}</h6>
                  <p>{reviews.location}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
