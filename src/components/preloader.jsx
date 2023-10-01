import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from './animate'
import logo from '../assets/logo.png'

function PreLoader() {
    useEffect(() => { 
        preLoaderAnim()

    }, [] )
  return (
    <div className='preloader'>
        <div className='texts-container'>
            <img src={logo} alt='logo' className='logo text-color-red' />

            

        </div>
    </div>
  )
}

export default PreLoader