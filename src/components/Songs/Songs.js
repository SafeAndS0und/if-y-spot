import React from 'react'
import './Songs.scss'
import {FaHeart, FaEllipsisH} from "react-icons/fa"

export default () =>{

   return (
      <div className="songs">
         <div className="top">
            <h2>Favorites</h2>
            <p>43 songs, updated yesterday</p>
         </div>

         <div className="list">
            <div className="headline">
               <h4>Track</h4>
               <h4>Album</h4>
               <h4>Duration</h4>
            </div>

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
                  <img src="https://placeimg.com/50/50/tech" alt=""/>
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
         </div>


      </div>
   )
}