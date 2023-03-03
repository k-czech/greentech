import React from 'react'
import DescriptionParagraph from '../DescriptionParagraph/DescriptionParagraph'
import Title from '../Title/Title'
import Wrapper from '../Wrapper/Wrapper'
import { graphql } from 'gatsby'

interface Props {
  title: string
  titleOnTheRigth: boolean
  description: {
    description: string
  }
}

const WelcomeSection = ({ title, description, titleOnTheRigth }: Props) => {
  const text = description.description

  return (
    <section className="bg-gray-color py-10 lg:py-24 lg:my-11 lg:mx-auto">
      <Wrapper
        className={`mx-auto flex flex-col md:flex-row md:justify-between ${
          titleOnTheRigth ? 'gap-x-16' : 'gap-0'
        }`}
      >
        <div
          className={`${
            titleOnTheRigth
              ? 'md:order-last  md:w-1/2'
              : 'md:order-first md:mr-14 md:w-2/5 lg:w-2/3'
          }`}
        >
          <h3 className={`${titleOnTheRigth ? 'w-full' : 'lg:w-2/3'} lg:mb-0"`}>
            {title}
          </h3>
        </div>
        <div
          className={` ${
            titleOnTheRigth
              ? 'md:order-first md:w-1/2'
              : 'md:w-1/3 md:order-last'
          }`}
        >
          <DescriptionParagraph text={text} />
        </div>
      </Wrapper>
    </section>
  )
}

export const query = graphql`
  fragment WelcomeSectionFragment on ContentfulWelcomeSection {
    __typename
    contentful_id
    title
    titleOnTheRigth
    description {
      description
    }
  }
`

export default WelcomeSection
