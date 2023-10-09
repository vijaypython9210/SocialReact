import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main>
      <h1>OOPS! Page Url is not found</h1>
      <p>Please visit to <b><Link to='/'>Home Page</Link></b></p>
    </main>
  )
}

export default Missing
