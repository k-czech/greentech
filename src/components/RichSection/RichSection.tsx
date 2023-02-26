import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import DescriptionParagraph from '../DescriptionParagraph/DescriptionParagraph'
import Title from '../Title/Title'
import Wrapper from '../Wrapper/Wrapper'
import Image from '../Image/Image'

interface richSectionProps {
  titleText: string
  descText: string
  descText2: string
  imageOnRigth?: boolean
  imgData: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const RichSection = ({
  titleText,
  descText,
  descText2,
  imageOnRigth,
  imgData,
}: richSectionProps) => {
  return (
    <section>
      <Wrapper className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div
          className={`md:w-2/5 ${
            imageOnRigth ? 'md:order-first' : 'md:order-last'
          } mb-5 md:mb-0`}
        >
          <Title text={titleText} />
          <DescriptionParagraph text={descText} />
          <br />
          <DescriptionParagraph text={descText2} />
        </div>
        <div
          className={`md:w-1/2 mb-5 md:mb-0 ${
            imageOnRigth ? 'md:order-last' : 'md:order-first'
          }  relative welcome-image after:w-16 after:h-16 after:-bottom-5 after:-right-5 lg:after:w-24 lg:after:h-24 lg:after:-bottom-8 lg:after:-right-8`}
        >
          <Image imgData={imgData} />
        </div>
      </Wrapper>
    </section>
  )
}

export default RichSection
