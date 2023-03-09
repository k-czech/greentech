import { Link } from 'gatsby'
import React from 'react'
import slugify from 'slugify'

const Filters = ({ data, url }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {data.map((item: string, index: number) => {
        const slug = item === 'Wszystkie' ? `${url}` : `${url}/${slugify(item)}`
        return (
          <Link
            key={index}
            to={`/${slug}`}
            className="block py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors"
          >
            {item}
          </Link>
        )
      })}
    </div>
  )
}

export default Filters
