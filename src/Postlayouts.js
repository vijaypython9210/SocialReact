import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Postlayouts = () => {
  return (
    <div>
    <ul>
      <li><Link to="1">post 1</Link></li>
      <li><Link to="2">post 2</Link></li>
      <li><Link to="3">post 3</Link></li>
    </ul>
   <Outlet />
    </div>
  )
}

export default Postlayouts
