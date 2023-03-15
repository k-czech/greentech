import React from 'react'
import { ContentfulReferencesProps } from 'src/interfaces/ContentfulReferenceProps'
import ColumnSection from '../columnSection/colulmSection'
import Counter from '../Counter/Counter'
import Features from '../Features/Features'
import ImageGrid from '../ImageGrid/ImageGrid'
import ImageTextSection from '../RichSection/ImageTextSection'
import WelcomeSection from '../welcomSection/welcomeSection'

interface propTypes {
  references: []
}

const ContentfulReferences = ({ references }: propTypes) => {
  return (
    <>
      {references
        ? references.map(
            (reference: ContentfulReferencesProps, index: number) => {
              switch (reference.__typename) {
                case 'ContentfulWelcomeSection':
                  return <WelcomeSection key={index} {...reference} />
                case 'ContentfulRichSection':
                  return <ImageTextSection key={index} {...reference} />
                case 'ContentfulImageGrid':
                  return <ImageGrid key={index} {...reference} />
                case 'ContentfulCounter':
                  return <Counter key={index} {...reference} />
                case 'ContentfulColumnSection':
                  return <ColumnSection key={index} {...reference} />
                case 'ContentfulOurStrengths':
                  return <Features key={index} {...reference} />
                default:
                  return <div></div>
              }
            },
          )
        : null}
    </>
  )
}

export default ContentfulReferences
