import React from 'react'
import { Button } from '../Button/Button'

interface HeroProps {
  imageSource: string
}

const HeroHeading = () => (
  <h1 className="text-white font-bold text-4xl lg:text-5xl lg:mb-10">
    Instalacje fotowoltaiczne
    <br /> tworzone z pasją
  </h1>
)

const HeroParagraph = () => (
  <p className="text-white font-normal text-lg">Zainwestuj w darmowy prąd</p>
)

export const Hero = ({ imageSource }: HeroProps) => (
  <div
    className="w-full max-w-[1920px] mx-auto min-h-[560px] md:max-h-[560px] xl:max-h-[711px] xl:w-auto flex flex-col justify-center xl:justify-end bg-no-repeat bg-cover px-10"
    style={{ backgroundImage: `url(${imageSource})` }}
  >
    <div className="container mx-auto space-y-4 lg:px-10 xl:mb-14 xl:pl-40">
      <HeroHeading />
      <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
        <HeroParagraph />
        <Button path="/" text="Zapytaj o ofertę" className="lg:mt-0 lg:ml-20" />
      </div>
    </div>
  </div>
)
