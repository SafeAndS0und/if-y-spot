import React from 'react'
import './Footer.scss'
import {FaStepBackward, FaStepForward, FaPlayCircle, FaHeart, FaRetweet, FaVolumeUp, FaSync} from "react-icons/fa"

export default () =>{

   return (
      <footer>

         <section className="now-playing">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71tptrd%2BWIL._SY355_.png" alt=""/>
            <div className="author">
               <h3>Lose Yourself</h3>
               <p>Eminem</p>
            </div>
         </section>

         <section className="controls">
            <FaStepBackward className="control"/>
            <FaPlayCircle className="control play"/>
            <FaStepForward className="control"/>
         </section>

         <section className="timer">
            <div className="line">

            </div>

            <div className="circle">

            </div>

            <span className="time">2:43</span>
         </section>

         <section className="settings">
            <FaHeart className="setting" />
            <FaRetweet className="setting" />
            <FaVolumeUp className="setting" />
            <FaSync className="setting" />
         </section>

      </footer>
   )
}