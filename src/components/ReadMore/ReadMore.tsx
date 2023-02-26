import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { ListWrapper } from '../OffersListWrapper/OffersListWrapper'
import Title from '../Title/Title'
import Wrapper from '../Wrapper/Wrapper'

const ReadMore = () => (
  <Wrapper className="px-10 lg:px-0">
    <Title text="Przeczytaj również" />
    <ListWrapper classname="justify-center md:justify-start">
      <div className="max-w-[360px]">
        <Link to="/blogPost">
          <StaticImage src="../../assets/images/blog/image.png" alt="" />
        </Link>
        <Link to="/blogPost" className="block mt-7">
          <p className="text-secondary-color text-lg font-bold">
            Optymalizator mocy paneli fotowoltaicznych – czy warto?
          </p>
          <p className="text-secondary-color/40 text-sm my-1.5">
            Sierpień, 2022
          </p>
        </Link>
      </div>
      <div className="max-w-[360px]">
        <Link to="/blogPost">
          <StaticImage src="../../assets/images/blog/image.png" alt="" />
        </Link>
        <Link to="/blogPost" className="block mt-7">
          <p className="text-secondary-color text-lg font-bold">
            Optymalizator mocy paneli fotowoltaicznych – czy warto?
          </p>
          <p className="text-secondary-color/40 text-sm my-1.5">
            Sierpień, 2022
          </p>
        </Link>
      </div>
      <div className="max-w-[360px]">
        <Link to="/blogPost">
          <StaticImage src="../../assets/images/blog/image.png" alt="" />
        </Link>
        <Link to="/blogPost" className="block mt-7">
          <p className="text-secondary-color text-lg font-bold">
            Optymalizator mocy paneli fotowoltaicznych – czy warto?
          </p>
          <p className="text-secondary-color/40 text-sm my-1.5">
            Sierpień, 2022
          </p>
        </Link>
      </div>
    </ListWrapper>
  </Wrapper>
)

export default ReadMore
