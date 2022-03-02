import React from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const { id } = useParams() || "id";
  return (
    <div>
          <h1>this is detail page of this id: { id}</h1>
    </div>
  )
}

export default Details
