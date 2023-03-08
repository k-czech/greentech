import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Wrapper from '../Wrapper/Wrapper'

interface tagsProps {
  name: string
}

const TagsFilter = ({ onClick }: any) => {
  // const {
  //   allContentfulTag: { nodes },
  // } = useStaticQuery(graphql`
  //   query {
  //     allContentfulTag(filter: { name: { regex: "/realizacje/" } }) {
  //       nodes {
  //         name
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: {
          metadata: { tags: { elemMatch: { name: { regex: "/realizacje/" } } } }
        }
      ) {
        totalCount
        nodes {
          metadata {
            tags {
              name
            }
          }
        }
      }
    }
  `)

  const arr = data.allContentfulAsset.nodes.map((item: any) => {
    return item.metadata.tags
  })

  const names = []
  for (const subarr of arr) {
    for (const item of subarr) {
      names.push(item.name)
    }
  }

  const unique = new Set(names)

  console.log(unique)

  // const tagsName = [
  //   'wszystkie',
  //   ...nodes.map((item: tagsProps) => item.name.split('-')[1]),
  // ]

  return (
    <Wrapper className="max-w-[1160px] flex flex-wrap justify-center mt-8 mb-16">
      {/* {tagsName.map((item: string, index: number) => (
        <button
          key={index}
          onClick={() => onClick(item)}
          className="py-1.5 px-3 mx-2 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors"
        >
          {item}
        </button>
      ))} */}
    </Wrapper>
  )
}

export default TagsFilter
