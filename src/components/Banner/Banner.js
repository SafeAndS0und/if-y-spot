import React from 'react'
import './Banner.scss'
import BannerSVG from '../SVG/BannerSVG'
import Fade from '../../assets/transitions/Fade'

export default (props) =>{

   return (
      <header>
         <BannerSVG/>
         <Fade toggle={props.toggle}>
            <h1>
               Let us get you through the day <br/>
               With music.
            </h1>
         </Fade>
      </header>
   )
}