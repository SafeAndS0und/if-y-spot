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
import Music from '../../helpers/Music'
import timePrettifier from '../../helpers/timePrettifier'

let intervalId

export default ({currentSong}) =>{

   const [lineWidth, setLineWidth] = useState(0)
   const [playing, togglePlaying] = useState(false)
   const [playedProportion, setPlayedProportion] = useState(0)
   const [lineGTC, setLineGTC] = useState('0 15px auto')
   const [currentTime, updateCurrentTime] = useState(0)
   const [songDuration, setSongDuration] = useState(null)

   let lineRef = null

   const setLineRef = element =>{
      if(element)
         lineRef = element
   }

   useEffect(() =>{
      const updateLineWidth = () =>{
         setLineWidth(() =>{
            return lineRef.clientWidth
         })
      }
      updateLineWidth()
      window.addEventListener('resize', updateLineWidth)

      return () =>{
         window.removeEventListener('resize', updateLineWidth)
      }

   }, [])

   const enableCountdown = () =>{
      intervalId = setInterval(() =>{
         updateCurrentTime(currentTime =>{
            const newTime = currentTime + 1
            updateCircleVisualPos(Math.floor((newTime / songDuration) * 100))
            return newTime
         })
      }, 1000)
   }

   const handleSongChange = duration =>{
      updateCurrentTime(0)
      updateCircleVisualPos(0)
      clearInterval(intervalId)
      setSongDuration(duration)
      togglePlaying(false)

      setTimeout(() => {
         togglePlaying(true)
         enableCountdown()
      }, 800)
   }

   const handlePlayClick = () =>{
      togglePlaying(!playing)
      enableCountdown()
   }

   const handlePauseClick = () =>{
      togglePlaying(!playing)
      clearInterval(intervalId)
   }

   const handleLineClick = e =>{
      const proportion = Math.floor((e.nativeEvent.offsetX / lineWidth) * 100)
      const uglyTime = songDuration * (proportion * 0.01)
      const prettyTime = Math.round(uglyTime)
      updateCurrentTime(prettyTime)
      setPlayedProportion(proportion)
      updateCircleVisualPos(proportion)
   }

   const updateCircleVisualPos = (lineBeforeWidth) =>{
      setLineGTC(`${lineBeforeWidth}% 15px auto`)
   }

   return (
         <footer>
            <section className="now-playing">
               <img src={currentSong.imgURL} alt="artist"/>
               <div className="author">
                  <h3>{currentSong.title}</h3>
                  <p>{currentSong.artist}</p>
               </div>
            </section>

            <section className="controls">
               <FaStepBackward className="control"/>

               <Music playing={playing}
                      setPlaying={togglePlaying}
                      url={currentSong.url}
                      onSongChange={handleSongChange}
                      ended={handleSongChange}
                      proportion={playedProportion}>
                  {
                     playing
                        ? <FaPauseCircle className="control play" onClick={handlePauseClick}/>
                        : <FaPlayCircle className="control play" onClick={handlePlayClick}/>
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

                  <div className="invisible">
                  </div>
                  <div className="line-before">
                  </div>
                  <div className="circle">
                  </div>
                  <div className="line-after">
                  </div>

               </div>

               <span
                  className="time">{currentTime === 0 ? null : timePrettifier(currentTime) + ' / '} {timePrettifier(songDuration)}</span>
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