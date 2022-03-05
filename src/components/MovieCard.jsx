import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({imgUrl,id}) => {
  return (
    <div className='mt-4 mx-3'>
      <Link to={`/movie/${id}`}> <img className=' w-60' src={imgUrl} alt="" /></Link>
        
    </div>
  )
}

export default MovieCard
