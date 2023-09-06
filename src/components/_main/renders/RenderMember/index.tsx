import React, { useContext, useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
import { routsNameMain } from '../../../../data/routsName'
import { routsNameString } from '../../../../data/routsNameString'
import {
  memberTimeType,
  socialLinksType
} from '../../../../models/types/memberTime'
import { NavLink } from '../../../NavLink'
import { TimeContainer } from './styles'

function RenderMember({ memberTime }: memberTimeType) {
  const socialLinksData: socialLinksType[] = [
    {
      type: 'facebook',
      link: 'www.tchossy.com'
    },
    {
      type: 'instagram',
      link: 'www.tchossy.com'
    },
    {
      type: 'twitter',
      link: 'www.tchossy.com'
    }
  ]
  function typeLink(item: socialLinksType, index: number) {
    switch (item.type) {
      case 'facebook':
        return (
          <a className="socialLinkType" key={index} href={item.link}>
            <span>
              <BsFacebook />
            </span>
          </a>
        )

      case 'instagram':
        return (
          <a key={index} href={item.link}>
            <span>
              <BsInstagram />
            </span>
          </a>
        )

      case 'twitter':
        return (
          <a key={index} href={item.link}>
            <span>
              <BsTwitter />
            </span>
          </a>
        )

      default:
        break
    }
  }
  const renderSocialMedia = socialLinksData.map((item, index) =>
    typeLink(item as any, index)
  )

  return (
    <TimeContainer>
      <a
        href={`${routsNameString.otherPages.team.details as string}${
          memberTime._id
        }/${memberTime.name}`}
      >
        <div className="containerContent">
          <div className="containerImgMember">
            <img src={memberTime.imgUrl} alt="" />

            <div className="containerSocialMedia">{renderSocialMedia}</div>
            <div className="shadow"></div>
          </div>

          <div className="containerInfo">
            <div className="content">
              <h2> {memberTime.name} </h2>
              <p> {memberTime.role} </p>
            </div>

            <div className="containerShare">
              <FaShareAlt />
            </div>
          </div>
        </div>
      </a>
    </TimeContainer>
  )
}

export default RenderMember
