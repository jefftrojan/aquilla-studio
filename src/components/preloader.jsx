import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from './animate'

function PreLoader() {
    useEffect(() => { 
        preLoaderAnim()

    }, [] )
  return (
    <div className='preloader'>
        <div className='texts-container'>
        <div class="loader">
  <div class="light"></div>
  <div class="black_overlay"></div>
</div>


        </div>
    </div>
  )
}

export default PreLoader