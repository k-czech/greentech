import React from 'react'
import DescriptionParagraph from '../DescriptionParagraph/DescriptionParagraph'
import Title from '../Title/Title'
import Wrapper from '../Wrapper/Wrapper'
import { graphql } from 'gatsby'

interface props {
  title: string
  description: {
    description: string
  }
  first: number
  firstDesc: string
  second: number
  secondDesc: string
  third: number
  thirdDesc: string
  fourth: number
  fourthDesc: string
}

const Features = ({
  title,
  description,
  first,
  firstDesc,
  second,
  secondDesc,
  third,
  thirdDesc,
  fourth,
  fourthDesc,
}: props) => {
  return (
    <section className="bg-base-color space-y-10 lg:space-y-16 pt-24 pb-16">
      <Wrapper className="container mx-auto flex flex-col">
        <div className="flex flex-col mb-16 lg:flex-row lg:justify-between lg:mb-36 ">
          <div className="lg:w-2/5">
            <Title text={title} className="text-white lg:mb-0" />
          </div>
          <div className="lg:w-2/5 lg:ml-36">
            <DescriptionParagraph
              text={description.description}
              className="text-white"
            />
          </div>
        </div>

        <div className="stands container mx-auto">
          <ul className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
            <li className="text-white">
              <span className="font-bold">{first}</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                {firstDesc}
              </p>
            </li>
            <li className="text-white">
              <span className="font-bold">{second}</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                {secondDesc}
              </p>
            </li>
            <li className="text-white">
              <span className="font-bold">{third}</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                {thirdDesc}
              </p>
            </li>
            <li className="text-white">
              <span className="font-bold">{fourth}</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                {fourthDesc}
              </p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export const query = graphql`
  fragment FeaturesFragment on ContentfulOurStrengths {
    __typename
    contentful_id
    title
    description {
      description
    }
    first
    firstDesc
    second
    secondDesc
    third
    thirdDesc
    fourth
    fourthDesc
  }
`

export default Features
