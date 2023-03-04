import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Wrapper from '../Wrapper/Wrapper'
import Image from '../Image/Image'
import { graphql } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'

interface richSectionProps {
  title: string
  description: {
    description: string
  }
  imageOnTheRight: boolean
  showTitle: boolean
  image: {
    gatsbyImageData: IGatsbyImageData
  }
}

const ImageTextSection = ({
  title,
  description,
  image,
  imageOnTheRight,
  showTitle,
}: richSectionProps) => {
  const DescArr = description.description.split('\n\n')

  return (
    <section>
      <Wrapper className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div
          className={`md:w-2/5 ${
            imageOnTheRight ? 'md:order-first' : 'md:order-last'
          } mb-5 md:mb-0`}
        >
          <Parallax translateY={[-10, 5]} speed={-5}>
            {showTitle ? <h3>{title}</h3> : null}
            {DescArr.map((par, index) => (
              <p key={index} className="mb-8">
                {par}
              </p>
            ))}
          </Parallax>
        </div>
        <div
          className={`mb-5 md:mb-0 ${
            imageOnTheRight ? 'md:order-last' : 'md:order-first'
          }  relative welcome-image after:w-16 after:h-16 after:-bottom-5 after:-right-5 lg:after:w-24 lg:after:h-24 lg:after:-bottom-8 lg:after:-right-8`}
        >
          <Parallax translateY={[10, -5]} speed={5}>
            <Image image={image} alt="" />
          </Parallax>
        </div>
      </Wrapper>
    </section>
  )
}

export const query = graphql`
  fragment ImageTextSectionFragment on ContentfulRichSection {
    __typename
    title
    contentful_id
    description {
      description
    }
    image {
      gatsbyImageData
    }
    imageOnTheRight
    showTitle
  }
`

export default ImageTextSection
