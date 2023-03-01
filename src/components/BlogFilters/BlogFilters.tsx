import React from 'react'

const BlogFilters = (onClick: any, text: string) => {
  return (
    <button
      onClick={() => onClick(text)}
      className="py-1.5 px-3 bg-blue-color text-white cursor-pointer uppercase hover:bg-base-color transition-colors"
    >
      {text}
    </button>
  )
}

export default BlogFilters
