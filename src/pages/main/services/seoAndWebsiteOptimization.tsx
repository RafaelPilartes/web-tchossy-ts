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
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import RenderBenefits from '../../../components/_main/renders/RenderSolutions'
import TypesWebsite from '../../../components/_main/renders/RenderCardTypes'

// Routs

// Components

function SeoAndWebsiteOptimizationService() {
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

  function getBudget() {}

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <ServiceWebsiteStyles>
      <HeroSectionService
        backgroundImage="https://digitalisthub.com/wp-content/uploads/2020/07/2418778-min-1536x1025.jpg"
        title={'SEO e Otimização do site'}
        description="Garanta as primeiras posições das pesquisas na internet e mais vendas com SEO "
        clickButton={getBudget}
      />

      <ContainerServiceWebsite>
        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                SEO de <strong>tráfego</strong>
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
                  ideal, a escolha certa para os seus objetivos e que se adapta
                  às suas necessidades.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://www.cloudmarket.com.br/wp-content/uploads/2022/06/Agencia-especializada-em-SEO.png"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                SEO para <strong>E-commerce</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Criamos Sistemas de gestão a imagem da sua empresa,
                  trabalhamos ao detalhe para transmitir os valores que
                  acompanham e diferenciam a sua identidade no mercado Angolano.
                </p>

                <p data-aos="fade-up">
                  Formamos seus técnicos para continuar as atualizações na
                  página sem qualquer custo, dando liberdade total ao
                  redirecionamento estratégico que decidir sem depender de
                  terceiros
                </p>
              </div>
            </div>

            <img
              data-aos="fade-right"
              src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-SEO.jpg"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                SEO <strong>Local</strong>
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
                  ideal, a escolha certa para os seus objetivos e que se adapta
                  às suas necessidades.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://www.fourfront.us/wp-content/uploads/2022/06/local-seo-graphic.png"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                SEO <strong>Mobile</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Criamos Sistemas de gestão a imagem da sua empresa,
                  trabalhamos ao detalhe para transmitir os valores que
                  acompanham e diferenciam a sua identidade no mercado Angolano.
                </p>

                <p data-aos="fade-up">
                  Formamos seus técnicos para continuar as atualizações na
                  página sem qualquer custo, dando liberdade total ao
                  redirecionamento estratégico que decidir sem depender de
                  terceiros
                </p>
              </div>
            </div>

            <img
              data-aos="fade-right"
              src="https://www.techdigitalworld.com/images/img/mseo2.png"
              alt=""
            />
          </section>
        </div>

        <section className="exploreUs">
          <div className="containerContent">
            <div className="contentExploreUs">
              <div data-aos="fade-right">
                <h1>O seu site aparece facilmente na internet?</h1>
                <h3>
                  Garantir que o seu site possa facilmente ser localizado nos
                  motores de buscas e aumentar o ranking de ser achado
                  facilmente através de palavras-chave ligadas a ele.
                </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Criar minha Sistema de gestão'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['base-white']}
                  colorSecondary={defaultTheme.colors['brand-secondary-light']}
                  textColor={defaultTheme.colors['base-text-bold']}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Vantagens</strong> de ter um website Otimizado
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
      </ContainerServiceWebsite>
    </ServiceWebsiteStyles>
  )
}

export default SeoAndWebsiteOptimizationService
