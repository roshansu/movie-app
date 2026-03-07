import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Nav = ({searchText, setSearchText}) => {
  return (
    <div className='w-full items-center bg-gray-100 px-4 py-3 fixed top-0 border-b border-slate-400 flex justify-around'>
      <Search searchText={searchText} setSearchText={setSearchText} />

      <Link to={'/favorities'}><i className="fa-solid text-xl fa-heart"></i></Link>
    </div>
  )
}

export default Nav
