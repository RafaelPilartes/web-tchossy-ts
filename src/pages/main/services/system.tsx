import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ServiceWebsiteStyles,
  ContainerServiceWebsite
} from '../../../styles/pages/_main/ServiceWebsiteStyles'
import { defaultTheme } from '../../../themes/default'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import RenderBenefits from '../../../components/_main/renders/RenderSolutions'
import TypesWebsite from '../../../components/_main/renders/RenderCardTypes'

// Routs

// Components

function SystemService() {
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
  const listTypesWebsite = docTypesWebsite.map((item, index) => (
    <TypesWebsite
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
    <ServiceWebsiteStyles>
      <HeroSectionService
        backgroundImage="https://digitalisthub.com/wp-content/uploads/2020/07/2418778-min-1536x1025.jpg"
        title={'Sistema de gestão'}
        description="Um Ecomerce pode ajudar a sua empresa, a obter mais visibilidade, credibilidade e clientes."
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
                Precisa dum Ecomerce que capte atenção de potenciais clientes?
                Ou precisa duma Loja Online para aumentar as suas vendas? Quer
                um site Dinâmico ou Landing Page que alcançe mais clientes?
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
            src="https://soyfernando.com/wp-content/uploads/2020/04/5-Advantages-of-Online-Learning-1068x712.jpg"
            alt=""
          />
        </section>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Vantagens</strong> de ter um Sistema de gestão
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
          <div className="containerContent">
            <div className="contentExploreUs">
              <div data-aos="fade-right">
                <h1>Você já tem a sua Sistema de gestão?</h1>
                <h3>Quer aumentar as seus vendas e ir para outro nível? </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Criar meu Sistema de gestão'}
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
              O seu <strong>Sistema de gestão</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Criamos Sistemas de gestão a imagem da sua empresa, trabalhamos
                ao detalhe para transmitir os valores que acompanham e
                diferenciam a sua identidade no mercado Angolano.
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
            src="https://www.park.edu/wp-content/uploads/2020/09/iStock-993565470-1024x666-1-768x512.jpg"
            alt=""
          />
        </section>
      </ContainerServiceWebsite>
    </ServiceWebsiteStyles>
  )
}

export default SystemService
