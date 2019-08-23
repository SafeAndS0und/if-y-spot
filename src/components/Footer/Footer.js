import React, {useState, useEffect} from 'react'
import './Footer.scss'
import {
   FaStepBackward,
   FaStepForward,
   FaPlayCircle,
   FaHeart,
   FaRetweet,
   FaVolumeUp,
   FaSync,
   FaPauseCircle
} from "react-icons/fa"
import songsData from '../../assets/songsData'
import Music from '../../helpers/Music'

export default ({currentSongId: id}) =>{

   const [timerWidth, setTimerWidth] = useState(0)
   const [playing, togglePlaying] = useState(false)

   let timerRef = null

   const setTimerRef = element =>{
      if(element)
         timerRef = element
   }

   useEffect(() =>{
      const before = timerRef.children[0].children[0]
      const after = timerRef.children[0].children[1]

      const updateTimerWidth = () =>{
         setTimerWidth(() =>{
            // if(!timerRef) return 0
            const newTimerWidth = timerRef.clientWidth * (6 / 7) // g-t-c: 6fr 1fr
            before.style.width = `${newTimerWidth / 2}px`
            after.style.width = `${newTimerWidth / 2}px`
            return newTimerWidth
         })
      }

      updateTimerWidth()

      window.addEventListener('resize', updateTimerWidth)

      return () =>{
         window.removeEventListener('resize', updateTimerWidth)
      }

   }, [])

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

            <Music playing={playing} setPlaying={togglePlaying} url={songsData[id].url}>
               {playing
                  ? <FaPauseCircle className="control play" onClick={() => togglePlaying(!playing)}/>
                  : <FaPlayCircle className="control play" onClick={() => togglePlaying(!playing)}/>
               }
            </Music>

            <FaStepForward className="control"/>
         </section>

         <section className="timer" ref={setTimerRef}>

            <div className="circle">
               <span className="line-before"></span>
               <span className="line-after"></span>
            </div>

            <span className="time">{songsData[id].duration}</span>
         </section>

         <section className="settings">
            <FaVolumeUp className="setting"/>
            <FaHeart className="setting"/>
            <FaRetweet className="setting"/>
            <FaSync className="setting"/>
         </section>

      </footer>
   )
}