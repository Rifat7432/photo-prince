import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer';
import Header from '../Share/Header';

const Main = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Header></Header>
            <Outlet></Outlet>
            <div className='mt-auto '>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;