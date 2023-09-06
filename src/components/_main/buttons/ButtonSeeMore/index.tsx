import React from 'react'
import { SButton } from './styles'
import { BsArrowRightShort } from 'react-icons/bs'

type ButtonSeeMoreType = {
  value: string
  onClick: () => void
  colorBase: string
  colorSecondary: string
  textColor?: string
  textColorSecond?: string
  arrowIsVisible?: boolean
}

function ButtonSeeMore({
  value,
  onClick,
  colorBase,
  colorSecondary,
  textColor,
  arrowIsVisible,
  textColorSecond
}: ButtonSeeMoreType) {
  return (
    <SButton
      colorBase={colorBase}
      colorSecondary={colorSecondary}
      textColor={textColor}
      textColorSecond={textColorSecond}
      onClick={onClick}
    >
      <span> {value} </span>

      {arrowIsVisible && <BsArrowRightShort />}
    </SButton>
  )
}

export default ButtonSeeMore
