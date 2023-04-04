import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Image from '../Image/Image'
import { graphql } from 'gatsby'
import { Parallax, useParallax } from 'react-scroll-parallax'

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

  const text = useParallax<HTMLDivElement>({
    speed: -10,
    translateY: [0, 10],
  })

  return (
    <section>
      <div className="mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div
          className={`md:w-1/2 ${
            imageOnTheRight ? 'md:order-first md:mr-5' : 'md:order-last'
          } mb-5 md:mb-0 md:ml-5`}
        >
          {showTitle ? <h3>{title}</h3> : null}
          {DescArr.map((par, index) => (
            <p key={index} className="mb-8" ref={text.ref}>
              {par}
            </p>
          ))}
        </div>
        <div
          className={`mb-5 md:mb-0 ${
            imageOnTheRight ? 'md:order-last' : 'md:order-first'
          }  relative welcome-image after:w-16 after:h-16 after:-bottom-5 after:-right-5 lg:after:w-24 lg:after:h-24 lg:after:-bottom-8 lg:after:-right-8`}
        >
          {image ? (
            <Parallax speed={10} translateY={[0, -10]}>
              <Image
                image={image.gatsbyImageData}
                alt="image"
                classNameImg="max-h-[500px]"
              />
            </Parallax>
          ) : null}
        </div>
      </div>
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
      gatsbyImageData(width: 560)
    }
    imageOnTheRight
    showTitle
  }
`

export default ImageTextSection
