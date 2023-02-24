import { Link } from 'gatsby'

import React from 'react'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Title from 'src/components/Title/Title'
import Wrapper from 'src/components/Wrapper/Wrapper'

const ourOffer = () => {
  return (
    <Wrapper className="mx-auto">
      <div className="text-center mb-16">
        <Title text="Nasza oferta" />
        <DescriptionParagraph
          className="base-color"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
        />
      </div>
      <div>
        <div>
          <div>
            <Link to="/">Pionowe instalace PV</Link>
            <p>Short text describing a feature of your product/service. </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ourOffer
