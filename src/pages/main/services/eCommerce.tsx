import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// AliceCarousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// Styles
import {
  ServiceEcommerceStyles,
  ContainerServiceEcommerce
} from '../../../styles/pages/_main/ServiceEcommerceStyles'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import RenderBenefits from '../../../components/_main/renders/RenderBenefits'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import { routsNameMain } from '../../../data/routsName'
import { defaultTheme } from '../../../themes/default'
import RenderCardTypes from '../../../components/_main/renders/RenderCardTypes'
import RenderPrice from '../../../components/_main/renders/RenderPrices'
import { GiSpikesFull } from 'react-icons/gi'
import { SiOpenai } from 'react-icons/si'
import { TfiWorld } from 'react-icons/tfi'

// Routs

// Components

function ECommerceService() {
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    1000: { items: 3 }
  }

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
  const docRenderCardTypes = [
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
    <ServiceEcommerceStyles>
      <HeroSectionService
        backgroundImage="https://eminence.ch/wp-content/uploads/2022/02/commerce-tips-2022.jpg"
        title={'E-Commerce'}
        description="Um Ecomerce pode ajudar a sua empresa, a obter mais visibilidade, credibilidade e clientes."
        clickButton={getBudget}
      />

      <ContainerServiceEcommerce>
        <section className="section1">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Comesse a vender <strong>agora</strong> a partir da{' '}
              <strong>internet</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Nos dias de hoje, não há muitas empresas ou negócios que possam
                sobreviver sem uma presença na internet.
              </p>

              <p data-aos="fade-up">
                Garanta liberdade e autonomia de informar os seus potenciais
                clientes.
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://static.mundoeducacao.uol.com.br/vestibular/2021/08/estudando-ferias.jpg"
            alt=""
          />
        </section>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Vantagens</strong> de ter um E-commerce
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
                <h1>Você já tem uma loja virtual?</h1>
                <h3>Quer aumentar as seus vendas e ir para outro nível? </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Criar meu Ecomerce'}
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
              O Seu <strong>Ecomerce</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Criamos Ecommerces a imagem da sua empresa, trabalhamos ao
                detalhe para transmitir os valores que acompanham e diferenciam
                a sua identidade no mercado Angolano.
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
            src="https://img.freepik.com/photos-gratuite/jeune-televendeur-homme-noir-qui-ne-se-rend-pas_1187-53091.jpg?size=626&ext=jpg"
            alt=""
          />
        </section>

        <section className="section4">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Temos alguns modelos <strong>para si!</strong>
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              illum beatae debitis iste soluta eos a, dicta obcaecati iusto in
              harum velit rerum excepturi atque hic vero molestiae itaque
              blanditiis.
            </p>

            <div className="containerTypesEcomerce">{listRenderCardTypes}</div>
          </div>
        </section>
      </ContainerServiceEcommerce>
    </ServiceEcommerceStyles>
  )
}

export default ECommerceService
