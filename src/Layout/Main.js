import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import Nav from '../Components/Nav';


const Main = () => {
    return (
        <div>
            <Nav></Nav>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;