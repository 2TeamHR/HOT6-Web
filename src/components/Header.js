import sidebarStyle from "../resources/css/components/sidebar.module.css";

function Header() {

    return (
    <>
        {/* <!--========== HEADER ==========--> */}
        <header className={sidebarStyle.header}>
            <div className={sidebarStyle.headerContainer}>

                <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.headerLogo}`}></a>


                <div className={sidebarStyle.headerSearch}>
                    <input type="search" placeholder="Search" className={sidebarStyle.headerInput}/>
                    <i className={`bx bx-search ${sidebarStyle.headerIcon}`}></i>
                </div>

                <div className={sidebarStyle.headerToggle}>
                    <i className={`bx bx-menu`} id="header-toggle"></i>
                </div>

            </div>
        </header>
    </>
    );
}

export default Header;
