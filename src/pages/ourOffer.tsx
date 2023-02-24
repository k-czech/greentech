import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import React from 'react'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Title from 'src/components/Title/Title'
import Wrapper from 'src/components/Wrapper/Wrapper'

import '../assets/styles/offers/offers.scss'

const ourOffer = () => {
  return (
    <Wrapper className="mx-auto mt-32 lg:mt-0">
      <div className="text-center mb-16">
        <Title text="Nasza oferta" />
        <DescriptionParagraph
          className="base-color"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
        />
      </div>

      <div className="grid offers-list gap-10 mb-24">
        <div className="max-w-[260px] place-self-center">
          <StaticImage
            src="../assets/images/offers/instalacje.png"
            layout="fixed"
            alt="iamge"
          />
          <div className="mt-6">
            <Link to="/offer" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Pionowe instalace PV
              </p>
              <p>Short text describing a feature of your product/service. </p>
            </Link>
          </div>
        </div>

        <div className="max-w-[260px] place-self-center">
          <StaticImage
            src="../assets/images/offers/instalacje.png"
            layout="fixed"
            alt="iamge"
          />
          <div className="mt-6">
            <Link to="/offer" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Pionowe instalace PV
              </p>
              <p>Short text describing a feature of your product/service. </p>
            </Link>
          </div>
        </div>

        <div className="max-w-[260px] place-self-center">
          <StaticImage
            src="../assets/images/offers/instalacje.png"
            layout="fixed"
            alt="iamge"
          />
          <div className="mt-6">
            <Link to="/offer" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Pionowe instalace PV
              </p>
              <p>Short text describing a feature of your product/service. </p>
            </Link>
          </div>
        </div>

        <div className="max-w-[260px] place-self-center">
          <StaticImage
            src="../assets/images/offers/instalacje.png"
            layout="fixed"
            alt="iamge"
          />
          <div className="mt-6">
            <Link to="/offer" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Pionowe instalace PV
              </p>
              <p>Short text describing a feature of your product/service. </p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ourOffer
