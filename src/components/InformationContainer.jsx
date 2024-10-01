import React from 'react'
import { AiFillPhone,AiOutlineMail,AiFillEnvironment } from 'react-icons/ai'
import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return(
  <section id="information">
        <div className="info-card"> {/* Use a unique key */}
          <AiFillPhone id="phone-icon"/>
          <div>
              <h3>Cell Phone</h3>
              <p>+55 (19)99645-0442</p>
          </div>   
        </div> 
        <div className="info-card"> {/* Use a unique key */}
          <AiOutlineMail id="email-icon"/>
          <div>
              <h3>Email</h3>
              <p>gabisinhas@yahoo.com.br</p>
          </div>   
        </div> 
        <div className="info-card"> {/* Use a unique key */}
          <AiFillEnvironment id="pin-icon"/>
          <div>
              <h3>Address</h3>
              <p>Hortolandia-SP-Brazil</p>
          </div>   
        </div>         
  </section>
  )
}

export default InformationContainer
