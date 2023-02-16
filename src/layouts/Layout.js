import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {

    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
        </>
    );
}

export default Layout;