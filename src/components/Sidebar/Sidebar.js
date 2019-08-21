import React, {useState, useEffect} from 'react'
import './Sidebar.scss'
import {FaSearch, FaRegHeart, FaRegPlayCircle, FaUserAlt, FaRegChartBar} from "react-icons/fa"
import Fade from '../../assets/transitions/Fade'

export default () =>{

   const [menuItems, setMenuItems] = useState([
      {icon: FaSearch, text: 'Search', show: false},
      {icon: FaRegHeart, text: 'Favorites', show: false},
      {icon: FaRegPlayCircle, text: 'Playlists', show: false},
      {icon: FaUserAlt, text: 'Artists', show: false},
      {icon: FaRegChartBar, text: 'Stats', show: false},
   ])

   useEffect(() =>{
      menuItems.forEach((item, index) =>{
         setTimeout(() =>{

            setMenuItems(menuItems =>{
               return [
                  ...menuItems.slice(0, index),
                  Object.assign({}, menuItems[index], {show: true}),
                  ...menuItems.slice(index + 1),
               ]
            })
         }, 200 * index)
      })

   }, [])

   return (
      <nav>

         <div className="brand">
            <h3>totallynotspotify</h3>
         </div>

         <div className="menu">

            <ul>
               {
                  menuItems.map((item, index) => (
                        <Fade key={item.text} toggle={item.show}>
                           <li className={index === 1 ? 'active' : null}>
                              {React.createElement(item.icon, {className: 'icon'})}
                              <p>{item.text}</p>
                           </li>
                        </Fade>
                     )
                  )
               }
            </ul>

         </div>

      </nav>
   )
}