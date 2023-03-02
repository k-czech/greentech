import React from 'react'
import Wrapper from '../Wrapper/Wrapper'

import { graphql } from 'gatsby'
import Offers from './Offers'

const ContentfulOfferList = () => {
  return (
    <section className="px-10 lg:px-0 lg:mt-0">
      <Offers />
    </section>
  )
}

export const query = graphql`
  fragment ListaOfertFragment on ContentfulListaZOfertami {
    __typename
    contentful_id
  }
`

export default ContentfulOfferList
