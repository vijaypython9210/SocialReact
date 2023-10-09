import React, { useContext } from 'react'
import Nav from './Nav'
import DataContext from './context/DataContext'

const Header = ({ title }) => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <header>
      <div className="conatiner-fluid">
        <Nav title={title} search={search} setSearch={setSearch} />
      </div>
    </header>
  )
}

export default Header
