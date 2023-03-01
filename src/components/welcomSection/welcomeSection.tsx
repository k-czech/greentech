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

const WelcomeSection = ({ title, titleOnTheRigth, description }: Props) => {
  const text = description.description

  return (
    <section className="bg-gray-color py-10 lg:py-24 lg:my-11 lg:mx-auto">
      <Wrapper className="mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="md:w-2/3 lg:w-2/5 md:mr-14">
          <Title text={title} className="lg:mb-0" />
        </div>
        <div className="md:w-1/3">
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
