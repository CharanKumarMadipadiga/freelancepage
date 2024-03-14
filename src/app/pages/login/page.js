"use client"

import React from 'react'
import Link from 'next/link'
import './page.css'

const Login = () => {

  const onSubmitLoginForm=(evennt)=>{
    event.preventDefault()
  }


  return (
    <div className='login-container'>
      <form className='login-card' onSubmit={onSubmitLoginForm}>
        <img src='https://static.wixstatic.com/media/e238b5_23a3e5e846dd4a19a47678f9c377c054~mv2.jpeg/v1/fill/w_349,h_98,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Header%20logo.jpeg' className='login-logo' alt='login logo'/>
        <h1 className='login-heading'>Login</h1>
        <input type="text" className='login-input-El' required placeholder='Email'/>
        <input type="text" className='login-input-El' required placeholder='Password'/>
        <p className='forgot-password'>Forgot Password?</p>
        <button className='login-page-btn' type='submit'>Log in</button>
        <div className='or-con'>
          <hr className='left-line'/>
          <button className='or-content'>OR</button>
          <hr className='right-line'/>
        </div>
        <div className='google-container'>
          <img src="https://s3-alpha-sig.figma.com/img/cd54/edb6/5f8516387eb6eaa7226265da583a37e9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A36Mp6~7KZPe9ciQqFTb0oZBmJ49mJogks-Aj3cTI8cCDiKy-oa8BdUdH8OrgDl0wbvbELiTy0cWXLGv2Poe7KAfsTjaNLI6aWjXnL0QuhGZs9XH99sYW5dYTO4Ly1JnJIxxO3SAqgM-7wyWms3LU-2koqRO6PFcObLUIExBRmn0-CwAsZ9jUiA6QMV7ZXnuWktACWOJBwvX0anNrStt~P~UgAdE1BUrgz~6jyVvRvalVBslb5dBiIuIOdhblJFtt5WBe1bLTERKHjbxL-J0CHY8eE953bQTq1vhLenfQh6bPr~w3nU0IblKjFkg9N4emM68hJtYmOfXfrXkLhZr9g_" alt='google image' className='google-img'/>
          <p className='google-text'>Login in with Google</p>
        </div>
        <p className='no-account'>No account?</p>
        <p className='freelancer-text'>Join Autonopros as a <Link href="#" className='span-El-login'>freelancer</Link> or <Link href="#" className='span-El-login'>client</Link></p>
      </form>
    </div>
  )
}

export default Login