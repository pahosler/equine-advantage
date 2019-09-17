import React from 'react'
import PropTypes from 'prop-types'

const Advantage = ({ advantage }) => (
  <div className='section'>
    <div className='columns is-centered'>
      <div className='column is-half'>
        <h1 className='is-size-4 has-text-ea-black has-text-centered'>
          <strong>
            <u>WHAT MAKES EA DIFFERENT</u>
          </strong>
        </h1>
      </div>
    </div>
    <div className='column is-three-fifths is-offset-one-fifth'>
      <div className='columns is-multiline is-centered'>
        {advantage.map(({ image, text }, keys) => (
          <div key={keys} className='column is-one-third'>
            <div className='has-text-centered'>
              <img alt='advantage icon' width={100} src={image} />
            </div>
            <p className='is-size-5 has-text-ea-black has-text-centered is-Gilroy-extra-bold' style={{ paddingTop: 20 }}>
              {text} yo
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

Advantage.propTypes = {
  advantage: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Advantage
