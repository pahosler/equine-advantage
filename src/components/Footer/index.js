import React from 'react'
// import Logo from '../../assets/img/equineadvantage_logo_white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ logo, email, newsletter }) => {
  return (
    <footer id='contact' className='footer is-paddingless'>
      <div className='section is-ea-black'>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <figure className='image'>
                <img src={logo} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
