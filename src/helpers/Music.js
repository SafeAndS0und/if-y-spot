import React, {useState, useEffect} from 'react'

export default ({children, playing, url, setPlaying}) =>{

   const [audio, setNewAudio] = useState(new Audio(url))

   useEffect(() =>{
      console.log('playing effect')
      if(playing){
         console.log('gonna play')
         const promise = audio.play()
         if(promise !== undefined){
           promise
              .catch(err => console.error(err.message))
         }

      } else{
         console.log('gonna pause')
         audio.pause()
      }
   }, [playing])

   useEffect(() => {
      console.log('url effect')
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