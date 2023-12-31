import React, { useContext, useState } from 'react'
import { defaultTheme } from '../../../../themes/default'
import ButtonSeeMore from '../../buttons/ButtonSeeMore'
import StarRatingStatic from '../../others/StarRatingStatic'

import { CardContainer } from './styles'

interface RenderPriceType {
  titlePlane: string
  descriptionPlane: string
  icon: any
  price: string
  textPlaneInclude: string
  serviceIncluded: string[]
  onClick: any
}

const RenderPrice: React.FC<RenderPriceType> = ({
  titlePlane,
  descriptionPlane,
  icon,
  price,
  textPlaneInclude,
  serviceIncluded,
  onClick
}): JSX.Element => {
  const renderServiceIncluded = serviceIncluded.map((service, index) => (
    <li key={index}>
      <span>» </span> {service}
    </li>
  ))

  return (
    <CardContainer>
      <div className="containerRenderPrice">
        <div className="containerPrice">
          <div className="containerIcon">{icon}</div>
          {/* <span className="price">{price} Kz </span> /mês */}
        </div>

        <h1> {titlePlane} </h1>

        <p> {descriptionPlane} </p>

        <h3> {textPlaneInclude} </h3>

        <ul>{renderServiceIncluded}</ul>

        <div className="containerBtn">
          <ButtonSeeMore
            value={'Solicitar orçamento'}
            onClick={onClick}
            colorBase={defaultTheme.colors['brand-primary']}
            colorSecondary={defaultTheme.colors['brand-super-dark']}
            arrowIsVisible
          />
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderPrice
