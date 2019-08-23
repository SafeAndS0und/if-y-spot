import React, {useState, useEffect} from 'react'


export default ({children, songState}) =>{

   const state = useState(songState || {
      playing: false
   })

   return (
      <>
         {children}
      </>
   )
}