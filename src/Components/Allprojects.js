import React from 'react';
import { Link } from 'react-router-dom';
import linkers1 from './assets/linkers5.png'
import w1 from './assets/w2.png'
import l1 from './assets/l1.png'
const Allprojects = () => {
    return (
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 sm:grid-cols-1  ">
        <div
          className="card card-compact w-96 mx-auto bg-base-100 shadow-xl"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <figure>
            <img
              src={linkers1}
              alt="Shoes"
              className="w-full h-50"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Linkers.com</h2>
            <p>kinds of e-commercial website</p>
            <div className="card-actions justify-end">
              <Link to="/linkers">
                {" "}
                <button className="btn btn-sm btn-primary">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card card-compact w-96 mx-auto bg-base-100 shadow-xl"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <figure>
            <img
              src={w1}
              alt="Shoes"
              className="w-full h-50"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Wildlife Studio</h2>
            <p> wild photography website</p>
            <div className="card-actions justify-end">
              
              <Link to="/wildlife">
                {" "}
                <button className="btn btn-sm btn-primary">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card card-compact w-96 mx-auto bg-base-100 shadow-xl"
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure>
            <img
              src={l1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Learn with Jalal</h2>
            <p>e-learning platform</p>
            <div className="card-actions justify-end">
              
              <Link to="/learn">
                {" "}
                <button className="btn btn-sm btn-primary">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Allprojects;