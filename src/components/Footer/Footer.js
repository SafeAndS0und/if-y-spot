import React from 'react'
import './Footer.scss'
import {FaAngleLeft, FaAngleRight, FaPlayCircle} from "react-icons/fa"

export default () =>{

   return (
      <footer>

         <section className="now-playing">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71tptrd%2BWIL._SY355_.png" alt=""/>
            <div className="author">
               <h3>Eminem</h3>
               <p>
                  Lose Yourself
               </p>
            </div>
         </section>

         <section className="controls">
            <FaAngleLeft className="control"/>
            <FaPlayCircle className="control play"/>
            <FaAngleRight className="control"/>
         </section>

      </footer>
   )
}