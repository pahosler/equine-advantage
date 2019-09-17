import React from 'react'
import PropTypes from 'prop-types'
// import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from 'react-mapbox-gl'

// const Map = ReactMapboxGl({
//   accessToken:
//     'pk.eyJ1IjoicGFob3NsZXIiLCJhIjoiY2p5bWF0dnl2MGhiYzNjbXlnMjJzcWEwaCJ9.gWAMa4wXcII86dxSrLIJQQ',
// })

const StoreLocatorPage = ({
  title,
  subtitle,
  heading,
  meta_title,
  meta_description,
}) => (
  <section className='section'>
    <div className='tile is-ancestor'>
      <div className='tile is-parent'>
        <article className='tile is-child '>
          <p className='title'>Side column</p>
          <p className='subtitle'>With some content</p>
          <div className='content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
      <div className='tile is-parent is-8'>
        <article className='tile is-child box'>
          <p className='title'>Main column</p>
          <p className='subtitle'>With some content</p>
          <div className='content'>
            {/* <Map
              style='mapbox://styles/mapbox/streets-v11'
              center={[-90.120844, 29.958165]}
              containerStyle={{
                height: 500,
                width: 500,
              }}
            >
              <ZoomControl position='bottom-right' />
              <Layer className='marker' type='symbol' id='marker' layout={{ 'icon-image': 'harbor-15' }}>
                <Feature coordinates={[-90.120844, 29.958165]} />
              </Layer>
            </Map> */}
          </div>
        </article>
      </div>
    </div>
  </section>
)

StoreLocatorPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default StoreLocatorPage
