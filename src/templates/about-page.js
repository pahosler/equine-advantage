import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
// import Carousel from '../components/Carousel'

const AboutPage = ({ data }) => {
  const { markdownRemark: allPages } = data
  return (
    <Layout>
      <NavBar logo={allPages.frontmatter.navbar.logo} slug={allPages.frontmatter.navbar.brand_slug} />
      <AboutPageTemplate
        content={allPages.html}
        contentComponent={HTMLContent}
        navbar={allPages.frontmatter.navbar}
        title={allPages.frontmatter.title}
        heading={allPages.frontmatter.heading}
        subheading={allPages.frontmatter.subheading}
        heading_image={allPages.frontmatter.heading_image}
        font_color={allPages.frontmatter.font_color}
        hero_image={allPages.frontmatter.hero_image}
        product_image={allPages.frontmatter.product_image}
        partners={allPages.frontmatter.partners}
        quote={allPages.frontmatter.quote}
        advantages={allPages.frontmatter.advantages}
        footer={allPages.frontmatter.footer}
        meta_title={allPages.frontmatter.meta_title}
        meta_description={allPages.frontmatter.meta_description}
      />
      {/* <Carousel /> */}
      <Footer
        logo={allPages.frontmatter.footer.logo}
        email={allPages.frontmatter.footer.email}
        newsletter={allPages.frontmatter.footer.newsletter}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        slug
        navbar {
          logo
          brand_slug
        }
        title
        heading
        subheading
        font_color
        heading_image
        footer {
          email
          newsletter
          logo
        }
        hero_image {
          image
          alt
        }
        product_image
        meta_title
        meta_description
        partners {
          logo {
            image
          }
        }
        quote {
          text
          name
          title
          image
        }
        advantages {
          icon {
            image
          }
        }
      }
    }
  }
`
