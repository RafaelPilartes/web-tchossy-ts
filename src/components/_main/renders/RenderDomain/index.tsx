import React, { useContext, useState } from 'react'
import { separateComma } from '../../../../utils/utils'
import StarRatingStatic from '../../others/StarRatingStatic'

import { CardContainer } from './styles'

interface RenderDomainInterface {
  imgDomain: string
  nameDomain: string
  descriptionDomain: string
  priceDomain: number
}

const RenderDomain = (domainData: RenderDomainInterface) => {
  return (
    <CardContainer>
      <div className="containerRenderDomain">
        <div className="containerImg">
          <img src={domainData.imgDomain} alt="" />
        </div>

        <div className="contentBase">
          <h4>{separateComma(domainData.priceDomain)} kz</h4>
          <p className="containerStars">Anual</p>
        </div>

        <div className="contentDomain">
          <p> {domainData.descriptionDomain} </p>
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderDomain
