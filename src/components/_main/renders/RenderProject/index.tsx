import React, { useContext, useState } from 'react'
import { routsNameMain } from '../../../../data/routsName'
import { routsNameString } from '../../../../data/routsNameString'
import { projectType } from '../../../../models/types/projectTypes'

import { CardContainer } from './styles'
import { BsArrowRight } from 'react-icons/bs'

function RenderProject({ project }: projectType) {
  const listTags = project.tags.map((tag, index) => {
    const lastPosition = project.tags[project.tags.length - 1]
    if (tag == lastPosition) {
      return tag + ' '
    } else {
      return tag + ' ' + '/ '
    }
  })
  return (
    <CardContainer>
      <a
        href={`${routsNameString.otherPages.projects.details as string}${
          project._id
        }/${project.nome}`}
      >
        <img src={project.imgUrl} alt="" />

        <div className="containerInfoMask">
          <h2> {project.category} </h2>
          <h3>{project.description}</h3>

          <span className="containerArrow">
            <BsArrowRight />
          </span>
        </div>

        <div className="containerInfo">
          <h3>{listTags}</h3>
          <h2> {project.category} </h2>

          <span className="containerArrow">
            <BsArrowRight />
          </span>
        </div>

        <div className="mask"></div>
        <div className="subMask"></div>
        <div className="shadow"></div>
      </a>
    </CardContainer>
  )
}

export default RenderProject
