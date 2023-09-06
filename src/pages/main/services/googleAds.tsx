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

function GoogleAdsService() {
  const docBenefits = [
    {
      imgUrl:
        'http://marketingobjetivo.com.br/wp-content/uploads/2019/08/presenca-online.jpg',
      title: 'Definir o orçamento que você quiser para a sua campanha.',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://cdn.abcdoabc.com.br/o-que-sao-produtos-digitais-1_cc6d051b.jpg',
      title: 'Pagar somente quando alguém clicar no seu anúncio.',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://uoledtech.com.br/hubfs/Imported_Blog_Media/20943526-scaled-1.jpg',
      title: 'Definir palavras chaves mais relevantes para o seu anúncio.',
      icon: <AiFillCode size={36} />
    },
    {
      imgUrl:
        'http://www.consultinghouse.com.br/wp-content/uploads/2019/03/accomplishment-agreement-business-1249158-1024x673.jpg',
      title: 'O google é a maior plataforma de marketing online do mundo.',
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
        backgroundImage="https://fator.ag/blog/wp-content/uploads/2019/08/26-dicas-google-ads.gif"
        title={'Google Ads'}
        description=" Destaque a sua marca e alcance potenciais clientes com Anúncios google ads"
        clickButton={getBudget}
      />

      <ContainerServiceWebsite>
        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Google <strong>Pesquisa</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Este tipo de anúncio permite assegurar que os seus potenciais
                  clientes encontrem a sua marca ou gerar tráfego no seu website
                  a partir do motor de pesquisa do google.
                </p>

                <p data-aos="fade-up">
                  Anúncios patrocinados para os motores de busca, além de
                  garantirem resultados imediatos, também são uma excelente
                  alternativa para você se destacar da sua concorrência que está
                  bem posicionada em SEO.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://expertdigital.net/wp-content/uploads/2021/01/Definindo-o-Publico-Alvo-no-Google-Ads-Rede-de-Pesquisa.png"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Google <strong>Display</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Anúncios visuais (imagens/banners) para promover a sua empresa
                  quando seus potenciais clientes navegam online, vêem vídeos no
                  YouTube, utilizam websites, dispositivos móveis e aplicações
                  parceiros do Google.
                </p>

                <p data-aos="fade-up">
                  Os anúncios de display também são usados para promover a sua
                  aplicação mobile nos motores de pesquisa, no YouTube, websites
                  e plataformas parceiras do Google.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-right"
              src="https://unbounce.com/photos/source-1.gif"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Google <strong>Shopping</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Garanta que os seus produtos sejam encontrados por aqueles que
                  procuram o que você vende na internet. Com o google shopping
                  você pode promover o seu inventário de produtos e garantir
                  mais visibilidade e vendas.
                </p>

                <p data-aos="fade-up">
                  Deseja divulgar os seus produtos e aumentar as suas vendas?
                </p>
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://searchengineland.com/wp-content/seloads/2021/10/deals_for_you_google.gif"
              alt=""
            />
          </section>
        </div>

        <div className="containerSectionMaxWidth">
          <section className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Google <strong>Marketing</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Promova os seus produtos ou serviços a pessoas que interagiram
                  anteriormente com a sua empresa através do o seu website ou
                  aplicação móvel. Com google remarketing você pode criar
                  anúncios orientados para as pessoas que executam alguma acção
                  no seu site, aplicação móvel ou que assistiram um vídeo seu no
                  YouTube.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-right"
              src="https://media.istockphoto.com/id/1175570823/pt/vetorial/smm-content-management-and-blogging-concept-in-flat-design-creating-marketing-and-sharing.jpg?s=612x612&w=0&k=20&c=IZYHLrzxerirBG_w9rP5r4IjewkQvEXkLsCP9xZTeuI="
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
                  value={'Promover meus serviços'}
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
              <strong>Vantagens</strong> de anunciar no Google Ads
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

export default GoogleAdsService
