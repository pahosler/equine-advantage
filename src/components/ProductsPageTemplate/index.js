import React, { Fragment } from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import NavBar from '../NavBar'

const ProductsPageTemplate = ({
  content,
  contentComponent,
  product_image,
  meta_title,
  meta_description,
  tags,
  title,
  heading,
  subheading,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Fragment>
      <NavBar />
      <div>
        <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>{meta_title}</h1>
        <h2 className='subtitle is-size-6 has-text-weight-light is-italic'>{meta_description}</h2>
        <img src={product_image} alt={subheading} />
        <div className='columns is-multiline is-mobile is-centered'>
          <div className='column is-5 is-half-mobile'>
            <figure className='image is-256x256 is-hidden-mobile'>
              <img style={{ paddingRight: 55 }} src={product_image} alt={subheading} />
            </figure>
          </div>
          <div className='column is-4 is-half-mobile'>
            <div className='is-size-7' style={{ height: 700, width: 320, float: 'right' }}>
              <PostContent content={content} />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </Fragment>
  )
}

export default ProductsPageTemplate
