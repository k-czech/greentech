import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
}

const Wrapper = ({ children, className }: WrapProps) => (
  <div className={`max-w-[1280px] mx-auto ${className}`}>{children}</div>
)

export default Wrapper
