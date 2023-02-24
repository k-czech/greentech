import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import DescriptionParagraph from '../DescriptionParagraph/DescriptionParagraph'
import Title from '../Title/Title'
import Wrapper from '../Wrapper/Wrapper'

interface richSectionProps {
  titleText: string
  descText: string
  descText2: string
  imageOnRigth?: boolean
}

const RichSection = ({
  titleText,
  descText,
  descText2,
  imageOnRigth,
}: richSectionProps) => {
  return (
    <section className="my-10 lg:my-24">
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
          className={`md:w-1/2 mb-5 md:mb-0 md:mr-14 ${
            imageOnRigth ? 'md:order-last' : 'md:order-first'
          }  relative welcome-image after:w-16 after:h-16 after:-bottom-5 after:-right-5 lg:after:w-24 lg:after:h-24 lg:after:-bottom-8 lg:after:-right-8`}
        >
          <StaticImage src="../../assets/images/offer/panele.png" alt="" />
        </div>
      </Wrapper>
    </section>
  )
}

export default RichSection
