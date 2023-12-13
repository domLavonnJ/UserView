import React from 'react'
import InnerSchool from './InnerSchool'
import { FC } from 'react'
import Input from './Input'

export default function School() {
 
  return (
    <>
      <div>School</div>
      <InnerSchool  name="sfdsa"  faculty="sdfasd" severity="sdafd">
      <Input  id="age" label="one"/>
        </InnerSchool>
    </>
  )
}
