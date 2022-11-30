import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallmovies } from './../../js/actions/movieActions';
import MovieCard from './MovieCard';

const MovieList = () => {
    const dispatch=useDispatch()
    useEffect(() => {
     dispatch(getallmovies()) 
    }, [])
    const loading=useSelector(state=>state.movieReducer.loading)
    const movieList=useSelector(state=>state.movieReducer.movieList)
    if (loading) {
        return "..........loading"
    }
  return (
    <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-around"}}>
      {movieList.map((el,i) => (
        <MovieCard el={el} key={i} />
      ))}
    </div>
  )
}

export default MovieList