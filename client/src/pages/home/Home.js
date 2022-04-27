import React from 'react'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/Topbar'
import './home.css';

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}
