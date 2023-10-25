import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  AffiliatesStyles,
  ContainerAffiliates
} from '../../styles/pages/_main/AffiliatesStyles'
import HeroSectionPage from '../../components/_main/HeroSectionPage'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import RenderIsForYou from '../../components/_main/renders/RenderIsForYou'
import ButtonSeeMore from '../../components/_main/buttons/ButtonSeeMore'
import { defaultTheme } from '../../themes/default'
import TypesWebsite from '../../components/_main/renders/RenderCardTypes'
import { BsFillCheckCircleFill } from 'react-icons/bs'

// Routs

// Components

function Affiliates() {
  const docIsForYou = [
    {
      title: 'Busca Oportunidades de Renda Extra',
      description:
        'Se você está em busca de maneiras de aumentar sua renda e conquistar uma fonte extra de ganhos, ser um Afiliado Tchossy é a escolha certa para você',
      icon: <AiFillStar size={33} />
    },
    {
      title: 'Tem uma Rede de Contatos Sólida',
      description:
        'Se você possui uma extensa rede de contatos e deseja monetizar seu alcance, o Programa de Afiliados Tchossy oferece uma plataforma ideal para transformar conexões em comissões',
      icon: <MdDesignServices size={33} />
    },
    {
      title: 'Adora ajudar empresas',
      description:
        'Se você tem paixão por ajudar empresas a crescer e alcançar seu potencial máximo, junte-se a nós como Afiliado Tchossy',
      icon: <MdDesignServices size={33} />
    }
  ]
  const listIsForYou = docIsForYou.map((item, index) => (
    <RenderIsForYou
      key={index}
      title={item.title}
      description={item.description}
      icon={item.icon}
    />
  ))

  const docTypesWebsite = [
    {
      imgUrl:
        'https://static.wixstatic.com/media/3b5084_ec098661168b42edb8810a517159fbbe~mv2.png/v1/fit/w_1000%2Ch_608%2Cal_c/file.png',
      title: 'Websites Página-Única',
      description:
        'Resumirem todo o conteúdo em apenas uma página subdividida em secções abertas na própria home page.',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://easyedu.vn/wp-content/uploads/2020/10/Refresh-High-Converting-LP_feature.jpg',
      title: 'Landing Page',
      description:
        'Uma única página para apresentar serviços, produtos, geração de leads e vendas.',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://bqhost.com.br/medias/Conclusao-sobre-site-site-estatico-e-site-dinamico.jpg',
      title: 'Site dinâmico',
      description:
        'É o que combina diferentes secções, sejam as institucionais ou em blog de um mesmo site.',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://www.ficaon.com/wp-content/uploads/2018/03/site-institucional.jpg',
      title: 'Websites institucional ',
      description:
        'Ele é fundamental para qualquer empresa. Apresenta as informações de uma empresa, como endereço e contato ',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://cdn.dribbble.com/users/2368093/screenshots/9067927/dribbble_shot_hd_-_1_4x.png',
      title: 'Portal',
      description:
        'Os portais estão entre os tipos de site mais completos do que modelos dinâmicos citados acima.',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://websitelearners.com/content/uploads/2019/03/make-a-blog.png',
      title: 'Blog',
      description:
        'website voltado para a publicação recorrente de conteúdos. ',
      icon: <AiFillCode size={36} />
    }
  ]
  const listTypesWebsite = docTypesWebsite.map((item, index) => (
    <TypesWebsite
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      description={item.description}
      icon={item.icon}
    />
  ))
  // const docPrices = [
  //   {
  //     titlePlane: 'Plano Básico',
  //     descriptionPlane: 'Projetado para empresas com requisitos básicos de TI',
  //     icon: <SiOpenai />,
  //     price: '70.250',
  //     textPlaneInclude: 'Este plano básicos inclui:',
  //     serviceIncluded: [
  //       'Até 5 Páginas ',
  //       'Design Responsivo ',
  //       'Modelo Padrão ',
  //       'Formulário de Contacto ',
  //       'Slide Básico ',
  //       'Integração com Redes Sociais ',
  //       'Integração Google Maps ',
  //       'Domínio .ao .com .net .org1 ano gratuito ',
  //       'Hospedagem de 1 ano com 5GB de HD ',
  //       '5 Contas de email corporativo'
  //     ],
  //     onClick: solicitation()
  //   },
  //   {
  //     titlePlane: 'Plano Sliver',
  //     descriptionPlane: 'Projetado para empresas com requisitos médios de TI',
  //     icon: <TfiWorld />,
  //     price: '70.250',
  //     textPlaneInclude: 'Este plano sliver inclui:',
  //     serviceIncluded: [
  //       ' Até 10 Páginas',
  //       ' Design Responsivo',
  //       ' Modelo Personalizado',
  //       ' Formulário de Contacto',
  //       ' Slide Show',
  //       ' Integração com Redes Sociais',
  //       ' Integração Google Maps',
  //       ' Domínio .ao .com .net .org 1 ano gratuito',
  //       ' Hospedagem de 1 ano com 10GB de HD',
  //       ' 10 Contas de email corporativo',
  //       'Certificado SSL/HTTPS.'
  //     ],
  //     onClick: solicitation()
  //   },
  //   {
  //     titlePlane: 'Plano Profissional',
  //     descriptionPlane:
  //       'Projetado para empresas com requisitos profissional de TI',
  //     icon: <GiSpikesFull />,
  //     price: '70.250',
  //     textPlaneInclude: 'Este plano profissional inclui:',
  //     serviceIncluded: [
  //       'Até 20 Páginas',
  //       'Design Responsivo',
  //       'Modelo Personalizado',
  //       'Integração Google Analytics',
  //       'Formulário de Contacto',
  //       'Slide Show',
  //       'Gestor de Conteúdo',
  //       'Integração com Redes Sociais',
  //       'Optimização de Site (SEO) ',
  //       'Integração com Google Maps',
  //       'Múltiplos Idiomas (PT / ENG) ',
  //       'Back-Office de gestão',
  //       'Blog Interno. ',
  //       'Domínio .ao .com .net .org 1 ano gratuito',
  //       'Hospedagem de 1 ano com 30 GB de HD',
  //       '20 Contas de email corporativo. ',
  //       'Certificado SSL/HTTPS'
  //     ],
  //     onClick: solicitation()
  //   }
  // ]

  // const listarPrices = docPrices.map((item, index) => {
  //   return (
  //     <RenderPrice
  //       key={index}
  //       titlePlane={item.titlePlane}
  //       descriptionPlane={item.descriptionPlane}
  //       icon={item.icon}
  //       price={item.price}
  //       textPlaneInclude={item.textPlaneInclude}
  //       serviceIncluded={item.serviceIncluded}
  //       onClick={item.onClick}
  //     />
  //   )
  // })

  function getBudget() {}

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <AffiliatesStyles>
      <HeroSectionPage
        backgroundImage="/banner/banner2.png"
        title={'Programa de Afiliados'}
        description="Ganhe até 20% por transação. Divulgue um dos nossos serviços de confiança. Faça parte de um programa de afiliados que reconhece a sua contribuição."
        clickButton={getBudget}
        titleBtn="Aceda à área de afiliados"
      />

      <ContainerAffiliates>
        <section
          className="section2"
          style={{ backgroundColor: 'transparent' }}
        >
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Ser um Afiliado do <strong>Tchossy</strong> é para você, que:
            </h1>

            <div className="containerBenefits">{listIsForYou}</div>
          </div>
        </section>

        <section className="section1">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Ganhe comissões ao promover <strong>nossos serviços</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                No Programa de Afiliados Tchossy, valorizamos as parcerias e
                acreditamos que o sucesso deve ser compartilhado. Ao se tornar
                um afiliado, você terá a oportunidade de expandir seus
                horizontes de negócios, promovendo nossos serviços de marketing,
                design, tecnologia e muito mais. À medida que suas indicações se
                tornam nossos valiosos clientes, você ganha comissões atraentes.
                Nossa plataforma de afiliados oferece ferramentas de
                rastreamento, suporte dedicado e a oportunidade de crescer
                conosco. Junte-se a nós e comece a aproveitar os benefícios de
                ser um Afiliado Tchossy hoje!
              </p>

              <ul>
                <li>
                  <BsFillCheckCircleFill size={18} />
                  <p>
                    <strong>Ganhos Generosos:</strong>
                    <br />
                    Receba comissões atraentes por cada conversão bem-sucedida
                    gerada por meio do seu link de afiliado;
                  </p>
                </li>
                <li>
                  <BsFillCheckCircleFill size={18} />
                  <p>
                    <strong>Comissões Recorrentes:</strong>
                    <br />
                    Alguns serviços Tchossy geram comissões recorrentes,
                    proporcionando uma fonte contínua de ;
                  </p>
                </li>
                <li>
                  <BsFillCheckCircleFill size={18} />
                  <p>
                    <strong>Oportunidade de Crescimento:</strong>
                    <br /> À medida que você constrói uma base de clientes, suas
                    comissões podem aumentar significativamente, oferecendo
                    oportunidades de crescimento contínuo.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://jobvision.ir/blog/wp-content/uploads/2021/06/IT-engineer-recruitment.jpg"
            alt=""
          />
        </section>
      </ContainerAffiliates>
    </AffiliatesStyles>
  )
}

export default Affiliates
