import {Outlet, Link} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import './Layout.scss';

const Layout = ()=>{
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    );
}

export default Layout;