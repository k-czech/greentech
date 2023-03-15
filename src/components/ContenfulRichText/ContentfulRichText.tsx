import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { StaticImage } from 'gatsby-plugin-image'

// components
import Image from '../Image/Image'
import WelcomeSection from '../welcomSection/welcomeSection'
import ImageTextSection from '../RichSection/ImageTextSection'
import ImageGrid from '../ImageGrid/ImageGrid'
import Counter from '../Counter/Counter'
import ColumnSection from '../columnSection/colulmSection'
import Features from '../Features/Features'
import ContentfulOfferList from '../ContentfulOfferList/ContentfulOfferList'
import ModalWithVideo from '../ModalWithVideo/ModalWithVideo'
import {
  ContentfulReferencesRichTextProps,
  RichTextImage,
  RichTextBlockQuote,
} from 'src/interfaces/ContentfulReferenceProps'

interface propTypes {
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text: any) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text: any) => <u className="underline">{text}</u>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (
      node: { data: { url: string } },
      children: React.ReactNode,
    ) => (
      <a
        href={node.data.url}
        target="_blank"
        rel="noreferrer"
        className="text-brand-default underline"
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: JSX.Element) => (
      <h1>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: JSX.Element) => {
      return <h2>{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node: any, children: JSX.Element) => (
      <h3>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: JSX.Element) => (
      <h4>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: JSX.Element) => (
      <h5>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: JSX.Element) => (
      <h6>{children}</h6>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: JSX.Element) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node: any, children: JSX.Element) => <ul>{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node: any, children: JSX.Element) => (
      <li className="flex mb-2">
        <span className="shrink-0 mr-4">
          <StaticImage src="../../assets/icons/arrow-r.png" alt="ico" />
        </span>
        {children}
      </li>
    ),
    [BLOCKS.PARAGRAPH]: (node: RichTextBlockQuote, children: string) => {
      if (node.content[0].value === '') {
        return <br />
      } else {
        return <p>{children}</p>
      }
    },
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.QUOTE]: (children: RichTextBlockQuote) => (
      <blockquote>
        <>{`"${children.content[0].content[0].value}"`}</>
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: RichTextImage) => {
      return (
        <Image
          image={node.data.target.gatsbyImageData}
          alt={node.data.target.title}
          classNameImg="w-full"
        />
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: ContentfulReferencesRichTextProps) => {
      switch (node.data.target.__typename) {
        case 'ContentfulWelcomeSection':
          return <WelcomeSection {...node.data.target} />
        case 'ContentfulRichSection':
          return <ImageTextSection {...node.data.target} />
        case 'ContentfulCounter':
          return <Counter {...node.data.target} />
        case 'ContentfulColumnSection':
          return <ColumnSection {...node.data.target} />
        case 'ContentfulOurStrengths':
          return <Features {...node.data.target} />
        case 'ContentfulImageGrid':
          return <ImageGrid {...node.data.target} />
        case 'ContentfulListaZOfertami':
          return <ContentfulOfferList {...node.data.target} />
        case 'ContentfulVideo':
          return <ModalWithVideo {...node.data.target} />
        default:
          return <div></div>
      }
    },
  },
}

const ContentfulRichTech = ({ richText }: propTypes) => {
  if (!richText) return <div></div>
  return <div>{renderRichText(richText, options)}</div>
}

export default ContentfulRichTech
