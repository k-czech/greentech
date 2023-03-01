import React from 'react'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'
import ModalWithVideo from '../ModalWithVideo/ModalWithVideo'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface Props {
  data: {
    __typename: string
    contentful_id: string
    title: string
    video: {
      videoId: string
      image: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    content: {
      raw: RenderRichTextData<ContentfulRichTextGatsbyReference>
    }
  }
}

const Column = ({ data }: Props) => {
  const { title, video, content } = data

  return (
    <div>
      {content ? <ContentfulRichTech richText={content} /> : null}
      {video ? <ModalWithVideo data={video} /> : null}
    </div>
  )
}

export default Column
