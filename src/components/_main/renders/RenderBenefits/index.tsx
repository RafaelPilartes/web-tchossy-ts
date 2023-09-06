import React, { useContext, useState } from 'react'

import { TfiBarChart } from 'react-icons/tfi'

import { IChildren } from '../../../../interfaces/children'
import { NavLink } from '../../../NavLink'

import { CardContainer } from './styles'

interface RenderSolutionsInterface {
  imgUrl: string
  title: string
  icon: any
}

const RenderSolutions: React.FC<RenderSolutionsInterface> = ({
  imgUrl,
  title,
  icon
}): JSX.Element => {
  return (
    <CardContainer data-aos="flip-left">
      <div>
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
      </div>
    </CardContainer>
  )
}

export default RenderSolutions
