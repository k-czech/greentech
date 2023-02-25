import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Title from 'src/components/Title/Title'

const Realisations = () => {
  return (
    <>
      <div className="max-w-[760px] mx-auto text-center mt-32 lg:mt-0 px-10 lg:px-0">
        <Title text="Realizacje" />
        <DescriptionParagraph
          className="base-color"
          text="W tej kategorii naszej strony internetowej zapraszamy Cię do zapoznania się z dotąd wykonanymi instalacjami fotowoltaicznymi. Realizacje obejmowały zarówno prywatne domy mieszkalne, jak również budynki firmowe."
        />
        <div className="cat-list">
          <button className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors">
            Wszystkie
          </button>
          <button className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors">
            instalacje fotowoltaiczne
          </button>
          <button className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors">
            pompy ciepła
          </button>
        </div>
      </div>
      <section>
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="mt-5 max-w-[544px]  mx-auto lg:w-2/5">
            <StaticImage src="https://via.placeholder.com/544x288" alt="" />
          </div>
          <div className="mt-5 max-w-[544px] mx-auto lg:w-1/5">
            <StaticImage src="https://via.placeholder.com/272x288" alt="" />
          </div>
          <div className="mt-5 max-w-[544px] mx-auto lg:w-2/5">
            <StaticImage src="https://via.placeholder.com/544x288" alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="mt-5 max-w-[544px]  mx-auto lg:w-1/5">
            <StaticImage src="https://via.placeholder.com/272x288" alt="" />
          </div>
          <div className="mt-5 max-w-[544px] mx-auto lg:w-2/5">
            <StaticImage src="https://via.placeholder.com/544x288" alt="" />
          </div>
          <div className="mt-5 max-w-[544px] mx-auto lg:w-2/5">
            <StaticImage src="https://via.placeholder.com/544x288" alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="mt-5 max-w-[544px]  mx-auto lg:w-2/5">
            <StaticImage src="https://via.placeholder.com/544x288" alt="" />
          </div>
          <div className="mt-5 max-w-[544px] mx-auto lg:w-1/5">
            <StaticImage src="https://via.placeholder.com/272x288" alt="" />
          </div>
          <div className="mt-5 max-w-[544px] mx-auto lg:w-2/5">
            <StaticImage src="https://via.placeholder.com/544x288" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Realisations
