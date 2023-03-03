import sidebarStyle from "../resources/css/components/sidebar.module.css";

function Header() {

    return (
    <>
        {/* <!--========== HEADER ==========--> */}
        <header className={sidebarStyle.header}>
            <div className={sidebarStyle.headerContainer}>

                <div className={sidebarStyle.headerSearch}>
                    <input type="search" placeholder="Search" className={sidebarStyle.headerInput}/>
                    <i className={`bx bx-search ${sidebarStyle.headerIcon}`}></i>
                </div>

            </div>
        </header>
    </>
    );
}

export default Header;
