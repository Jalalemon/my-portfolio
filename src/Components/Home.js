import React from 'react';
import Allprojects from './Allprojects';
import Banner from './Banner';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Skills></Skills>
        <Allprojects></Allprojects>
        <div className="grid justify-center mt-10">
          <button className="btn grid justify-center ">See more</button>
        </div>
        <Contact></Contact>
      </div>
    );
};

export default Home;