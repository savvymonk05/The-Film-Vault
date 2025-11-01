import React from 'react'

function MovieCard() {
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage:`url(https://i.redd.it/mf614hti1r9b1.jpg)`}}></div>
  )
}

export default MovieCard
// https://api.themoviedb.org/3/discover/movie?api_key=cde75a772c3c08f6704b95d5e6dedae3&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc