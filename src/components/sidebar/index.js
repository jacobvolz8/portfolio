import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoJacob from '../../assets/images/jacob_3_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src= {LogoJacob} alt="logo"/>
            
        </Link>
        <nav>
            <NavLink exact= "true" activeclassname = "active" to= "/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname = "active" className="about-link" to= "/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <a href="mailto:yourname@example.com?subject=Contact%20from%20portfolio" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>

           </a>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jacob-volz-8753a5191/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
        </ul>

    </div>
)


export default Sidebar