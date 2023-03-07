import React from 'react'
import { graphql } from 'gatsby'

import { IGatsbyImageData } from 'gatsby-plugin-image'

/// styles
import 'src/assets/styles/realizations/realizations.scss'

interface nodeProps {
  node: {
    description: string
    gatsbyImageData: IGatsbyImageData
    title: string
  }
}

const imageListPage = ({ data, pageContext }: any) => {
  console.log(data)
  console.log(pageContext)

  return <div></div>
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulAsset(
      filter: {
        metadata: { tags: { elemMatch: { name: { regex: "/realizacje/" } } } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          description
          gatsbyImageData
          metadata {
            tags {
              name
            }
          }
        }
      }
    }
  }
`

export default imageListPage
