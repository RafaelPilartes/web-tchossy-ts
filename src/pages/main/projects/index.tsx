import React, { createContext, useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Layout
import RootLayoutMain from '../../../Layout/RootLayoutMain'

// Styles
import {
  ContainerProjects,
  ContainerListProjects
} from '../../../styles/pages/_main/ProjectsStyles'

// Components
import RenderPost from '../../../components/_main/renders/RenderPost'
import HeroSection from '../../../components/_main/HeroSection'
import RenderProject from '../../../components/_main/renders/RenderProject'
import { projectPropsType } from '../../../models/types/projectTypes'

function Projects() {
  const docProjects: projectPropsType[] = [
    {
      _id: 'bqwjk89e8h8x2',
      nome: 'Projeto de Marketing Inteligente',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quo placeat? Consequuntur mollitia cum similique neque odio provident adipisci veniam! Minima, delectus commodi excepturi natus quidem quas. Quod, laborum.',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project01.jpg',
      link: '#',
      category: 'Marketing Inteligente',
      tags: ['Visão', 'Ideias']
    },
    {
      _id: 'cc87g3uie8c3dc3',
      nome: 'Projeto de Identidade visual',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quo placeat? Consequuntur mollitia cum similique neque odio provident adipisci veniam! Minima, delectus commodi excepturi natus quidem quas. Quod, laborum.',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project04.jpg',
      link: '#',
      category: 'Identidade visual',
      tags: ['Design', 'Identidade']
    },
    {
      _id: '34fc3g5344tgcdsu8d9',
      nome: 'Projeto de Consultoria',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quo placeat? Consequuntur mollitia cum similique neque odio provident adipisci veniam! Minima, delectus commodi excepturi natus quidem quas. Quod, laborum.',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project02.jpg',
      link: '#',
      category: 'Consultoria',
      tags: ['Ideias']
    },
    {
      _id: 'cc87g3uie8c3dc3',
      nome: 'Projeto de Identidade visual',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quo placeat? Consequuntur mollitia cum similique neque odio provident adipisci veniam! Minima, delectus commodi excepturi natus quidem quas. Quod, laborum.',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project04.jpg',
      link: '#',
      category: 'Identidade visual',
      tags: ['Design', 'Identidade']
    },
    {
      _id: '34fc3g5344tgcdsu8d9',
      nome: 'Projeto de Consultoria',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quo placeat? Consequuntur mollitia cum similique neque odio provident adipisci veniam! Minima, delectus commodi excepturi natus quidem quas. Quod, laborum.',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project02.jpg',
      link: '#',
      category: 'Consultoria',
      tags: ['Ideias']
    },
    {
      _id: 'bqwjk89e8h8x2',
      nome: 'Projeto de Marketing Inteligente',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quo placeat? Consequuntur mollitia cum similique neque odio provident adipisci veniam! Minima, delectus commodi excepturi natus quidem quas. Quod, laborum.',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project01.jpg',
      link: '#',
      category: 'Marketing Inteligente',
      tags: ['Visão', 'Ideias']
    }
  ]

  const listarProjects = docProjects.map((item, index) => {
    return <RenderProject project={item} key={index} />
  })

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerProjects>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="Nossos Projeto"
        base1="projeto"
      />

      <div className="container">
        <ContainerListProjects>{listarProjects}</ContainerListProjects>
      </div>
    </ContainerProjects>
  )
}

export default Projects
