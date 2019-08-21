import React, {useState, useEffect} from 'react'
import './Songs.scss'
import {FaHeart, FaEllipsisH, FaRandom} from "react-icons/fa"
import Fade from '../../assets/transitions/Fade'

export default () =>{

   const [showList, toggleShowList] = useState(false)

   useEffect(() => {
      setTimeout(() => toggleShowList(true), 300)
   }, [])

   return (
      <div className="songs">
         <div className="top">
            <h2>Favorites</h2>
            <p>43 songs, updated yesterday</p>

            <div className="right">
               <p>Shuffle All</p>
               <FaRandom/>
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


               <article className="active">
                  <div className="track">
                     <img src="https://images-na.ssl-images-amazon.com/images/I/71tptrd%2BWIL._SY355_.png" alt=""/>
                     <h3 className="title">Lose Yourself</h3>
                     <p className="artist">Eminem</p>
                  </div>

                  <p className="album">
                     8 mile
                  </p>

                  <p className="duration">
                     3:20
                  </p>

                  <FaHeart className="heart"/>
                  <FaEllipsisH className="dots"/>
               </article>

               <article>
                  <div className="track">
                     <img src="https://placeimg.com/50/50/people" alt=""/>
                     <h3 className="title">You're on fire</h3>
                     <p className="artist">They Might Be Giants</p>
                  </div>

                  <p className="album">
                     Nanobots
                  </p>

                  <p className="duration">
                     4:31
                  </p>

                  <FaHeart className="heart"/>
                  <FaEllipsisH className="dots"/>
               </article>

               <article>
                  <div className="track">
                     <img
                        src="https://gfx.antyradio.pl/var/ezflow_site/storage/images/muzyka/muzoteka/system-of-a-down/32060-2-pol-PL/System-Of-A-Down_article.jpg"
                        alt=""/>
                     <h3 className="title">Lost in Holywood</h3>
                     <p className="artist">System Of A Down</p>
                  </div>

                  <p className="album">
                     Mezmerize
                  </p>

                  <p className="duration">
                     3:45
                  </p>

                  <FaHeart className="heart"/>
                  <FaEllipsisH className="dots"/>
               </article>

               <article>
                  <div className="track">
                     <img src="https://placeimg.com/50/50/tech" alt=""/>
                     <h3 className="title">Great Vacation</h3>
                     <p className="artist">Dirt Poor Robins</p>
                  </div>

                  <p className="album">
                     The Cage
                  </p>

                  <p className="duration">
                     5:07
                  </p>

                  <FaHeart className="heart"/>
                  <FaEllipsisH className="dots"/>
               </article>


               <article>
                  <div className="track">
                     <img
                        src="data:image/jpeg;base64,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"
                        alt=""/>
                     <h3 className="title">Nie Ma Fal 🚫🌊😂😂</h3>
                     <p className="artist">Dawid Podsiadło</p>
                  </div>

                  <p className="album">
                     Nuda
                  </p>

                  <p className="duration">
                     3:58
                  </p>

                  <FaHeart className="heart"/>
                  <FaEllipsisH className="dots"/>
               </article>

               <article>
                  <div className="track">
                     <img src="https://images.sk-static.com/images/media/profile_images/artists/29315/huge_avatar"
                          alt=""/>
                     <h3 className="title">Stranger Things Have Happened</h3>
                     <p className="artist">Foo Fighters</p>
                  </div>

                  <p className="album">
                     Echos, Silence...
                  </p>

                  <p className="duration">
                     4:51
                  </p>

                  <FaHeart className="heart"/>
                  <FaEllipsisH className="dots"/>
               </article>
            </div>
         </Fade>


      </div>
   )
}