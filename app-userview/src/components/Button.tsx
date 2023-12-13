import React, { ComponentPropsWithoutRef,ReactNode, FC }  from 'react'
import { isButtonElement } from 'react-router-dom/dist/dom'
type ButtonProps = {
    children: ReactNode
} & ComponentPropsWithoutRef<"button">


const Button: FC<ButtonProps>  = ({children}) => {
  return (
    <button>{ children}   </button>
  )
}

export default Button 