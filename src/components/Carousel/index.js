import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Slider from 'react-slick'

const productData = () => {
  const data = useStaticQuery(
    graphql`
          query CarouselData{
            allMarkdownRemark(filter: {frontmatter: {product_image: {ne: null}}}) {
              nodes {
                frontmatter {
                  product_image
                  heading
                  slug
                }
              }
            }
          }
        `
  )
  return data.allMarkdownRemark.nodes
}

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, height: 20, width: 20, paddingTop: 2, display: 'block', background: 'black', borderRadius: 25 }}
    onClick={onClick}
  />
)

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, height: 20, width: 20, paddingTop: 2, display: 'block', background: 'black', borderRadius: 25 }}
    onClick={onClick}
  />
)

const Carousel = () => {
  const carouselData = productData()
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <div className='container' style={{ padding: 0 }}>
      <div className='columns is-centered'>
        <div className='column is-8 has-text-centered'>
          <Slider {...settings}>
            {carouselData.map(({ frontmatter }, i) => (
              <div id={i} key={frontmatter.slug} >
                <a href={`/about/${frontmatter.slug}`}>
                  <div className='is-inline-block is-horizontal-center'>
                    <figure className='image is-128x128'>
                      <img src={`${frontmatter.product_image}`} />
                    </figure>
                  </div>
                  <p className='subtitle is-size-7-mobile has-text-ea-black is-Gilroy-black' style={{ marginTop: 70 }}>{`${frontmatter.heading}`}</p>
                </a>
              </div>
            )
            )}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Carousel
