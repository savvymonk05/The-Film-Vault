import React from 'react'

function MovieCard({ poster_path , name }) {   
  return (
    <div
      className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      <div className='absolute bottom-0 text-white text-xl p-2 text-center w-full bg-gray-900/60'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
