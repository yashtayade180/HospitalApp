import React from "react";
import "./style.css";
import data from "./data";

const Dbox = () => {
  return (
    <>
      <div>
        {data.map((article, index) => (
          <div className="card-container">
            <div className="card">
              <div className="card-position">
                <h1 className="card-title ">{article.title}</h1>
                <div className="card-body">
                  <h2 className="card-num">{article.database}</h2>
                </div>
              </div>
              <img
                src={article.thumbnail}
                alt="images"
                className="card-media"
              />

              {/* <span className='card-tag subtle'> know more</span> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dbox;
