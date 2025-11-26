import LogoJacob from '../../assets/images/jacob_3_image.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['V', 'o', 'l', 'z']
    //const jobArray = ['M', 'a', 's', 't', 'e', 'r', ' ','s', 't', 'u', 'd', 'e', 'n', 't']
    
useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer); 
}, []);
    return(
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>l</span>
                    <span className={`${letterClass} _15`}>o,</span>
                    <br/>
                    <span className={`${letterClass} _16`}>I</span>
                    <span className={`${letterClass} _16`}>m</span>

                <img src={LogoJacob} alt="name"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                   
                </h1>
                <h2>Final year M.Sc. student in Computer Science and 
                    Engineering with a Specialization in AI and Machine Learning</h2>
                <a href="mailto:jacobvolz8@gmail.com?subject=Contact%20from%20portfolio" className="flat-button">Contact me</a>
                
            </div>
        <Logo/>
        </div>
    )
}

export default Home