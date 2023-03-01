import React from 'react'
import { Button } from '../Button/Button'
import Title from '../Title/Title'
import Wrapper from '../Wrapper/Wrapper'
import { graphql } from 'gatsby'

interface Props {
  title: string
  link?: string
  linkText?: string
  datas: {
    datas: string
  }
}

const Counter = ({ title, datas, link, linkText }: Props) => {
  const arr = datas.datas.split('-').map((item) => {
    const subarr = item.split(';')
    return {
      num: +subarr[0],
      text: subarr[1],
    }
  })

  return (
    <section className={`bg-yellow-color pt-24 pb-16`} id="counter">
      <Wrapper className="mx-auto lg:space-y-16">
        <Title text={title} className={`text-white`} />
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-5 md:space-y-0">
          {arr.map((item, index) => (
            <div key={index}>
              <span className={`text-white text-6xl font-extrabold pb-2 block`}>
                {item.num}
              </span>
              <p className={`text-white text-base font-light max-w-[200px]`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-11 lg:mt-0 lg:w-full flex justify-center">
          {link ? <Button path={link} text={linkText} /> : null}
        </div>
      </Wrapper>
    </section>
  )
}

export const query = graphql`
  fragment CounterFragment on ContentfulCounter {
    __typename
    contentful_id
    title
    datas {
      datas
    }
    backgroundColor
  }
`

export default Counter
