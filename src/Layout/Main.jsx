import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Fotter';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;