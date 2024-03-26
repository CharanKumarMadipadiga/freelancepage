"use client"

import React from 'react';
import Link from 'next/link';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

import './page.css'


const Header=() =>{
    return (
        <nav className="nav-container">
            <Link href="/"><img src="https://static.wixstatic.com/media/e238b5_23a3e5e846dd4a19a47678f9c377c054~mv2.jpeg/v1/fill/w_349,h_98,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Header%20logo.jpeg" alt="Autonopros logo" className="logo"/></Link>
            <div className='input-container'>
                <input type="search" className="input-El" placeholder="search"/>
                <SearchIcon className="search-icon"/>
            </div>

            <ul className='tabs-list-desktop'>
                <Link href="/" className='tab-item border'>Home</Link>
                <Link href="/pages/profile" className='tab-item border'>Profile</Link>
                <Link href="/blog" className='tab-item border'>Blog</Link>
                <Link href="/pages/login"><button className='login-btn'>Log In</button></Link>
                <Link href="/pages/signup"><button className='signup-btn'>Sign Up</button></Link>
            </ul>
            <ul className='tabs-list-small'>
                <li><HomeIcon color="primary"/></li>
                <button className='login-btn'>Log In</button>
                <button className='signup-btn'>Sign Up</button>
                
            </ul>
            
        </nav>
    )
}

export default Header