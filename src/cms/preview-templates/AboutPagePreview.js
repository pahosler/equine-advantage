import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/AboutPageTemplate'

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  const entryIcon = entry.getIn(['data', 'advantages', 'icon'])
  const icon = entryIcon ? entryIcon.toJS() : []
  const entryLogo = entry.getIn(['data', 'partners', 'logo'])
  const logo = entryLogo ? entryLogo.toJS() : []
  return (
    <AboutPageTemplate
      content={widgetFor('body')}
      product_image={entry.getIn(['data', 'product_image'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      hero_image={{
        image: entry.getIn(['data', 'hero_image', 'image']),
        alt: entry.getIn(['data', 'hero_image', 'alt']),
      }}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      heading_image={entry.getIn(['data', 'heading_image'])}
      partners={{ logo }}
      advantages={{ icon }}
      quote={{
        text: entry.getIn(['data', 'quote', 'text']),
        name: entry.getIn(['data', 'quote', 'name']),
        title: entry.getIn(['data', 'quote', 'title']),
        image: entry.getIn(['data', 'quote', 'image']),
      }}
      slug={entry.getIn(['data', 'slug'])}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default AboutPagePreview
