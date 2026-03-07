import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const Favorities = () => {
    const [movieData, setData] = useState([])
    useEffect(()=>{
         const stored = JSON.parse(localStorage.getItem("favorite")) || [];
         setData(stored)
         
    },[])
    console.log(movieData)
  return (
    <div className='p-4'>
      <div className='flex gap-4 justify-center items-center'>
        <Link to={'/'} className='px-3 py-1 text-white text-lg font-medium rounded-lg bg-black' > Home</Link>
        <h1 className='text-xl font-medium'>Your Favorite Movies</h1>
      </div>
      {
        movieData.length<1?<div className='h-screen flex justify-center items-center text-xl'>No favorite movies</div>:''
      }
       <div className="mt-20 gap-4 lg:px-10 p-2 items-center grid-cols-2  grid lg:grid-cols-7 ">
        {
            movieData.map((val)=>(
                <div key={val.id} className="inf-scroll">
                    <MovieCard id={val.id}
                    pic={val.pic}
                    title={val.title}
                    release={val.release}
                    rating={val.rating}
                />
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Favorities
