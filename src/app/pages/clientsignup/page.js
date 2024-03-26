"use client"

import React from 'react'
import Link from 'next/link'
import './page.css'

const ClientSignUp = () => {

  const onSubmitSignUpForm=(event)=>{
    event.preventDefault()
  }

  return (
    <div className='signup-container'>
      <form className='signup-card' onSubmit={onSubmitSignUpForm}>
        <img src='https://static.wixstatic.com/media/e238b5_23a3e5e846dd4a19a47678f9c377c054~mv2.jpeg/v1/fill/w_349,h_98,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Header%20logo.jpeg' className='signup-logo' alt='login logo'/>
        <h1 className='signup-desktop-heading'>Signup to hire autonomous professionals</h1>
        <h1 className="signup-heading-mobile">Signup to be a professional</h1>
        <input type="text" className='signup-input-El' required placeholder='First Name'/>
        <input type="text" className='signup-input-El' required placeholder='Last Name'/>
        <input type="text" className='signup-input-El' required placeholder='Email'/>
        <input type="text" className='signup-input-El' required placeholder='Password'/>
        <div className="agreement-con">
          <input type="checkbox" className="check-box-agreement"/>
          <p className="agreement-description">Yes, I understand and agree to the <span className="terms-of-service">Autonopros Terms of Service</span>, 
            including the User Agreement,and Privacy Policy.</p>
        </div>
        <button className='signup-page-btn' type='submit'>Create my account</button>
        <p className="have-an-account">Already have an account?   <Link href="/pages/login" className="span-El">Log in</Link></p>
        <div className='or-con'>
          <hr className='left-line'/>
          <button className='or-content'>OR</button>
          <hr className='right-line'/>
        </div>
        <div className='signup-google-container'>
          <img src="https://s3-alpha-sig.figma.com/img/cd54/edb6/5f8516387eb6eaa7226265da583a37e9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A36Mp6~7KZPe9ciQqFTb0oZBmJ49mJogks-Aj3cTI8cCDiKy-oa8BdUdH8OrgDl0wbvbELiTy0cWXLGv2Poe7KAfsTjaNLI6aWjXnL0QuhGZs9XH99sYW5dYTO4Ly1JnJIxxO3SAqgM-7wyWms3LU-2koqRO6PFcObLUIExBRmn0-CwAsZ9jUiA6QMV7ZXnuWktACWOJBwvX0anNrStt~P~UgAdE1BUrgz~6jyVvRvalVBslb5dBiIuIOdhblJFtt5WBe1bLTERKHjbxL-J0CHY8eE953bQTq1vhLenfQh6bPr~w3nU0IblKjFkg9N4emM68hJtYmOfXfrXkLhZr9g_" alt='google image' className='signup-google-img'/>
          <p className='signup-google-text'>Continue with Google</p>
        </div>

      </form>
    </div>
  )
}

export default ClientSignUp