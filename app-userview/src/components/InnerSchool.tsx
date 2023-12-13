import React, { type ReactNode } from 'react'

type pData = {
    name: string,
    faculty: string,
    children: ReactNode
}
  const InnerSchool = (props: pData ) => {
  return (
    <div>InnerSchool</div>
  )
}

export default InnerSchool
