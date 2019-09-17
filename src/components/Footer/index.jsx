import React from 'react'
// import config from '../../../config'
import { Link } from 'gatsby'
import Logo from '../../assets/img/equineadvantage_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='footer is-paddingless'>
      <div className='section is-ea-black'>
        <div className='columns is-centered is-mobile'>
          <div className='column is-one-fifth-desktop is-half-mobile'>
            <p className='has-text-weight-bold has-text-light-grey is-size-6 is-size-7-mobile has-text-centered'>
              <u>LET'S STAY IN TOUCH</u>
            </p>

          </div>
        </div>
        <div className='columns is-centered'>
          <div className='column is-one-quarter has-text-centered has-text-low-starch-blue'>
            <FontAwesomeIcon icon='map-marker-alt' size='3x' />
            <br />
            <div className='button is-rounded is-low-starch-blue' style={{ height: 44, width: 191, marginTop: 30 }}>
              <Link to='/locator'><span className='has-text-ea-black'>FIND A STORE</span></Link>
            </div>
          </div>
          <div className='column is-one-quarter has-text-centered has-text-low-starch-blue'>
            <FontAwesomeIcon icon={['far', 'envelope']} size='3x' />
            <br />
            <div className='button is-rounded is-low-starch-blue has-text-ea-black' style={{ height: 44, width: 191, marginTop: 30 }}>
              <Link to='/contact'><span className='has-text-ea-black'>EMAIL US</span></Link>
            </div>
          </div>
          <div className='column is-one-quarter has-text-centered has-text-low-starch-blue'>
            <FontAwesomeIcon icon='link' size='3x' />
            <br />
            <div className='button is-rounded is-low-starch-blue has-text-ea-black' style={{ height: 44, width: 191, marginTop: 30 }}>
              <Link to='/'><span className='has-text-ea-black'>NEWSLETTER</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='section is-low-starch-blue'>
        <div className='columns is-centered is-mobile'>
          <div className='column is-one-fifth-desktop is-half-mobile'>
              <img src={Logo} />
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
