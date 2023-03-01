import React from 'react'
import Wrapper from '../Wrapper/Wrapper'

import { graphql } from 'gatsby'
import Offers from './Offers'

const ContentfulOfferList = () => {
  return (
    <Wrapper className="px-10 lg:px-0 lg:mt-0">
      <Offers />
    </Wrapper>
  )
}

export const query = graphql`
  fragment ListaOfertFragment on ContentfulListaZOfertami {
    __typename
    contentful_id
  }
`

export default ContentfulOfferList
