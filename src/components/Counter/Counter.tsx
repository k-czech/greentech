import React from 'react'
import { Button } from '../Button/Button'
import Wrapper from '../Wrapper/Wrapper'
import { graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { StaticImage } from 'gatsby-plugin-image'

interface Props {
  title: string
  link?: string
  linkText?: string
  datas: {
    datas: string
  }
}

const Counter = ({ title, datas, link, linkText }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const arr = datas.datas.split('-').map((item) => {
    const subarr = item.split(';')
    let symbol = null
    let numToCount = subarr[0]
    if (!+subarr[0][0]) {
      symbol = subarr[0][0]
      numToCount = subarr[0].slice(1)
    }
    return {
      symbol: symbol,
      num: numToCount,
      text: subarr[1],
    }
  })

  return (
    <section
      className={`bg-yellow-color pt-24 pb-16 px-6 md:px-12 xl:px-0 -mx-6 md:-mx-12 xl:mx-auto`}
      id="counter"
    >
      <Wrapper className="mx-auto lg:space-y-16">
        <h3 className={`text-white`}>{title}</h3>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-5 md:space-y-0">
          {arr.map((item, index) => {
            return (
              <div key={index} ref={ref}>
                {!+item.num ? (
                  <span className="text-white text-6xl font-extrabold pb-2 block">
                    {index === arr.length - 1 ? (
                      <StaticImage
                        src="../../assets/icons/circle4.png"
                        alt=""
                      />
                    ) : (
                      item.num
                    )}
                  </span>
                ) : (
                  <div className="flex gap-2 pb-2 block">
                    {item.symbol ? (
                      <span className="text-white text-6xl font-extrabold">
                        {item.symbol}
                      </span>
                    ) : null}
                    <CountUp
                      start={0}
                      end={inView ? +item.num : 0}
                      duration={3}
                    >
                      {({ countUpRef }) => (
                        <span
                          className="text-white text-6xl font-extrabold pb-2 block"
                          ref={countUpRef}
                        />
                      )}
                    </CountUp>
                  </div>
                )}
                <p className={`text-white text-base font-light max-w-[200px]`}>
                  {item.text}
                </p>
              </div>
            )
          })}
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
  }
`

export default Counter
