import React from 'react'
import BackgroundSection from '../BackgroundSection/BackgroundSection'
import { Button } from '../Button/Button'
import {
  getImage,
  IGatsbyImageData,
  withArtDirection,
} from 'gatsby-plugin-image'
import MainWrapper from '../MainWrapper/MainWrapper'
import { Parallax } from 'react-scroll-parallax'

interface dataProps {
  data: {
    title: string
    button: string
    subtitle: string
    image: {
      title: string
      gatsbyImageData: IGatsbyImageData
    }
    imageMobile: {
      title: string
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const HeroHeading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-white font-bold text-4xl lg:text-5xl lg:mb-10 md:max-w-[650px]">
      {title}
    </h1>
  )
}

const HeroParagraph = ({ text }: { text: string }) => (
  <p className="text-white font-normal text-lg">{text}</p>
)

export const Hero = ({ data }: dataProps) => {
  const { button, title, subtitle, image, imageMobile } = data

  const images = withArtDirection(getImage(image.gatsbyImageData), [
    {
      media: '(max-width: 600px)',
      image: getImage(imageMobile.gatsbyImageData),
    },
  ])

  return (
    <MainWrapper>
      <BackgroundSection
        image={images}
        alt={data.image.title}
        className="m-full mx-auto min-h-[500px] lg:min-h-full"
      >
        <div className="container place-self-end mx-auto md:mb-16 space-y-4 lg:px-10 xl:mb-14 xl:pl-40">
          <Parallax translateY={[-30, 15]}>
            <HeroHeading title={title} />
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
              <HeroParagraph text={subtitle} />
              <Button
                path={button}
                text="Zapytaj o ofertę"
                className="max-w-[260px] lg:max-w-none lg:mt-0 lg:ml-20"
              />
            </div>
          </Parallax>
        </div>
      </BackgroundSection>
    </MainWrapper>
  )
}
