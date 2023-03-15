import React from 'react'
import { graphql, Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

/// components
import Wrapper from '../Wrapper/Wrapper'
import Image from '../Image/Image'

///style
import 'src/assets/styles/image-anim/image-anim.scss'

interface dataProps {
  data: [
    {
      pageTitle: string
      url: string
      thubmnail: {
        gatsbyImageData: IGatsbyImageData
        title: string
      }
    },
  ]
}

const ReadMore = ({ data }: dataProps) => {
  return (
    <>
      {data ? (
        <Wrapper>
          <section>
            <h3>Przeczytaj również</h3>
            <div className="flex flex-wrap gap-x-10 justify-center md:justify-start">
              {data.map((post, index) => (
                <div key={index} className="max-w-[360px]">
                  <div>
                    <Link to={`/${post.url}`}>
                      <Image
                        image={post.thubmnail.gatsbyImageData}
                        alt={post.thubmnail.title}
                        classNameImg="scale-up"
                      />
                    </Link>
                  </div>
                  <div className="mt-7 hover:underline">
                    <Link to={`/${post.url}`}>
                      <h6>{post.pageTitle}</h6>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Wrapper>
      ) : null}
    </>
  )
}

export const query = graphql`
  fragment optionalBlogPosts on ContentfulBlogPost {
    __typename
    contentful_id
    url
    pageTitle
    thubmnail {
      title
      gatsbyImageData(width: 360, height: 160)
    }
  }
`
export default ReadMore
