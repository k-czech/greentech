import React from 'react'
import BackgroundSection from '../BackgroundSection/BackgroundSection'
import { Button } from '../Button/Button'
import { useStaticQuery, graphql } from 'gatsby'

const HeroHeading = () => (
  <h1 className="text-white font-bold text-4xl lg:text-5xl lg:mb-10">
    Instalacje fotowoltaiczne
    <br /> tworzone z pasją
  </h1>
)

const HeroParagraph = () => (
  <p className="text-white font-normal text-lg">Zainwestuj w darmowy prąd</p>
)

export const Hero = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "homepage/0_hero.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <BackgroundSection
      image={file}
      alt="sdsd"
      className="max-w-[1350px] mx-auto min-h-[500px] lg:min-h-full"
    >
      <div className="container place-self-end mx-auto mb-16 space-y-4 lg:px-10 xl:mb-14 xl:pl-40">
        <HeroHeading />
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
          <HeroParagraph />
          <Button
            path="/zapytaj"
            text="Zapytaj o ofertę"
            className="max-w-[260px] lg:max-w-none lg:mt-0 lg:ml-20"
          />
        </div>
      </div>
    </BackgroundSection>
  )
}
