import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
}

const Wrapper = ({ children, className }: WrapProps) => (
  <div className={`container-1160 ${className}`}>{children}</div>
)

export default Wrapper
