import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="content">{children}</div> {/* This will render the page content */}
        </>
    );
};

export default Layout;
