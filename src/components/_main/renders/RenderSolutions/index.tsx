import React, { useContext, useState } from 'react'

import { TfiBarChart } from 'react-icons/tfi'

import { IChildren } from '../../../../interfaces/children'
import { NavLink } from '../../../NavLink'

import { CardContainer } from './styles'

interface RenderBenefitsInterface {
  imgUrl: string
  title: string
  icon: any
}

const RenderBenefits: React.FC<RenderBenefitsInterface> = ({
  imgUrl,
  title,
  icon
}): JSX.Element => {
  return (
    <CardContainer>
      <div className="containerImg">
        <img src={imgUrl} alt="" />
        <div className="shadow"></div>
      </div>
      <div className="containerFloat">
        <span>{icon}</span>
        <div className="containerInfo">
          <h2> {title} </h2>
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderBenefits
