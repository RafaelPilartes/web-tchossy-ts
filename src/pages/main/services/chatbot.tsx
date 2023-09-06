import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ServiceChatbotStyles,
  ContainerServiceChatbot
} from '../../../styles/pages/_main/ServiceChatbotStyles'
import { defaultTheme } from '../../../themes/default'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import RenderBenefits from '../../../components/_main/renders/RenderSolutions'
import TypesChatbot from '../../../components/_main/renders/RenderCardTypes'
import { BsFillCheckCircleFill } from 'react-icons/bs'

// Routs

// Components

function SystemService() {
  const docBenefits = [
    {
      imgUrl:
        'https://planejadorweb.com.br/wp-content/uploads/2022/02/Recurso-de-resposta-automatica-do-WhatsApp-atraves-do-WhatsApp-Business.jpg',
      title: 'Automação de envio de mensagens',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://www.conteudoinboundmarketing.com.br/wp-content/uploads/2019/01/segmenta%C3%A7%C3%A3o-de-publico.png',
      title: 'Segmentação inteligente',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://www.fortics.com.br/wordpress/wp-content/uploads/2020/01/chatbot.jpg',
      title: 'Respostas automáticas',
      icon: <AiFillCode size={36} />
    },
    {
      imgUrl:
        'https://miro.medium.com/v2/resize:fit:1024/1*e8v1xC0NTgoduh_ei9F7Pw.png',
      title: 'Personalização avançada',
      icon: <MdDesignServices size={36} />
    }
  ]
  const listBenefits = docBenefits.map((item, index) => (
    <RenderBenefits
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      icon={item.icon}
    />
  ))
  const docTypesChatbot = [
    {
      imgUrl:
        'https://static.wixstatic.com/media/3b5084_ec098661168b42edb8810a517159fbbe~mv2.png/v1/fit/w_1000%2Ch_608%2Cal_c/file.png',
      title: 'Loja de Telefones',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://easyedu.vn/wp-content/uploads/2020/10/Refresh-High-Converting-LP_feature.jpg',
      title: 'Loja de roupas',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://bqhost.com.br/medias/Conclusao-sobre-site-site-estatico-e-site-dinamico.jpg',
      title: 'Loja de medicamentos',
      icon: <MdDesignServices size={36} />
    }
  ]
  const listTypesChatbot = docTypesChatbot.map((item, index) => (
    <TypesChatbot
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      icon={item.icon}
    />
  ))

  function getBudget() {}

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <ServiceChatbotStyles>
      <HeroSectionService
        backgroundImage="https://lamarcabrasil.com/wp-content/uploads/2021/01/businessman-holding-chatbot-with-binary-code-message-data-scaled.jpg"
        title={'Mensagens automatizadas'}
        description="Conquiste mais clientes e aumente suas vendas com fluxos automatizados."
        clickButton={getBudget}
      />

      <ContainerServiceChatbot>
        <section className="section1">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Automatize suas Comunicações com{' '}
              <strong>Mensagem Inteligente</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Descubra a poderosa solução de mensagem automatizada que vai
                revolucionar sua forma de se comunicar com clientes.
              </p>

              <p data-aos="fade-up">
                Otimize sua comunicação com clientes utilizando a poderosa
                ferramenta de mensagem automatizada. Com recursos avançados de
                automação, você pode enviar mensagens personalizadas de forma
                ágil e eficiente, garantindo um atendimento excepcional e
                fortalecendo o relacionamento com seus clientes.
              </p>

              <p data-aos="fade-up">
                Simplifique seus processos, alcance um público mais amplo e
                impulsione suas vendas com a mensagem automatizada. Experimente
                hoje mesmo e descubra como tornar suas comunicações mais
                inteligentes e eficazes!
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://uploads-ssl.webflow.com/5e2f2362e479664d4e15718a/63e2ca345c16f46b4fe4d95d_aivo-whatsapp-chatbot-ai-pt.png"
            alt=""
          />
        </section>

        <div className="section3">
          <div className="descriptionSection">
            <div className="contentDescriptions">
              <h1 data-aos="fade-up">
                <strong>Benefícios</strong> das mensagens automatizadas
              </h1>

              <p>
                Descubra os inúmeros benefícios da mensagem automatizada e
                transforme a forma como você se comunica com seus clientes.
              </p>

              <ul>
                <li>
                  <BsFillCheckCircleFill />
                  <p>
                    <strong>Economize tempo valioso:</strong>
                    <br />
                    Com a mensagem automatizada, você pode enviar mensagens
                    personalizadas de forma automática, poupando tempo e esforço
                    manual;
                  </p>
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  <p>
                    <strong>Aumente o engajamento do cliente:</strong>
                    <br />
                    Envie mensagens relevantes e oportunas para seus clientes,
                    aumentando o engajamento e fortalecendo o relacionamento com
                    eles;
                  </p>
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  <p>
                    <strong>Melhore o atendimento ao cliente:</strong>
                    <br /> Com respostas automáticas e rápidas, você pode
                    oferecer um atendimento ao cliente ágil e eficiente,
                    proporcionando uma experiência positiva.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://mtalkz.com/wp-content/uploads/2022/09/Whatsapp_chatbot_integration_hero1.png"
            alt=""
          />
        </div>

        <section className="exploreUs">
          <div className="containerContent">
            <div className="contentExploreUs">
              <div data-aos="fade-right">
                <h1>
                  Deseja levar sua comunicação a outro nível e impulsionar suas
                  vendas?
                </h1>
                <h3>
                  Descubra o poder do Chatbot Inteligente, uma solução inovadora
                  que automatiza e personaliza suas interações com os clientes.
                  Proporcione uma experiência única e eficiente, 24 horas por
                  dia, 7 dias por semana.{' '}
                </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Criar meu Chatbot Inteligente'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['base-white']}
                  colorSecondary={defaultTheme.colors['brand-primary']}
                  textColor={defaultTheme.colors['base-text-bold']}
                />
              </div>
            </div>
          </div>

          <div className="shadow"></div>
        </section>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Recursos</strong> das mensagens automatizadas
            </h1>

            <p>
              Descubra a ampla gama de recursos que a mensagem automatizada
              oferece, revolucionando a forma como você se comunica com seus
              clientes. Nossa solução avançada combina tecnologia de ponta e
              automação inteligente para simplificar suas estratégias de
              comunicação
            </p>

            <div className="containerBenefits">{listBenefits}</div>
          </div>
        </section>
      </ContainerServiceChatbot>
    </ServiceChatbotStyles>
  )
}

export default SystemService
