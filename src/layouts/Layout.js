import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import SidebarV2 from '../pages/ea/SidebarV2';

function Layout() {

    return (
        <>
            {/* <Header /> */}
            <Sidebar />
            {/* <SidebarV2 /> */}
            <Outlet />
        </>
    );
}

export default Layout;