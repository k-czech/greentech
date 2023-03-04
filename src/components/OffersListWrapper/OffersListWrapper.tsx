import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  classname?: string | undefined
}

export const ListWrapper = ({ children, classname }: WrapProps) => (
  <div
    className={`flex flex-wrap gap-10 gap-y-14 mb-24 justify-center ${classname}`}
  >
    {children}
  </div>
)
