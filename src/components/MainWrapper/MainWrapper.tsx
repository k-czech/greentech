import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
}

const MainWrapper = ({ children, className }: WrapProps) => (
  <div className={`max-w-[1440px] mx-auto px-6 md:px-12 xl:px-0 ${className}`}>
    {children}
  </div>
)

export default MainWrapper
