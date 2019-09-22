import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Map, Info } from 'react-store-locator'
// import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from 'react-mapbox-gl'

// const Map = ReactMapboxGl({
//   accessToken:
//     'pk.eyJ1IjoicGFob3NsZXIiLCJhIjoiY2p5bWF0dnl2MGhiYzNjbXlnMjJzcWEwaCJ9.gWAMa4wXcII86dxSrLIJQQ',
// })

const locations = [
  {
    id: 1,
    lat: 29.982540,
    lng: -90.107371,
    show: true,
    name: 'Chipolte1',
  },
  {
    id: 2,
    lat: 29.958084,
    lng: -90.120805,
    show: true,
    name: 'Home',
  },
  {
    id: 3,
    lat: 29.982660,
    lng: -90.163828,
    show: true,
    name: 'Chipolte2',
  },
]

export default class StoreLocatorPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: locations,
      mapLoaded: false,
    }
    this.getLocations = this.getLocations.bind(this)
  }

  getLocations (locations) {
    this.setState({ locations })
  }

  render () {
    const {
      title,
      subtitle,
      heading,
      navbar,
      footer,
      meta_title,
      meta_description,
    } = this.props

    const mapProps = {
      mapOptions: {
        gestureHandling: `cooperative`,
      },
      onChange: this.getLocations,
      locations: this.state.locations,
      height: 500,
      zoom: 12,
      center: this.state.locations[1],
      mapLoaded: () => {
        this.setState({ mapLoaded: true })
      },
      googleApiKey: `AIzaSyAfqygygpiDV0EvzSkRtBr45F4sNIpQzKc`,
    }

    return (
      <Fragment>
        <NavBar logo={navbar.logo} />

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
                {/* <p className='title'>Main column</p>
                <p className='subtitle'>With some content</p> */}
                <div className='content'>
                  <Map {...mapProps}>
                    {(location, closeLocation) => (
                      <Info
                        show={location.show}
                        style={{
                          height: '50px',
                          backgroundColor: '#696969',
                          width: '120px',
                        }}
                      >
                        <div
                          style={{
                            textAlign: 'left',
                            color: 'white',
                            height: '22px', // Info height - padding - border to show border
                            border: '1px solid white',
                            padding: '3px',
                            fontSize: '12px',
                          }}
                        >
                          {location.name}
                          <div
                            style={{
                              position: 'absolute',
                              top: 3,
                              right: 5,
                              cursor: 'pointer',
                              fontWeight: 800,
                            }}
                            onClick={() => closeLocation(location.id)}
                          >
                          [x]
                          </div>
                        </div>
                      </Info>
                    )}
                  </Map>
                  {this.state.locations.map(location => (
                    <div
                      key={location.id}
                      style={{
                        border: '1px solid #444',
                        width: '25%',
                        display: 'inline-block',
                        marginTop: '5px',
                        marginRight: '5px',
                        padding: '10px',
                        color: '#444',
                        backgroundColor: '#F1F1F1',
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            margin: '8px',
                          }}
                        >
                          {location.name}
                        </h3>
                      </div>
                      <div>{location.distanceFromCenter} miles</div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
          <Footer
            logo={footer.logo}
            email={footer.email}
            newsletter={footer.newsletter}
          />
        </section>
      </Fragment>
    )
  }
}

StoreLocatorPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  navbar: PropTypes.shape({
    logo: PropTypes.string,
  }),
  footer: PropTypes.shape({
    logo: PropTypes.string,
    email: PropTypes.string,
    newsletter: PropTypes.string,
  }),
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

// export default StoreLocatorPage
