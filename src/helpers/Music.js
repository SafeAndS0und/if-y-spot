import React, {useState, useEffect} from 'react'

export default ({children, playing, url, setPlaying, onSongChange}) =>{

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
      setNewAudio(() => {
         const audio = new Audio(url)

         //send the duration to the parent
         audio.addEventListener('loadedmetadata', () => {
            onSongChange(audio.duration)
         })

         audio.volume = 0.1

         return audio
      })
   }, [url])

   return (
      <>
         {children}
      </>
   )
}