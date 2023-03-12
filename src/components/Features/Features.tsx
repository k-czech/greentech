import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { graphql } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'
import { text } from 'stream/consumers'

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
    <section className="bg-[#188658] space-y-10 lg:space-y-16 pt-24 pb-16">
      <Wrapper className="container mx-auto flex flex-col">
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
              <li className="text-white">
                <span className="font-bold text-lg">{first}</span>
                <p className="text-lg text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                  {firstDesc}
                </p>
              </li>
              <li className="text-white ">
                <span className="font-bold text-lg">{second}</span>
                <p className="text-lg text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                  {secondDesc}
                </p>
              </li>
              <li className="text-white">
                <span className="font-bold text-lg">{third}</span>
                <p className="text-lg text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                  {thirdDesc}
                </p>
              </li>
              <li className="text-white">
                <span className="font-boldtext-lg ">{fourth}</span>
                <p className="text-lg text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                  {fourthDesc}
                </p>
              </li>
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
