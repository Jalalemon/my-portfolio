import React from 'react';
import About from './About';
import Allprojects from './Allprojects';
import Banner from './Banner';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <p className="m-10 font-bold text-3xl text-indigo-400 ">My Skills</p>
        <Skills></Skills>
        <p className="m-10 font-bold text-3xl text-indigo-400 ">My Projects</p>
        <Allprojects></Allprojects>
        {/* <div className="grid justify-center mt-10">
          <button className="btn grid justify-center ">See more</button>
        </div> */}
        <About></About>
        <Contact></Contact>
      </div>
    );
};

export default Home;