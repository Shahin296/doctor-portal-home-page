import React from "react";
import "./Blogs.css";
import ellipse1 from "../../../images/Ellipse 1.png";
import ellipse2 from "../../../images/Ellipse 2.png";
import BlogDetail from "../BlogDetails/BlogDetail";

const blogsData = [
  {
    name: "Dr. Caudi",
    date: "22 Aug 2021",
    title: "2 times of brush a day can keep you healthy",
    description:
      "It is a long established fact that a reader will be distractedly the readable content of a page when. Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: ellipse1,
  },
  {
    name: "Dr. Angela",
    date: "28 Aug 2021",
    title: "The tooth cancer is taking a challenge",
    description:
      "It is a long established fact that a reader will be distractedly the readable content of a page when. Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: ellipse2,
  },
];

const Blogs = () => {
  return (
    <div className="blogs mt-5 pb-5">
      <div className="row w-75 mx-auto">
        <h5 className=" text-center" style={{color:"#11c1ce"}}>Our Blogs</h5>
        <h2 className=" text-center">From Our Blog News</h2>
        <div className="col-md-4 mt-5 text-white">
          <div class="card p-4" style={{ width: "18rem", height:"24rem" , backgroundColor: "transparent",border:"none" ,  background: "linear-gradient(60deg, #11c18e, #a7f0e4)"}}>
            <div class="card-body">
              <h6>Rashed kabir</h6>
              <p>30 Aug 2021</p>
              <h5 class="card-title">Check at least a doctor in a year for your teeth.</h5>
            </div>
          </div>
        </div>
        {blogsData.map((blog) => (
          <BlogDetail blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
