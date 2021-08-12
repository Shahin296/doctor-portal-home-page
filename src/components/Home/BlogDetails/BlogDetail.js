import React from "react";

const BlogDetail = ({ blog }) => {
  return (
    <div className="col-md-4 mt-5">
      <div class="card p-3" style={{width:"18rem", height:"24rem"}}>
        <div class="card-body">
        <div className="d-flex justify-content-around">
            <img src={blog.img} alt="" />
            <div>
                <h6>{blog.name}</h6>
                <p className="text-secondary">{blog.date}</p>
            </div>
        </div>
          <h5 class="card-title mt-4">{blog.title}</h5>
          <p class="card-text mt-4 text-secondary">
          {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
