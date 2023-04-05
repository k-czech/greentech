import React from 'react'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'

interface Props {
  data: {
    __typename: string
    contentful_id: string
    title: string
    content: RenderRichTextData<ContentfulRichTextGatsbyReference>
  }
  width: string
}

const Column = ({ data, width }: Props) => {
  const { content } = data

  console.log(content)

  return (
    <div className={`w-full lg:${width}`}>
      <ContentfulRichTech richText={content} />
    </div>
  )
}

export default Column
