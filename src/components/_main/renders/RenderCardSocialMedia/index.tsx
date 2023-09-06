import React, { useContext, useState } from 'react'

import { TfiBarChart } from 'react-icons/tfi'

import { IChildren } from '../../../../interfaces/children'
import { NavLink } from '../../../NavLink'

import { CardContainer } from './styles'

interface RenderCardSocialMediaInterface {
  imgUrl: string
  title: string
  link: string
  description?: string
}

const RenderCardSocialMedia: React.FC<RenderCardSocialMediaInterface> = ({
  imgUrl,
  title,
  link,
  description
}): JSX.Element => {
  return (
    <CardContainer data-aos="flip-up">
      <a href={link} target="_blank">
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
      </a>
    </CardContainer>
  )
}

export default RenderCardSocialMedia
