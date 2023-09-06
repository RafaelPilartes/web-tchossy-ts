import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ServiceWebsiteStyles,
  ContainerServiceWebsite
} from '../../../styles/pages/_main/ServiceWebsiteStyles'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import RenderBenefits from '../../../components/_main/renders/RenderBenefits'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import { routsNameMain } from '../../../data/routsName'
import { defaultTheme } from '../../../themes/default'
import TypesWebsite from '../../../components/_main/renders/RenderCardTypes'
import RenderPrice from '../../../components/_main/renders/RenderPrices'
import { GiSpikesFull } from 'react-icons/gi'
import { SiOpenai } from 'react-icons/si'
import { TfiWorld } from 'react-icons/tfi'

// Routs

// Components

function WebsiteService() {
  const docBenefits = [
    {
      imgUrl:
        'http://marketingobjetivo.com.br/wp-content/uploads/2019/08/presenca-online.jpg',
      title: 'Garante presença na internet',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://cdn.abcdoabc.com.br/o-que-sao-produtos-digitais-1_cc6d051b.jpg',
      title: 'Promoção de seus produtos e serviços',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://uoledtech.com.br/hubfs/Imported_Blog_Media/20943526-scaled-1.jpg',
      title: 'Contacto mais fácil com o cliente',
      icon: <AiFillCode size={36} />
    },
    {
      imgUrl:
        'http://www.consultinghouse.com.br/wp-content/uploads/2019/03/accomplishment-agreement-business-1249158-1024x673.jpg',
      title: 'Mais credibilidade para sua empresa/marca',
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

  function solicitation() {}

  function getBudget() {}

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <ServiceWebsiteStyles>
      <HeroSectionService
        backgroundImage="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
        title={'Website'}
        description="Um website pode ajudar a sua empresa, a obter mais visibilidade, credibilidade e clientes."
        clickButton={getBudget}
      />

      <ContainerServiceWebsite>
        <section className="section1">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Apresente-se aos <strong>seus clientes</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Chegou o momento de potenciar o seu negócio! A sua empresa é
                única e exclusiva, e precisa dum site que a identifique bem.
              </p>

              <p data-aos="fade-up">
                Precisa dum Website que capte atenção de potenciais clientes? Ou
                precisa duma Loja Online para aumentar as suas vendas? Quer um
                site Dinâmico ou Landing Page que alcançe mais clientes?
              </p>

              <p data-aos="fade-up">
                Seja qual for a sua área de negócio, a Jukisoft é o parceiro
                ideal, a escolha certa para os seus objetivos e que se adapta às
                suas necessidades.
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://jobvision.ir/blog/wp-content/uploads/2021/06/IT-engineer-recruitment.jpg"
            alt=""
          />
        </section>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Vantagens</strong> de ter um website
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              illum beatae debitis iste soluta eos a, dicta obcaecati iusto in
              harum velit rerum excepturi atque hic vero molestiae itaque
              blanditiis.
            </p>

            <div className="containerBenefits">{listBenefits}</div>
          </div>
        </section>

        <section className="exploreUs">
          {/* <div className="containerLinesLeft" data-aos="fade-up">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>

          <div className="containerLinesRight" data-aos="fade-down">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div> */}

          {/* <div className="containerLinesRightInvert">
            <div className="line1"></div>
          </div> */}

          <div className="containerContent">
            <div className="contentExploreUs">
              <div data-aos="fade-right">
                <h1>A sua empresa já está na Web?</h1>
                <h3>Quer expandir o seu négocio e chegar mais longe? </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Criar meu website'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['base-white']}
                  colorSecondary={defaultTheme.colors['brand-secondary-light']}
                  textColor={defaultTheme.colors['base-text-bold']}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section3">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              O Seu <strong>Website</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Criamos Websites a imagem da sua empresa, trabalhamos ao detalhe
                para transmitir os valores que acompanham e diferenciam a sua
                identidade no mercado Angolano.
              </p>

              <p data-aos="fade-up">
                Formamos seus técnicos para continuar as atualizações na página
                sem qualquer custo, dando liberdade total ao redirecionamento
                estratégico que decidir sem depender de terceiros
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://futurefaculty.cornell.edu/wp-content/uploads/2018/07/2015_0535_042-2.jpg"
            alt=""
          />
        </section>

        <section className="section4">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Tipos de website que temos <strong>para si!</strong>
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              illum beatae debitis iste soluta eos a, dicta obcaecati iusto in
              harum velit rerum excepturi atque hic vero molestiae itaque
              blanditiis.
            </p>

            <div className="containerTypesWebsite">{listTypesWebsite}</div>
          </div>
        </section>

        {/* <section className="section4">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Tipos de website que temos <strong>para si!</strong>
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              illum beatae debitis iste soluta eos a, dicta obcaecati iusto in
              harum velit rerum excepturi atque hic vero molestiae itaque
              blanditiis.
            </p>

            <div className="containerTypesWebsite">{listarPrices}</div>
          </div>
        </section> */}
      </ContainerServiceWebsite>
    </ServiceWebsiteStyles>
  )
}

export default WebsiteService
