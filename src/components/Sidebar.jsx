import React from 'react'
import Avatar from '../img/eu.jpg'
import "../styles/components/sidebar.sass"
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="photo" />
      <p className='title'>Full Stack Developer</p>
      <SocialNetworks />
      <InformationContainer />
    </aside>
  )
}

export default SideBar
