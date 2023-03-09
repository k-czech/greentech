import React from 'react'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Image from '../Image/Image'
import WelcomeSection from '../welcomSection/welcomeSection'
import ImageTextSection from '../RichSection/ImageTextSection'
import ImageGrid from '../ImageGrid/ImageGrid'
import Counter from '../Counter/Counter'
import ColumnSection from '../columnSection/colulmSection'
import Features from '../Features/Features'
import ContentfulBlogList from '../ContentfulBlogList/ContentfulBlogList'
import ContentfulOfferList from '../ContentfulOfferList/ContentfulOfferList'
import { StaticImage } from 'gatsby-plugin-image'
import ModalWithVideo from '../ModalWithVideo/ModalWithVideo'
import ContentfulRealizationsList from '../ContenfulRealizationsList/ContentfulRealizationsList'

interface propTypes {
  richText: any
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text: any) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text: any) => <u className="underline">{text}</u>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className="text-brand-default underline"
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      return <h2>{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node: any, children: any) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node: any, children: any) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node: any, children: any) => <h6>{children}</h6>,
    [BLOCKS.OL_LIST]: (node: any, children: any) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ul>{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="flex mb-2">
        <span className="shrink-0 mr-4">
          <StaticImage src="../../assets/icons/arrow-r.png" alt="ico" />
        </span>
        {children}
      </li>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      if (node.content[0].value === '') {
        return <br />
      } else {
        return <p>{children}</p>
      }
    },
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.QUOTE]: (children: any) => (
      <blockquote>
        <>{`"${children.content[0].content[0].value}"`}</>
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      console.log(node.data)
      return (
        <Image
          image={node.data.target.gatsbyImageData}
          alt={node.data.target.alt}
          classNameImg="w-full"
        />
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
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
