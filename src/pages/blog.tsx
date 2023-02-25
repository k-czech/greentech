import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import React from 'react'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import { ListWrapper } from 'src/components/OffersListWrapper/OffersListWrapper'
import Title from 'src/components/Title/Title'
import Wrapper from 'src/components/Wrapper/Wrapper'

import '../assets/styles/categoryList/category-list.scss'

const Blog = () => {
  return (
    <Wrapper className="mx-auto px-10 lg:px-0 mt-32 lg:mt-0">
      <div className="max-w-[760px] mx-auto text-center mb-16">
        <Title text="Blog" />
        <DescriptionParagraph
          className="base-color"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
        />
        <div className="cat-list">
          <div className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors">
            Wszystkie
          </div>
          <div className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors">
            kategoria1
          </div>
          <div className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors">
            kategoria2
          </div>
          <div className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors">
            kategoria3
          </div>
          <div className="py-1.5 px-3 bg-blue-color text-white cursor-pointer  uppercase hover:bg-base-color transition-colors">
            kategoria4
          </div>
        </div>
      </div>

      <ListWrapper classname="justify-center">
        <div>
          <StaticImage src="../assets/images/blog/image.png" alt="iamge" />
          <div className="mt-6">
            <Link to="/blogPost" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p>Short text describing a feature of your product/service. </p>
              <span className="text-secondary-color/40 text-sm">
                Sierpień, 2022
              </span>
            </Link>
          </div>
        </div>

        <div>
          <StaticImage src="../assets/images/blog/image.png" alt="iamge" />
          <div className="mt-6">
            <Link to="/blogPost" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p>Short text describing a feature of your product/service. </p>
              <span className="text-secondary-color/40 text-sm">
                Sierpień, 2022
              </span>
            </Link>
          </div>
        </div>

        <div>
          <Link to="/blogPost">
            <StaticImage src="../assets/images/blog/image.png" alt="iamge" />
          </Link>
          <div className="mt-6">
            <Link to="/blogPost" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p>Short text describing a feature of your product/service. </p>
              <span className="text-secondary-color/40 text-sm">
                Sierpień, 2022
              </span>
            </Link>
          </div>
        </div>

        <div>
          <StaticImage src="../assets/images/blog/image.png" alt="iamge" />
          <div className="mt-6">
            <Link to="/blogPost" className="flex flex-col">
              <p className="base-color underline mb-2 text-xl font-semibold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p>Short text describing a feature of your product/service. </p>
              <span className="text-secondary-color/40 text-sm">
                Sierpień, 2022
              </span>
            </Link>
          </div>
        </div>
      </ListWrapper>
    </Wrapper>
  )
}

export default Blog
