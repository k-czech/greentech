import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import DescriptionParagraph from '../DescriptionParagraph/DescriptionParagraph'
import Title from '../Title/Title'
import Wrapper from '../Wrapper/Wrapper'
import Image from '../Image/Image'
import { graphql } from 'gatsby'

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
  const DescArr = description.description

  return (
    <section>
      <Wrapper className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div
          className={`md:w-2/5 ${
            imageOnTheRight ? 'md:order-first' : 'md:order-last'
          } mb-5 md:mb-0`}
        >
          {showTitle ? <Title text={title} /> : null}

          <DescriptionParagraph text={DescArr} className="mb-8" />
        </div>
        <div
          className={`md:w-1/2 mb-5 md:mb-0 ${
            imageOnTheRight ? 'md:order-last' : 'md:order-first'
          }  relative welcome-image after:w-16 after:h-16 after:-bottom-5 after:-right-5 lg:after:w-24 lg:after:h-24 lg:after:-bottom-8 lg:after:-right-8`}
        >
          <Image image={image} alt="" />
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
