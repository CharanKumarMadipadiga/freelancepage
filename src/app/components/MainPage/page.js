"use client"

import React from 'react'
import Header from '../Header/page'
import './page.css'

const MainPage=()=> {
    return  (
        <>
            <Header/>
            <div className="home-container">
                <div className='home-content'>
                    <div className='home-top-section-content'>
                        <h1 className='home-heading'>Whatever you are be a good one.</h1>
                        <button className='get-started-btn'>Get started</button>
                    </div>
                    <img src="https://ainal.me/wp-content/uploads/2020/10/Hire-Freelancer.jpg" className='freelancer-img'/>
                </div>
            </div>
        </>
    )
}

export default MainPage