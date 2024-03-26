"use client"

import { RxCross2 } from "react-icons/rx";
import './page.css'

const SkillItem=(props)=>{
    const {skillDetails, onDeleteSkill}=props
    const {skill, id}=skillDetails

    const deleteSkill=()=>{
        onDeleteSkill(id)
    }

    return (
        <li className='skill-item'>
            <p className='skill-name'>{skill}</p>
            <RxCross2 className="delete-btn" onClick={deleteSkill}/>
        </li>
    )
}

export default SkillItem