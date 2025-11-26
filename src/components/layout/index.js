import './index.scss';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';
import About from '../About';

const Layout = () => {
    return (
    <div className= "App">
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'></span>
            <Outlet/>

            <span className= 'tags bottom-tags'>
                <br/>
            </span>
        </div>
    </div>
    
)
    
    
}

export default Layout
