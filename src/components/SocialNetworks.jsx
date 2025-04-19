import React from 'react'
import '../styles/components/socialnetworks.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialNetworks = [
    {name: "linkedin",id:"https://www.linkedin.com/in/gabsanto/" ,icon: <FaLinkedinIn />},
    {name: "github", id:"https://github.com/gabisinhas?tab=repositories",icon: <FaGithub />},
]

const SocialNetworks = () => {
  return (<section id="social-networks">
    {socialNetworks.map((network) =>(
        <a href={network.id} className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
);
}

export default SocialNetworks
