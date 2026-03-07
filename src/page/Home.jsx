import React from 'react'
import { useState } from 'react'
import Nav from '../components/Nav'
import MovieList from '../components/MovieList'
import MoodMatch from '../components/Matcher'

const Home = () => {
    const [searchText, setSearchText] = useState('')
    const [mood, setMood] = useState(false)
  return (
    <div>
      <Nav  searchText={searchText} setSearchText={setSearchText} />
      <MoodMatch setMood={setMood} setSearchText={setSearchText} />
      <MovieList mood={mood} setMood={setMood} searchText={searchText}/>
    </div>
  )
}

export default Home
