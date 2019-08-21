import React from 'react'
import MainLayout from './layouts/Main/Main'
import Songs from './components/Songs/Songs'

function App(){
   return (
      <div className="App">

         <MainLayout>
            <Songs />
         </MainLayout>

      </div>
   )
}

export default App