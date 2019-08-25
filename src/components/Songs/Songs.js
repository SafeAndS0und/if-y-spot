import React, {useState, useEffect} from 'react'
import './Songs.scss'
import {FaHeart, FaEllipsisH, FaRandom} from "react-icons/fa"
import Fade from '../../assets/transitions/Fade'

export default ({songsData, songChanged, shuffle, setCurrentSong}) =>{

   const [showList, toggleShowList] = useState(false)
   const [isActive, setIsActive] = useState([])

   useEffect(() =>{
      setTimeout(() => toggleShowList(true), 300)

      const falseList = []
      songsData.forEach(() => falseList.push(false))

      setIsActive(falseList)
   }, [])


   const updateIsActive = (id) => {
      setIsActive(isActive => {
         const list = isActive.map((value, i ) => i === id)

         // songChanged(list)
         return list
      })
   }

   useEffect(() => {
      setCurrentSong(songsData.find(({id}) => isActive[id]))
   }, [isActive])

   return (
      <div className="songs">
         <div className="top">
            <h2>Favorites</h2>
            <p>{songsData.length} songs, updated yesterday</p>

            <div className="right">
               <p onClick={shuffle}>Shuffle All</p>
               <FaRandom onClick={shuffle}/>
               <FaEllipsisH/>

            </div>
         </div>

         <Fade toggle={showList}>
            <div className="list">
               <div className="headline">
                  <h4>Track</h4>
                  <h4>Album</h4>
                  <h4>Duration</h4>
               </div>

               {
                  songsData.map((song, index) =>{

                     return (
                        <article key={song.title} onClick={() => updateIsActive(song.id)}
                                 className={isActive[song.id] ? "active" : null}>
                           <div className="track">
                              <img src={song.imgURL} alt="artist"/>
                              <h3 className="title">{song.title}</h3>
                              <p className="artist">{song.artist}</p>
                           </div>

                           <p className="album">
                              {song.album}
                           </p>

                           <p className="duration">
                              {song.duration}
                           </p>

                           <FaHeart className="heart"/>
                           <FaEllipsisH className="dots"/>
                        </article>
                     )

                  })
               }


            </div>
         </Fade>


      </div>
   )
}