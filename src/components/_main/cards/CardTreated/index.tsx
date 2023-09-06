import React, { useContext, useState } from 'react'

import { CardContainer } from './styles'

interface cardTreatedInterface {
  icon: JSX.Element
  title: string
  description: string
}

const CardTreated: React.FC<cardTreatedInterface> = ({
  icon,
  title,
  description
}): JSX.Element => {
  return (
    <CardContainer>
      <div className="containerIcon">{icon}</div>
      <div className="containerInfo">
        <h2> {title} </h2>
        <p> {description} </p>
      </div>
      <div className="bgInfo"></div>
    </CardContainer>
  )
}

export default CardTreated
