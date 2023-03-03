import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
}

const MainWrapper = ({ children, className }: WrapProps) => (
  <div className={`max-w-[1440px] mx-auto  ${className}`}>{children}</div>
)

export default MainWrapper
