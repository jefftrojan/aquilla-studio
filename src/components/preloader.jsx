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
    <p className="text-white sm:px-4 py-1 mr-1 z-10 sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">AQUILA</p>
    <span className="bg-white text-black rounded-xl px-2 py-1 relative z-10 text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">STUDIO</span>


    </div>
</div>
  )
}

export default PreLoader