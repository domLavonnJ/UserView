import React, { ComponentPropsWithoutRef } from 'react'

type InputProps = {
   label: string,
   id: string
} & ComponentPropsWithoutRef<"input">

 const Input = ({label, id, ...props}:InputProps) => {
  return (
    <input id={id}  {...props}  />
  )
}

export default Input