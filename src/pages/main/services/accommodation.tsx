import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// AliceCarousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// Icons
import { GiSpikesFull } from 'react-icons/gi'
import { SiOpenai } from 'react-icons/si'
import { TfiWorld } from 'react-icons/tfi'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { BiSkipNext, BiWorld } from 'react-icons/bi'

// Styles
import {
  ServiceAccommodationStyles,
  ContainerServiceAccommodation,
  ContainerListPrices
} from '../../../styles/pages/_main/ServiceAccommodationStyles'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import { defaultTheme } from '../../../themes/default'
import RenderBenefits from '../../../components/_main/renders/RenderSolutions'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import RenderCardTypes from '../../../components/_main/renders/RenderCardTypes'
import RenderPrice from '../../../components/_main/renders/RenderPrices'
import { MdDesignServices } from 'react-icons/md'

// Routs

// Components

function Accommodation() {
  function solicitation() {}

  const responsive = {
    0: { items: 1 },
    580: { items: 2 },
    1000: { items: 3 }
  }

  const docPrices = [
    {
      titlePlane: 'Combo iniciantes',
      descriptionPlane:
        'Projetado para negocias e empresas que estão iniciando',
      icon: <BsFillPlayFill />,
      price: '70.250',
      textPlaneInclude: 'Este plano inclui:',
      serviceIncluded: [
        'Domínio Grátis*',
        'CDN - Acelerador de Site',
        'SSL - Site Seguro',
        'Backup site e E-mail',
        'Até 3 Sites/Domínios**',
        '25 GB Transferência',
        '5 GB Web/Mysql',
        '25 GB Transferência',
        '1 vCPU',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Combo básico',
      descriptionPlane:
        'Projetado para empresas que desejam tem ter um maior alce',
      icon: <BiSkipNext />,
      price: '70.250',
      textPlaneInclude: 'Este plano inclui:',
      serviceIncluded: [
        'Domínio Grátis*',
        'CDN - Acelerador de Site',
        'SSL - Site Seguro',
        'Backup site e E-mail',
        'Até 5 Sites/Domínios**',
        '30 GB Transferência',
        '10 GB Web/Mysql',
        '50 GB Transferência',
        '2 vCPU',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Combo pré-profissional',
      descriptionPlane: 'Projetado para empresas com requisitos básicos de TI',
      icon: <BiWorld />,
      price: '70.250',
      textPlaneInclude: 'Este plano inclui:',
      serviceIncluded: [
        'Domínio Grátis*',
        'CDN - Acelerador de Site',
        'SSL - Site Seguro',
        'Backup site e E-mail',
        'Até 10 Sites/Domínios**',
        '50 GB Transferência',
        '15 GB Web/Mysql',
        '100 GB Transferência',
        '3 vCPU',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Combo profissional',
      descriptionPlane: 'Projetado para empresas com requisitos básicos de TI',
      icon: <SiOpenai />,
      price: '70.250',
      textPlaneInclude: 'Este plano inclui:',
      serviceIncluded: [
        'Domínio Grátis*',
        'CDN - Acelerador de Site',
        'SSL - Site Seguro',
        'Backup site e E-mail',
        'Até 15 Sites/Domínios**',
        '100 GB Transferência',
        '20 GB Web/Mysql',
        '250 GB Transferência',
        '4 vCPU',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Combo prémio',
      descriptionPlane:
        'Projetado para empresas com requisitos profissional de TI',
      icon: <GiSpikesFull />,
      price: '70.250',
      textPlaneInclude: 'Este plano inclui:',
      serviceIncluded: [
        'Domínio Grátis*',
        'CDN - Acelerador de Site',
        'SSL - Site Seguro',
        'Backup site e E-mail',
        'Até 20 Sites/Domínios**',
        '200 GB Transferência',
        '25 GB Web/Mysql',
        '500 GB Transferência',
        '5 vCPU',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    }
  ]
  const listarPrices = docPrices.map((item, index) => {
    return (
      <RenderPrice
        key={index}
        titlePlane={item.titlePlane}
        descriptionPlane={item.descriptionPlane}
        icon={item.icon}
        price={item.price}
        textPlaneInclude={item.textPlaneInclude}
        serviceIncluded={item.serviceIncluded}
        onClick={item.onClick}
      />
    )
  })

  const docRenderCardTypes = [
    {
      imgUrl:
        'https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,w_1200/blog/blog2/dominio-gratis-opciones/dominio-gratis-opciones-img_header.jpg',
      title: 'Domínio Grátis',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://www.weblink.com.br/blog/wp-content/uploads/2017/11/Como-Criar-Um-Email-Profissional.png',
      title: 'E-mail Profissional',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://blog.keliweb.it/wp-content/uploads/2020/07/differenza-tra-http-e-https.png',
      title: 'CDN e SSL Grátis',
      icon: <MdDesignServices size={36} />
    }
  ]
  const listRenderCardTypes = docRenderCardTypes.map((item, index) => (
    <RenderCardTypes
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
    <ServiceAccommodationStyles>
      <HeroSectionService
        backgroundImage="/backgrounds/bg_domains.png"
        shadow={true}
        title={'Hospede seus sites agora'}
        description="Um Ecomerce pode ajudar a sua empresa, a obter mais visibilidade, credibilidade e clientes."
        titleBtn="Hospedar meu site agora"
        clickButton={getBudget}
      />

      <ContainerServiceAccommodation>
        <ContainerListPrices>
          <AliceCarousel
            mouseTracking
            items={listarPrices}
            responsive={responsive}
            autoPlay
            infinite
            autoPlayInterval={3000}
            animationDuration={1000}
          />
        </ContainerListPrices>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Com o <strong>Tchossy</strong>, você encontra{' '}
              <strong>tudo</strong> o que o seu site precisa em{' '}
              <strong>um só local</strong>
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              illum beatae debitis iste soluta eos a, dicta obcaecati iusto in
              harum velit rerum excepturi atque hic vero molestiae itaque
              blanditiis.
            </p>

            <div className="containerBenefits">{listRenderCardTypes}</div>
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
                <h1>O seu website já está hospedado?</h1>
                <h3>
                  Tudo o que você precisa com o preço e recursos mais
                  competitivos do mercado nacional.
                </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Hospedar meu website'}
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
              Hospedagem de sites para <strong>pequenos e grandes </strong>
              negócios
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                A hospedagem de site da Hostnet é reconhecida pela excelente
                qualidade do serviço e do atendimento.
              </p>

              <p data-aos="fade-right">
                Servidores estáveis, seguros, otimizados para excelente
                desempenho e velocidade dos sites e lojas.
              </p>

              <p data-aos="fade-right">
                Atendemos projetos de todos os tamanhos, desde pequenos sites
                até grandes portais e e-commerces.
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://cdn.conectasul.com/wp-content/uploads/2019/12/hospedagem-de-sites-em-joinville-velocidade.png"
            alt=""
          />
        </section>

        <section className="section1">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Recursos da <strong>hospedagem de sites </strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                necessitatibus recusandae deserunt illo nulla, voluptates ea!
              </p>

              <p data-aos="fade-right">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                reiciendis similique, doloremque qui, ut voluptatibus,
                distinctio repellendus sed nam optio a? Illum animi porro
                assumenda asperiores possimus vitae sunt fuga!
              </p>

              <p data-aos="fade-right">
                E mais: E-mail Profissional, CDN e SSL estão disponíveis em
                todos os planos de hospedagem de sites sem custo adicional.
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://cdn.conectasul.com/wp-content/uploads/2019/12/destaque-home-hospedagem-de-sites.png"
            alt=""
          />
        </section>
      </ContainerServiceAccommodation>
    </ServiceAccommodationStyles>
  )
}

export default Accommodation
