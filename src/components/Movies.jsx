import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=cde75a772c3c08f6704b95d5e6dedae3&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
      .then(function (res) {
        console.log(res.data)
        setMovies(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className='p-3'>
      <div className='text-2xl font-bold m-3 text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-5'>
        {movies.map((movieObj) => (
          <MovieCard 
             
            poster_path={movieObj.poster_path} name = {movieObj.original_title}
          />
        ))}
      </div>
    </div>
  )
}

export default Movies
