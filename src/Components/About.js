import React from 'react';
import img from './assets/myImg.png'
const About = () => {
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content  flex-col lg:flex-row">
            <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="ml-12">
              <h1 className="text-3xl font-bold mb-3">About me</h1>
              <p className="text-xl font-bold"> Full Stack Web Developer </p>
              <p className="font-semibold mt-3">
                I am a self-motivated Full Stack Developer with knowledge in
                React.js, Node.js, Express.js, Google Authentication, MongoDB,
                JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive
                web development.
              </p>
              <p className="py-6 font-semibold">
                <p>
                  {" "}
                  Name:{" "}
                  <span className="text-red-500 text-xl">
                    Mohammad Jalal Uddin
                  </span>
                </p>
                <p> Email: jalaluddinemon4@gmail.com </p>
                <p> Phone: +8801815382591 </p>
                <p> City: Chattogram, Bangladesh </p>
                <p>Education: University of Barishal</p>
              </p>
              <p className="grid grid-cols-3">
                <p className="grid grid-cols-3">
                  <a href="https://github.com/Jalalemon">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="h-9 w-9"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/mohammad-jalal-uddin/">
                    {" "}
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="h-9 w-9"
                    />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100024576695964">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMf3GI80saUgb0eQeFFYDGNBLw20WoSZImAg&usqp=CAU"
                      alt=""
                      className="h-9 w-9"
                    />
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;