import React from 'react'
import PropTypes from 'prop-types'
import StoreLocatorPage from '../../components/StoreLocatorPage'

const StoreLocatorPagePreview = ({ entry, getAsset }) => {
  return (
    <StoreLocatorPage
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      heading={entry.getIn(['data', 'heading'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  )
}

StoreLocatorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StoreLocatorPagePreview
