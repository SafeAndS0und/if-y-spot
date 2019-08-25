import React, {useState, useEffect} from 'react'
import './Main.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import FromBottom from '../../assets/transitions/FromBottom'


export default ({children, currentSong}) =>{

   const [showList, toggleShowList] = useState(false)
   const [songChosen, setSongChosen] = useState(false)


   useEffect(() =>{
      setTimeout(() => toggleShowList(true), 600)
   }, [])

   useEffect(() =>{
      if(currentSong && Object.entries(currentSong).length !== 0)
         setSongChosen(true)
   }, [currentSong])

   return (
      <div className="main-layout">

         <div className="sidebar-container">
            <Sidebar/>
         </div>

         <main>
            <Banner toggle={showList}/>

            <section>
               {children}
            </section>
         </main>

         <div className="footer-container">
            {songChosen}
            <FromBottom toggle={songChosen}>
               <Footer currentSong={currentSong}/>
            </FromBottom>
         </div>
      </div>
   )
}