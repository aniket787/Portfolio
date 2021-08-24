import React from 'react';
import Header from '../Header/Header'
import FooterLink from '../Footer/FooterLink';

import './About.css';
import aboutVector from './../../assets/about_vector.png'
import aboutAnime from './../../assets/about_anime.gif';


const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading="About Me"
                details="Passionate Programmer | Enthusiastic Learner | Full Stack Developer"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* sub section 1 */}
                    <h3 className="about-sub-head">Learner</h3>
                    <p className="about-details">
                        A good Enthusiastic learner who intends to learn new technologies and implement them as well.
                    </p>


                    <h3 className="about-sub-head">Developer</h3>
                    <p className="about-details">
                        A good Enthusiastic learner who intends to learn new technologies and implement them as well.
                        Intrested in open source contribution. Worked on technologies like Reactjs, Nodejs, Nextjs, etc.
                    </p>


                    <h3 className="about-sub-head">Coder</h3>
                    <p className="about-details">
                        Have a bit intrest in data structures and algorithms. 
                    </p>


                </div>
                <div className="about-main-right">
                    <img src={aboutAnime} alt="about" className='about-anime' />
                </div>
            </div>





            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAddress='/projects'
            />

            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt="about" />
            </div>
        </div>
    )
}
export default About;