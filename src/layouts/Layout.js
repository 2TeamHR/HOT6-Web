import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
// import { useState } from 'react';

function Layout() {

    // const [isOpen, setIsOpen] = useState(false);
    // const toggleSide = () => {
    //     setIsOpen(true);
    // };
    // <button onClick={toggleSide}>버튼</button>

    // isOpen={isOpen} setIsOpen={setIsOpen}

    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
        </>
    );
}

export default Layout;