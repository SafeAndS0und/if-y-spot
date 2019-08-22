import React from 'react'
import './Footer.scss'
import {FaStepBackward, FaStepForward, FaPlayCircle, FaHeart, FaRetweet, FaVolumeUp, FaSync} from "react-icons/fa"
import songsData from '../../assets/songsData'

export default ({currentSongId: id}) =>{

   return (
      <footer>

         <section className="now-playing">
            <img src={songsData[id].imgURL} alt="artist"/>
            <div className="author">
               <h3>{songsData[id].title}</h3>
               <p>{songsData[id].artist}</p>
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