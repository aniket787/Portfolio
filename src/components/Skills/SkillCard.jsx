import React from 'react'
import './Skills.css'
const skillCard = ({skillName, skillUrl})=> {
    return(
        <div className="skill">
            <img src={skillUrl} alt="skill" />
            <p>{skillName} </p>
        </div>

    )
}
export default skillCard;