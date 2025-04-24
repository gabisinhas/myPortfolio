import React from 'react'
import Avatar from '../../img/eu.jpg'
import "./sidebar.sass"
import SocialNetworks from '../SocialNetwork/SocialNetworks'
import InformationContainer from '../Information/InformationContainer'

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
