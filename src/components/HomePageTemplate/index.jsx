import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Products from '../Products'
import Quote from '../Quote'
import NavBar from '../NavBar'
import Footer from '../Footer'

const HomePageTemplate = ({
  meta_title,
  meta_description,
  navbar,
  hero_image,
  brand_heading,
  footer,
  heading,
  subheading,
  offerings,
  partners,
  quote,
  advantages,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <NavBar logo={navbar.logo} />
    <section className='hero is-white has-section-padding-none'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns '>
            <div className='column is-4 is-offset-2'>
              <div className='section'>
                <h1 className='title is-size-3 is-Gilroy-black'>{heading}</h1>
                <h5 className='subtitle is-size-6 is-Gilroy-regular' >{subheading}</h5>
              </div>
            </div>
            <div className='column is-6  '>
              <div className='section is-hidden-mobile'>
                <img
                  src={navbar.logo}
                  style={{ height: 186, width: 350, marginTop: -10 }}
                  alt='brand logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section is-paddingless' style={{ padding: 0 }}>
      <figure className='image is-3by1'>
        <img
          src={hero_image.image}
          style={{ marginTop: -50 }}
          alt={hero_image.alt}
        />
      </figure>
    </section>
    <section className='section is-white'>
      <div className='columns is-centered'>
        <div className='column is-half'>
          <div className='is-size-5 has-text-weight-bold has-text-centered has-text-black is-Gilroy-black'>
            {brand_heading}
            <hr style={{ width: '50%', maxWidth: '200px', borderTop: `2px solid black`, margin: 'auto' }} />
          </div>
        </div>
      </div>
      <Products gridItems={offerings.blurbs} logo={partners.logo} />
    </section>
    <Quote text={quote.text} name={quote.name} title={quote.title} image={quote.image} />
    {/* <Advantage advantage={advantages.blurbs} /> */}
    <div className='section'>
      <div className='columns is-centered'>
        <div className='column is-half'>
          <h1 className='is-size-4 has-text-ea-black has-text-centered is-Gilroy-black'>
              WHAT MAKES EA DIFFERENT
          </h1>
          <hr style={{ width: '50%', maxWidth: '200px', borderTop: `2px solid black`, margin: 'auto' }} />
        </div>
      </div>
      <div className='column is-three-fifths is-offset-one-fifth'>
        <div className='columns is-multiline is-centered'>
          {advantages.icon.map(({ image, text }, keys) => (
            <div key={keys} className='column is-one-third'>
              <div className='has-text-centered'>
                <img alt='advantage icon' width={100} src={image} />
              </div>
              <p className='is-size-5 has-text-ea-black has-text-centered is-Gilroy-light' style={{ paddingTop: 20 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer
      logo={footer.logo}
      email={footer.email}
      newsletter={footer.newsletter}
    />
  </div>
)

HomePageTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  brand_heading: PropTypes.string,
  hero_image: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
  }),
  navbar: PropTypes.shape({
    logo: PropTypes.string,
    brand_slug: PropTypes.string,
  }),
  footer: PropTypes.shape({
    logo: PropTypes.string,
    email: PropTypes.string,
    newsletter: PropTypes.string,
  }),
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  partners: PropTypes.shape({
    logo: PropTypes.array,
  }),
  quote: PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }),
  advantages: PropTypes.shape({
    icon: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
}

export default HomePageTemplate
