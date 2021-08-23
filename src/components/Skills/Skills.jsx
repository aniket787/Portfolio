import React from 'react';
import './Skills.css'
import Header from '../Header/Header'
import FooterLink from '../Footer/FooterLink'
import { skillList } from '../../assets/skillsData'
import SkillCard from './SkillCard'

import skillsVector from '../../assets/skills_vector.png'
import './Skills.css';

const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Skills'
                details="Passionate about new technologies, exploring stuffs. Here's a tech stack I've worked with!"
            />




            <div className="skill-card-container">
                {skillList.map(({ skillName, skillUrl }) => {
                        return(
                            <SkillCard skillName={skillName} skillUrl={skillUrl} 

                            />
                        );
                    })}
            </div>




            <FooterLink
                phrase='Get in ' link="touch." toAddress="/contact"
            />
            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skills" className="skills-vector" />
            </div>



        </div>
    )
}
export default Skills;