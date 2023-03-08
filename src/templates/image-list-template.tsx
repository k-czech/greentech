import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

/// styles
import 'src/assets/styles/realizations/realizations.scss'
import Image from 'src/components/Image/Image'
import Pagination from 'src/components/Pagination/Pagination'

interface nodeProps {
  node: {
    description: string
    gatsbyImageData: IGatsbyImageData
    title: string
  }
}

const imageListPage = ({ data, pageContext }: any) => {
  const { allContentfulAsset } = data

  const arr = allContentfulAsset.edges
  console.log(arr)
  console.log(pageContext)

  return (
    <div>
      {arr.map((item: any, index: number) => (
        <div key={index}>
          <Image image={item.node.gatsbyImageData} alt="image" />
        </div>
      ))}
      <Pagination pageContext={pageContext} />
    </div>
  )
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
