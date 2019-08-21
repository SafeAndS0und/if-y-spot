import React from 'react'
import './Sidebar.scss'
import { FaSearch, FaRegHeart, FaRegPlayCircle, FaUserAlt, FaRegChartBar } from "react-icons/fa";

export default () => {

   return (
      <nav>

         <div className="brand">
            <h3>if(y)spot</h3>
         </div>

         <div className="menu">

            <ul>
               <li>
                  <FaSearch className="icon" />
                  <p>Search</p>
               </li>

               <li className="active">
                  <FaRegHeart className="icon" />
                  <p>Favorites</p>
               </li>

               <li>
                  <FaRegPlayCircle className="icon" />
                  <p>Playlists</p>
               </li>

               <li>
                  <FaUserAlt className="icon" />
                  <p>Artists</p>
               </li>

               <li>
                  <FaRegChartBar className="icon" />
                  <p>Stats</p>
               </li>
            </ul>

         </div>

      </nav>
   )
}