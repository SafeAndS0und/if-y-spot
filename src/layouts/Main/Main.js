import React from 'react'
import './Main.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'

export default ({children}) =>{

   return (
      <div className="main-layout">

         <div className="sidebar-container">
            <Sidebar/>
         </div>


         <main >
            <Banner/>

            <section>
               {children}
            </section>
         </main>

         <div className="footer-container">
            <Footer/>
         </div>
      </div>
   )
}