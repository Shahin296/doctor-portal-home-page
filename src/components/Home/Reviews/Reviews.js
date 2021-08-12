import React from 'react';
import "./Reviews.css"
import ellipse1 from "../../../images/Ellipse 1.png";
import ellipse2 from "../../../images/Ellipse 2.png";
import ellipse3 from "../../../images/Ellipse 3.png";
import ReviewDetail from '../ReviewDetails/ReviewDetail';

const pateintsReviews =[
     {
         comment: "It is a long established fact that a reader will be distractedly the readable content of a page when. Lorem ipsum dolor sit, amet consectetur adipisicing.",
         name: "Winson Herry",
         location: "California",
         img: ellipse1
     },
     {
        comment: "It is a long established fact that a reader will be distractedly the readable content of a page when. Lorem ipsum dolor sit, amet consectetur adipisicing.",
        name: "Winson Herry",
        location: "California",
        img: ellipse2 
    },
    {
        comment: "It is a long established fact that a reader will be distractedly the readable content of a page when. Lorem ipsum dolor sit, amet consectetur adipisicing.",
        name: "Winson Herry",
        location: "California",
        img: ellipse3
    }
]

const Reviews = () => {
    return (
        <div className="reviews">
          
           <div className="w-75 row mx-auto">
           <h6 style={{color:"#11c1ce"}}>Testimonial.</h6>
           <h1>What's Our Patients <br/> Says</h1>
               {
              pateintsReviews.map(review => <ReviewDetail reviews={review}/>)
               }
           </div>
        </div>
    );
};

export default Reviews;