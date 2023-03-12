import React from 'react'
import { graphql } from 'gatsby'

// components
import Offers from './Offers'

const ContentfulOfferList = () => {
  return (
    <section>
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
