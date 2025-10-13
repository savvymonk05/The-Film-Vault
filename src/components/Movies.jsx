import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div className='p-3'>
     <div className='text-2xl font-bold  m-3 text-center'>Trending Movies

     </div>
     <div className=' flex flex-row flex-wrap justify-between'>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      
     </div>
    </div>
  )
}

export default Movies