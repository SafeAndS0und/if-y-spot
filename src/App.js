import React, {useState} from 'react'
import MainLayout from './layouts/Main/Main'
import Songs from './components/Songs/Songs'
import songsData from './assets/songsData'

function App(){

   const [currentSongId, setCurrentSongId] = useState(-1)

   const findCurrentSongId = falsyList => {
      return falsyList.findIndex(value => value)
   }
   return (
      <div className="App">

         <MainLayout currentSongId={currentSongId}>
            <Songs songsData={songsData} songChanged={falsyList => setCurrentSongId(findCurrentSongId(falsyList))} />
         </MainLayout>

      </div>
   )
}

export default App