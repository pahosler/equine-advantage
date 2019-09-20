import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Carousel = (props) => (
  <div className='section hero is-medium'>
    <div className='columns is-centered'>
      <CarouselProvider
        naturalSlideWidth={150}
        naturalSlideHeight={250}
        totalSlides={props.carousel.edges.length}
        visibleSlides={3}
      >
        <div className='section is-paddingless is-marginless' style={{ height: 200, width: 460 }}>
          <div className='container'>
            <Slider style={{ position: 'relative', top: -20, height: 300 }}>
              {props.carousel.edges.map((items, index) => {
                return (
                  <Slide key={index} index={index}>
                    <Link to={`about/${items.node.frontmatter.slug}`}>
                      <Image src={items.node.frontmatter.product_image} alt={items.node.frontmatter.heading} />
                      <p className='is-Gilroy-bold is-size-7 has-text-ea-black has-text-centered' style={{ position: 'relative', bottom: 0 }}> {items.node.frontmatter.heading}</p>
                    </Link>
                  </Slide>
                )
              })}
            </Slider>
            <ButtonBack className='is-hidden-mobile' style={{ position: 'relative', bottom: 30 }}>Back</ButtonBack>
            <ButtonNext className='is-hidden-mobile' style={{ position: 'relative', bottom: 30 }}>Next</ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  </div>
)

const AboutPage = ({ data }) => {
  const { markdownRemark: allPages } = data
  const { allMarkdownRemark: carousel } = data
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
      <Carousel carousel={carousel} />
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
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.arrayOf({
      node: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String) {
    allMarkdownRemark(filter: {frontmatter: {product_image: {ne: null}}}) {
      edges {
        node {
          frontmatter {
            product_image
            heading
            slug
          }
        }
      }
    },
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
