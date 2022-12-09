import React from 'react';
import myImg from './assets/myImg.png'
import java from './assets/images-removebg-preview (2).png'
import react from './assets/Full-stack-Universal-React-with-Redux-Node-js-and-MongoDB-removebg-preview.png'
import Pdf from "react-to-pdf";
import { Link } from 'react-router-dom';
const ref = React.createRef();
const Banner = () => {
    return (
      <div>
        <div className="hero bg-base-200">
          <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
            <img
              src={myImg}
              alt=""
              className="w-[200px] justify-end rounded-full shadow-2xl"
            />
            <div className="mt-5">
              <h1 className="text-5xl font-bold">Mohammad Jalal Uddin</h1>
              <p className="py-3 font-semibold text-2xl">
                Front End Web Developer
              </p>
              <p className="py-3">
                Turning ideas into real life products is my calling and work
                doing
              </p>
              <p className="flex bg-base-200">
                <img className="w-[130px]" src={java} alt="" />
                <img className="w-[300px]" src={react} alt="" />
              </p>

              <div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => (
                    <Link to='/resume'>
                      <button className="btn btn-primary" onClick={toPdf}>
                        Resume
                      </button>
                    </Link>
                  )}
                </Pdf>
                {/* <div ref={ref}>
                  <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;