import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

function Movies() {
  const [movies, setMovies] = useState([])  // ✅ useState should be declared directly, not inside another function

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=cde75a772c3c08f6704b95d5e6dedae3&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
      .then(function(res) {
        console.log(res.data) // ✅ check what comes from API
        setMovies(res.data.results) // ✅ the correct key is 'results' not 'result'
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

      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movieObj) => (
          <MovieCard key={movieObj.id} movie={movieObj} />  // ✅ pass movie data and add a unique key
        ))}
      </div>
    </div>
  )
}

export default Movies
