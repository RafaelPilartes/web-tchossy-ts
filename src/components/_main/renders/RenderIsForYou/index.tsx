import React, { useContext, useState } from 'react'

import { TfiBarChart } from 'react-icons/tfi'

import { IChildren } from '../../../../interfaces/children'
import { NavLink } from '../../../NavLink'

import { CardContainer } from './styles'

interface RenderIsForYouInterface {
  title: string
  description: string
  icon: any
}

const RenderIsForYou: React.FC<RenderIsForYouInterface> = ({
  title,
  description,
  icon
}): JSX.Element => {
  return (
    <CardContainer data-aos="flip-left">
      <div>
        <div className="containerContent">
          <div className="containerInfo">
            <span>{icon}</span>
            <h2> {title} </h2>
            <p> {description} </p>
          </div>
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderIsForYou
