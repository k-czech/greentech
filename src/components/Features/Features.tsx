import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { graphql } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'

interface FeatureProps {
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
}: FeatureProps) => {
  const features = [
    [first, firstDesc],
    [second, secondDesc],
    [third, thirdDesc],
    [fourth, fourthDesc],
  ]

  return (
    <section className="bg-[#188658] space-y-10 lg:space-y-16 pt-24 pb-16 px-6 md:px-12 xl:px-0 -mx-6 md:-mx-12 xl:mx-auto">
      <Wrapper className="flex flex-col">
        <Parallax translateY={[0, -10]}>
          <div className="flex flex-col mb-16 lg:flex-row lg:justify-between lg:mb-36 ">
            <div className="lg:w-2/5">
              <h3 className="text-white lg:mb-0">{title}</h3>
            </div>
            <div className="lg:w-2/5 lg:ml-36">
              <p className="text-white text-lg">{description.description}</p>
            </div>
          </div>
        </Parallax>
        <Parallax translateY={[0, 10]} speed={10}>
          <div className="stands container mx-auto">
            <ul className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <li key={index} className="text-white">
                  <span className="font-bold text-lg">{feature[0]}</span>
                  <p className="text-lg text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                    {feature[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Parallax>
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
