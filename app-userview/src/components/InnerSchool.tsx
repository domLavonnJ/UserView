import React, { Children, type ReactNode } from 'react'

type pData = {
  name: string,
  faculty: string,
  severity?: string | boolean
  children: ReactNode
}

type adminData = {
  name: string,
  children: ReactNode
}

type bothData = pData | adminData

const InnerSchool = (props: bothData) => {

  return (
    <div>InnerSchool

    </div>
  )
}

export default InnerSchool
