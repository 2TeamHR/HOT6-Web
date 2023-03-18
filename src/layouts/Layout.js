import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import SidebarV2 from '../pages/ea/SidebarV2';

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
            {/* <SidebarV2 /> */}
            <Outlet />
        </>
    );
}

export default Layout;