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

function ContentMarketingService() {
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
        backgroundImage="https://www.promoview.com.br/uploads/2021/10/13/lead-post-197876-0481245001634098938.jpeg"
        title={'Marketing de conteúdo'}
        description="Adquira e fidelize mais clientes com estratégias modernas de marketing de conteúdo"
        clickButton={getBudget}
      />

      <ContainerServiceWebsite>
        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Marketing de <strong>conteúdo</strong>
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
            </div>

            <img
              data-aos="fade-left"
              src="https://th.bing.com/th/id/R.9443631c069ce7f7a55e5af908b5d6b2?rik=GZuJsvadGllGxQ&riu=http%3a%2f%2fwww.dila.premier-ministre.gouv.fr%2fIMG%2frubon5.jpg&ehk=HEkn7eDuPf%2f7tAB0GDBl4aBLLUueNeIoxvQqF7kWTQg%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Estratégias de produção de <strong>conteúdo</strong>
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

                <p data-aos="fade-up">
                  Analisamos os resultados de modo a garantir que os conteúdos
                  sejam feitos de maneira eficiente e criativa a fim de atender
                  as necessidades da sua marca.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-right"
              src="https://multicoresolutions.in/assets/img/projects/img3.jpg"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Produção de conteúdos <strong>Ricos</strong>
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

                <p data-aos="fade-up">
                  Seja qual for a sua área de negócio, a Jukisoft é o parceiro
                  ideal, a escolha certa para os seus objetivos e que se adapta
                  às suas necessidades.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://www.hostgator.com/blog/wp-content/uploads/2019/09/How-to-Optimize-Blog-Posts-for-Holiday-Traffic-1024x536.png"
              alt=""
            />
          </section>
        </div>

        <section className="exploreUs">
          <div className="containerContent">
            <div className="contentExploreUs">
              <div data-aos="fade-right">
                <h1>Consultoria grátis de conteúdo de marketing</h1>
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

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Vantagens</strong> do marketing de conteúdos
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

export default ContentMarketingService
