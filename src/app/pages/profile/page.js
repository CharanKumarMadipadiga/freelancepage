"use client"

import React, {useEffect, useState} from "react"
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import './page.css'
import SkillItem from "@/app/components/SkillItem/page"


const Profile=()=>{
    
    const [searchValue, setSearchInput]=useState('')
    const [skillsList, setSkillsList]=useState([])

    const onAddSkills=(event)=>{
        setSearchInput(event.target.value)
    }

    const onDeleteSkill=(id)=>{
        const filteredList=skillsList.filter(eachItem=>eachItem.id!==id)
        setSkillsList(filteredList)
    }

    const onAddList = () => {
        const length = skillsList.length;
        const skillsObj = {
            id: length + 1,
            skill: searchValue,
        };
    
        // Create a new array with the updated data
        const updatedSkillsList = [...skillsList, skillsObj];
        // Set the state with the updated array
        setSkillsList(updatedSkillsList);
        setSearchInput('')
    };

    useEffect(()=>{
        console.log("skills list updated", skillsList)
    }, [skillsList]);

    

    return (
        <div className="profile-container">
            <nav className="nav-bar">
                <div className="nav-box">
                    <img src="https://static.wixstatic.com/media/e238b5_23a3e5e846dd4a19a47678f9c377c054~mv2.jpeg/v1/fill/w_349,h_98,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Header%20logo.jpeg" alt="Autonopros logo" className="profile-logo"/>
                    <h1 className="nav-heading">Free-Lancer Profile</h1>
                </div>
            </nav>
            <div className="profile-content-con">
                <div className="content-card-con">
                    <div className="profile-section">
                        <h1 className="profile-heading">About</h1>
                        <p className="profile-para">I have extensive experience designing logos, websites, web banners, 
                        content marketing materials, and more. If you need a fresh look for your brand or 
                        just want to refresh your site design, I'm here to help</p>
                        <h1 className="profile-heading">Skills</h1>
                        <label>
                            <input type="text" className="skills-inputEl" placeholder="Add skills" value={searchValue} onChange={onAddSkills} />
                            <button type="button" className="add-btn" onClick={onAddList}>Add</button>
                        </label>
                        <ul className="skills-list-con">
                            {skillsList.map(eachItem=>(
                                <SkillItem skillDetails={eachItem} key={eachItem.id} onDeleteSkill={onDeleteSkill}/>
                            ))}
                        </ul>
                    </div>
                    <div className="profile-card">
                      <div className="profile-background">
                      </div>
                      <div></div>
                      <img src="https://s3-alpha-sig.figma.com/img/fddb/6b5c/43bc02816ef47afbabb04b810d056698?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeAzTe1U0FS6CRFwqW8HJMC60yMcujBZKUd8RqcUOgJoxTq5rEPofb5HzlzXc3dyqJxzEC3yD3IpCPdxrvHSkwwjcNfuLbHbdgSwgtOWCh3JYGcNVZKsbmOs46tOprxbW8WVRWUxsR9Kh3MrmtJyB-v~EKnmMr-yC4FKjtmqq67vP4lXJ~CZlIpTEgjCDA~bB7QeUIXfEx8kb-Dzv~58obspLaroF3CjIH2d24h-W-n8AnTZ77qOQcfTqv3nOh4F8N0tPpcydPzyMCQYVERsFx2MyU9G41AXL92grV~KXovJANXIXWuC7bjLiWztnqZ4fk7SPh3v8Sp~z60NvxsdPg__" alt="profile" className="profile-img"/>
                      <h1 className="profile-name">JOHN DOE</h1>
                      <div className="location-con">
                        <IoLocationOutline className="location-icon"/>
                        <p className="location">Hyderanbad, India</p>
                      </div>
                      <div className="profile-description">
                        <p>Level 2</p>
                        <p>AP Rank: 07</p>
                        <div className="rating-con profile-description">
                            <FaStar className="rating-icon"/>
                            <p>5.0 (1.4k)</p>
                        </div>
                        <p className="rewards">REWARD POINTS: 50</p>
                      </div>

                    </div>
                </div>
                <h1 className="available">Available for Hire : </h1>
                <ul className="price-list">
                    <button className="price-btn">Per Hour: $29</button>
                    <button className="price-btn">Fixed Price: Project Based</button>
                    <button className="price-btn">Full-Time</button>
                </ul>
                <h1 className="profile-heading">Portfolio / Previous Works</h1>
                

            </div>
        </div>
    )
}

export default Profile