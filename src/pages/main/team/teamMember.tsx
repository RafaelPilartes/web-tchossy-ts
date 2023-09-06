import React, { createContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Modulos mui/material
import { FaFacebookF } from 'react-icons/fa'
import {
  BsFillCheckCircleFill,
  BsInstagram,
  BsTwitter,
  BsWhatsapp
} from 'react-icons/bs'

// Styles
import {
  ContainerBlog,
  ContainerTeamMember
} from '../../../styles/pages/_main/TeamMemberStyles'

// Components
import HeroSection from '../../../components/_main/HeroSection'
import StarRatingStatic from '../../../components/_main/others/StarRatingStatic'
import ButtonBase from '../../../components/_main/buttons/ButtonBase'
import { defaultTheme } from '../../../themes/default'
import { routsNameMain } from '../../../data/routsName'

function TeamMember() {
  const param = useParams()

  const idPath = param.memberId
  const titlePath = param.memberName

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerBlog>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title={titlePath}
        base1="Time"
        base2={titlePath}
      />

      <div className="container">
        <ContainerTeamMember>
          <div className="member">
            <div className="containerRowImg">
              <div className="containerImg">
                <img
                  src={
                    'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg'
                  }
                  alt={'news'}
                  width="400"
                  height="300"
                />
              </div>

              <div className="containerInfTeamMember">
                <div className="headerName">
                  <strong>Raimundo Gaspar Kilende</strong>
                </div>

                <div className="containerAllSectionMember">
                  <div className="descriptionMember">
                    <h3>Diretor administrativo</h3>

                    <div className="containerSocialMedia">
                      <a href="https://www.facebook.com/rafaeldelima.pilartes/">
                        <FaFacebookF />
                      </a>

                      <a href="https://www.instagram.com">
                        <BsInstagram />
                      </a>

                      <a href="https://www.whatsapp.com">
                        <BsWhatsapp />
                      </a>

                      <a href="https://www.twitter.com">
                        <BsTwitter />
                      </a>
                    </div>

                    <p>
                      É um fato estabelecido há muito tempo que um leitor se
                      distrairá com o conteúdo legível de uma página ao olhar
                      para seu layout. O objetivo de usar Lorem Ipsum O homem,
                      que está em condição estável no hospital, tem “ferimentos
                      potencialmente capazes de mudar sua vida” após o ataque
                      noturno em Garvagh, Condado de Lono Donderry. Ele foi
                      baleado nos braços e nas pernas.” Que tipo de homem
                      acharia aceitável submeter uma jovem a esse nível de
                      brutalidade e violência?
                      <br />
                      <br />
                      “Toda criança tem o direito de se sentir segura e
                      protegida em sua própria casa – como essa pobre criança
                      vai dormir esta noite ou nas próximas noites? Quais serão
                      os efeitos a longo prazo sobre ela?”
                    </p>

                    {/* <ul className="descriptionMemberList">
                      <li>
                        <BsFillCheckCircleFill /> Trazer novas soluções de TI
                        para o mercado
                      </li>
                      <li>
                        <BsFillCheckCircleFill /> Incluir a lista das 100
                        melhores empresas de TI
                      </li>
                      <li>
                        <BsFillCheckCircleFill /> Nossa empresa tem
                        profissionais capacitados de TI.
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerTeamMember>
      </div>

      <div className="contentContact">
        <div className="limiteArea">
          <div className="containerTitleSection">
            <div>
              <h4>Entre em contacto connosco</h4>
              <h1>
                Sinta-se à vontade para escrever para nosso especialista em
                Gestão
              </h1>
            </div>
          </div>
        </div>

        <div className="limiteArea">
          <div className="containerRowInput">
            <input type="text" placeholder="Seu nome" />
            <input type="text" placeholder="Endereço de email" />
          </div>

          <div className="containerRowInput">
            <input type="text" placeholder="Número de telefone" />
            <input type="text" placeholder="Sujeito" />
          </div>

          <textarea name="" rows={5}></textarea>

          <ButtonBase
            value={'Enviar mensagem'}
            onClick={() => null}
            colorBase={defaultTheme.colors['base-gray']}
            colorSecondary={defaultTheme.colors['brand-primary']}
            textColor={defaultTheme.colors['base-text']}
          />
        </div>
      </div>
    </ContainerBlog>
  )
}

export default TeamMember
