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
import ButtonBase from '../../../components/_main/buttons/ButtonBase'

// Routs

// Components

function SponsoredLinksService() {
  const docBenefits = [
    {
      imgUrl:
        'http://marketingobjetivo.com.br/wp-content/uploads/2019/08/presenca-online.jpg',
      title: 'Promove os seus serviços ou produtos',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://cdn.abcdoabc.com.br/o-que-sao-produtos-digitais-1_cc6d051b.jpg',
      title: 'Obtenha mais tráfego para o seu site, apps ou WhatsApp',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://uoledtech.com.br/hubfs/Imported_Blog_Media/20943526-scaled-1.jpg',
      title: 'Alcance os potenciais clientes do seu negócio',
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
        backgroundImage="http://aroeleven.com.br/tarefas/public/img/digital-21.jpg"
        title={'Links patrocinados'}
        description="Adquira e fidelize mais clientes com estratégias modernas de marketing de conteúdo"
        clickButton={getBudget}
      />

      <ContainerServiceWebsite>
        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Links <strong>patrocinados</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Planeamos, criamos e supervisionamos campanhas de anúncios
                  patrocinados para divulgar o seu negócio ou marca e aumentar
                  as suas vendas.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://agenciauna.com.br/wp-content/uploads/2020/06/An%C3%BAncios-em-redes-sociais-1024x694.png"
              alt=""
            />
          </section>
        </div>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Vantagens</strong> dos links patrocinados
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

        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                <strong>Facebook</strong> Ads
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  O Marketing de Conteúdo é uma estratégia de Marketing focada
                  na produção de conteúdos ricos com o propósito de ajudar a
                  resolver os problemas do seu público-alvo, e deste modo criar
                  uma percepção positiva da sua marca na internet e gerar mais
                  oportunidade de negócios.
                </p>
              </div>

              <div>
                <ButtonBase
                  value={'data-aos="fade-up"Anunciar no Facebook'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-pink']}
                  textColor={defaultTheme.colors['base-white']}
                />
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://bzness.com.br/facebook-ads/images/personagem.png"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                <strong>Instagram</strong> Ads{' '}
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Criamos Sistemas de gestão a imagem da sua empresa,
                  trabalhamos ao detalhe para transmitir os valores que
                  acompanham e diferenciam a sua identidade no mercado Angolano.
                </p>

                <p data-aos="fade-up">
                  Elaboramos estratégias de produção de conteúdo orientadas aos
                  objectivos do seu negócio.
                </p>

                <p data-aos="fade-up">
                  Nossos redactores produzem e divulgam os conteúdos com base na
                  estratégia e planeamento feito.
                </p>
              </div>

              <div>
                <ButtonBase
                  data-aos="fade-up"
                  value={'Anunciar no Instagram'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-pink']}
                  textColor={defaultTheme.colors['base-white']}
                />
              </div>
            </div>

            <img
              data-aos="fade-right"
              src="https://greencitymarketing.com/wp-content/uploads/2020/12/3pod_WebDesign_Services_Illustrations_InstagramAdvertising-e1571753272259-500x414-1.png"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                <strong>Twitter</strong> Ads
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Oferecer conteúdo rico ao seu público-alvo mostra que sua
                  empresa é especialista na área em que actua, transmite mais
                  confiança e aumenta a autoridade da sua empresa.
                </p>

                <p data-aos="fade-up">
                  Oferecer conteúdo rico ao seu público-alvo mostra que sua
                  empresa é especialista na área em que actua, transmite mais
                  confiança e aumenta a autoridade da sua empresa.
                </p>
              </div>

              <div>
                <ButtonBase
                  data-aos="fade-up"
                  value={'Anunciar no Twitter'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-pink']}
                  textColor={defaultTheme.colors['base-white']}
                />
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://codecl.com/resource/frontend/img/fbmark/twitter-ads-codecl.png"
              alt="Img Twitter - tchossy"
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                <strong>Linkedin</strong> Ads
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Criamos Sistemas de gestão a imagem da sua empresa,
                  trabalhamos ao detalhe para transmitir os valores que
                  acompanham e diferenciam a sua identidade no mercado Angolano.
                </p>

                <p data-aos="fade-up">
                  Elaboramos estratégias de produção de conteúdo orientadas aos
                  objectivos do seu negócio.
                </p>
              </div>

              <div>
                <ButtonBase
                  data-aos="fade-up"
                  value={'Anunciar no Linkedin'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-pink']}
                  textColor={defaultTheme.colors['base-white']}
                />
              </div>
            </div>

            <img
              data-aos="fade-right"
              src="https://www.webcaretech.com/wp-content/uploads/linked.png"
              alt=""
            />
          </section>
        </div>

        <section className="exploreUs">
          <div className="containerContent">
            <div className="contentExploreUs">
              <div data-aos="fade-right">
                <h1>Patrocínio durante 1 dia grátis!</h1>
                <h3>
                  Quer aumentar a consciência da sua marca e atrair mais
                  clientes por meio de conteúdos relevantes?
                </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Obter consultoria grátis'}
                  onClick={() => null}
                  colorBase={defaultTheme.colors['base-white']}
                  colorSecondary={defaultTheme.colors['brand-secondary-light']}
                  textColor={defaultTheme.colors['base-text-bold']}
                />
              </div>
            </div>
          </div>
        </section>
      </ContainerServiceWebsite>
    </ServiceWebsiteStyles>
  )
}

export default SponsoredLinksService
