import React from 'react'
import TimeList from '../components/Home/TimeList'
import SideNav from '../components/SideNav'

const Home: React.FC = () => {
  return (
    <div className='flex justify-between bg-gray-light'>
        <TimeList />
        <SideNav />
    </div>
  )
}

export default Home