import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Wrapper from '../Wrapper/Wrapper'

interface tagsProps {
  name: string
}

const TagsFilter = ({ onClick }: any) => {
  const {
    allContentfulTag: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulTag(filter: { name: { regex: "/realizacje/" } }) {
        nodes {
          name
        }
      }
    }
  `)

  return (
    <Wrapper className="max-w-[1160px] flex flex-wrap justify-center mt-8 mb-16">
      {nodes.map((item: tagsProps, index: number) => (
        <button
          key={index}
          onClick={() => onClick(item.name)}
          className="py-1.5 px-3 mx-2 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors"
        >
          {item.name.split('-')[1]}
        </button>
      ))}
    </Wrapper>
  )
}

export default TagsFilter
