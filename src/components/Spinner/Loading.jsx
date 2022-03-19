import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="text-center position-relative text-white mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
