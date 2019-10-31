import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import StoreLocatorPage from '../components/StoreLocatorPage'
import Layout from '../components/Layout'

const LocatorPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <StoreLocatorPage
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        navbar={frontmatter.navbar}
        footer={frontmatter.footer}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>

  )
}

LocatorPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LocatorPage

export const locatorPageQuery = graphql`
  query LocatorPage($id: String!) {
    markdownRemark(id: {eq: $id}){
      frontmatter {
        title
        subtitle
        heading
        navbar {
          logo
        }
        footer {
          logo
          email
          newsletter
        }
        meta_title
        meta_description
      }
    }
  }
`
