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

   const [lineWidth, setLineWidth] = useState(0)
   const [playing, togglePlaying] = useState(false)
   const [lineGTC, setLineGTC] = useState('0 15px auto')
   const [circlePosition, setCirclePosition] = useState(0)

   let lineRef = null

   const setLineRef = element =>{
      if(element)
         lineRef = element
   }

   useEffect(() =>{
      const updateLineWidth = () =>{
         setLineWidth(() =>{
            return lineRef.clientWidth // g-t-c: 6fr 1fr
         })
      }
      updateLineWidth()
      window.addEventListener('resize', updateLineWidth)

      return () =>{
         window.removeEventListener('resize', updateLineWidth)
      }

   }, [])

   const handleLineClick = e =>{
      const proportion = Math.floor((e.nativeEvent.offsetX / lineWidth) * 100)
      console.log("offset", e.nativeEvent.offsetX, "lineWidth", lineWidth)
      console.log(proportion, (e.nativeEvent.offsetX / lineWidth))
      updateCircleVisualPos(proportion)
      setCirclePosition(proportion)
   }

   const updateCircleVisualPos = (lineBeforeWidth) =>{
      setLineGTC(`${lineBeforeWidth}% 15px auto`)
   }
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

         <section className="timer">

            <div className="line-container"
                 ref={setLineRef}
                 onClick={handleLineClick}
                 style={{
                    gridTemplateColumns: lineGTC
                 }}>

               <div className="line-before">
               </div>
               <div className="circle">
               </div>
               <div className="line-after">
               </div>

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