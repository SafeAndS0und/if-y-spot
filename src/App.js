import React from 'react'
import MainLayout from './layouts/Main/Main'
import Songs from './components/Songs/Songs'
import songsData from './assets/songsData'

function App(){
   return (
      <div className="App">

         <MainLayout>
            <Songs songsData={songsData} />
         </MainLayout>

      </div>
   )
}

export default App