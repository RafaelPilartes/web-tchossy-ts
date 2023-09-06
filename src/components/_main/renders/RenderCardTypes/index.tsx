import React, { useContext, useState } from 'react'

import { TfiBarChart } from 'react-icons/tfi'

import { IChildren } from '../../../../interfaces/children'
import { NavLink } from '../../../NavLink'

import { CardContainer } from './styles'

interface RenderCardTypesInterface {
  imgUrl: string
  title: string
  description?: string
  icon: any
}

const RenderCardTypes: React.FC<RenderCardTypesInterface> = ({
  imgUrl,
  title,
  description,
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
          <div className="containerInfo">
            <h2> {title} </h2>
            {description ? <p> {description} </p> : null}
          </div>
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderCardTypes
