import React, {useState, useEffect} from 'react'

export default ({children, playing, url, setPlaying}) =>{

   const [audio, setNewAudio] = useState(new Audio(url))

   useEffect(() =>{
      if(playing){
         const promise = audio.play()
         if(promise !== undefined){
           promise
              .catch(err => console.error(err.message))
         }

      } else{
         audio.pause()
      }
   }, [playing])

   useEffect(() => {
      setPlaying(false)
      audio.pause()
      setNewAudio(new Audio(url))
   }, [url])

   return (
      <>
         {children}
      </>
   )
}