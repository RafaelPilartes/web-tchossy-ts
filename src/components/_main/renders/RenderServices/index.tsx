import React, { useContext, useState } from 'react'

import { TfiBarChart } from 'react-icons/tfi'

import { IChildren } from '../../../../interfaces/children'
import { NavLink } from '../../../NavLink'

import { CardContainer } from './styles'

interface RenderServicesInterface {
  imgUrl: string
  title: string
  description: string
  icon: any
  iconWhite: any
}

const RenderServices: React.FC<RenderServicesInterface> = ({
  imgUrl,
  title,
  description,
  icon,
  iconWhite
}): JSX.Element => {
  return (
    <CardContainer>
      <div className="containerImg">
        <img className="bg-img" src={imgUrl} alt={title + 'Tchossy'} />
        <div className="shadow"></div>
        <div className="details">
          <span className="bgIcon">{iconWhite}</span>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
      </div>

      <div className="containerFloat">
        <div className="containerInfo">
          <span className="normalIcon">{icon}</span>
          <h2> {title} </h2>
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderServices
