import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <Navbar />
            <main className="">
                <Outlet />
                {/* Main content will be rendered here */}
            </main>
        </div>
    );
}

export default Layout;
