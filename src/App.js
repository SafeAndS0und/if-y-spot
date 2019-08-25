import React, {useState} from 'react'
import MainLayout from './layouts/Main/Main'
import Songs from './components/Songs/Songs'
import songsData from './assets/songsData'
import _shuffle from 'lodash/shuffle'

function App(){

   const [songs, setSongs] = useState(songsData)
   const [currentSong, setCurrentSong] = useState(null)

   const shuffle = () =>{
      setSongs(songs => _shuffle(songs))
   }

   return (
      <div>
         <MainLayout currentSong={currentSong}>
            <Songs songsData={songs}
                   setCurrentSong={setCurrentSong}
                   shuffle={shuffle}
                   />
         </MainLayout>

      </div>
   )
}

export default App