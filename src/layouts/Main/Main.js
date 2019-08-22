import React, {useState, useEffect} from 'react'
import './Main.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import FromBottom from '../../assets/transitions/FromBottom'


export default ({children}) =>{

   const [showList, toggleShowList] = useState(false)

   useEffect(() =>{
      setTimeout(() => toggleShowList(true), 600)
   }, [])


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
            <FromBottom toggle={showList}>
               <Footer/>
            </FromBottom>
         </div>
      </div>
   )
}