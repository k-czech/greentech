import React from 'react'
import BackgroundSection from '../BackgroundSection/BackgroundSection'
import { Button } from '../Button/Button'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface dataProps {
  data: {
    title: string
    button: string
    subtitle: string
    image: {
      title: string
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const HeroHeading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-white font-bold text-4xl lg:text-5xl lg:mb-10">
      {title}
    </h1>
  )
}

const HeroParagraph = ({ text }: { text: string }) => (
  <p className="text-white font-normal text-lg">{text}</p>
)

export const Hero = ({ data }: dataProps) => {
  console.log(data.title)

  return (
    <BackgroundSection
      image={data.image.gatsbyImageData}
      alt={data.image.title}
      className="max-w-[1350px] mx-auto min-h-[500px] lg:min-h-full"
    >
      <div className="container place-self-end mx-auto mb-16 space-y-4 lg:px-10 xl:mb-14 xl:pl-40">
        <HeroHeading title={data.title} />
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
          <HeroParagraph text={data.subtitle} />
          <Button
            path={data.button}
            text="Zapytaj o ofertę"
            className="max-w-[260px] lg:max-w-none lg:mt-0 lg:ml-20"
          />
        </div>
      </div>
    </BackgroundSection>
  )
}
