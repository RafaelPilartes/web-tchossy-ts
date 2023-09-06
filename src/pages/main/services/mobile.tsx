import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ServiceWebsiteStyles,
  ContainerServiceWebsite
} from '../../../styles/pages/_main/ServiceWebsiteStyles'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import RenderBenefits from '../../../components/_main/renders/RenderSolutions'
import MobileApp from '../../../components/_main/renders/RenderCardTypes'
import { defaultTheme } from '../../../themes/default'

// Routs

// Components

function MobileService() {
  const docBenefits = [
    {
      imgUrl:
        'https://naveg.in/wp-content/uploads/2019/12/SEO-4-dicas-mais-vislibilidade-para-sua-empresa-Navegin.png',
      title: 'Maior visibilidade',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://agenciaellis.com.br/blog/wp-content/uploads/2022/08/close-up-of-mobile-phone-with-a-cloud-of-apps.jpg',
      title: 'Canal direto de vendas',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://leads2b.com/blog/wp-content/uploads/2020/12/capa-Fidelizacao-de-clientes.png',
      title: 'Fidelizar seus clientes',
      icon: <AiFillCode size={36} />
    },
    {
      imgUrl:
        'https://i.pinimg.com/originals/e4/6f/06/e46f0637773f8bdb1b73ead5ff6c8b45.png',
      title: 'Comunicação imediata',
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
  const docMobileApp = [
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
  const listMobileApp = docMobileApp.map((item, index) => (
    <MobileApp
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
        backgroundImage="https://theappcompany.com/wp-content/uploads/2015/12/secret-of-mobile-apps.jpg"
        title={'Aplicações Moveis'}
        description="Um Ecomerce pode ajudar a sua empresa, a obter mais visibilidade, credibilidade e clientes."
        clickButton={getBudget}
      />

      <ContainerServiceWebsite>
        <section className="section1">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Crie seu aplicativo <strong>connosco</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Os aplicativos móveis chegaram para ficar. É bem difícil
                encontrar alguém que não os utilize, várias vezes, todos os
                dias. E isso representa uma ótima oportunidade para as marcas.
                Seja em um iPhone ou Android, há sempre espaço para as empresas
                terem bastante sucesso com aplicativos personalizados.
              </p>
              <p data-aos="fade-right">
                Possuímos uma equipe de programadores de aplicações móveis
                qualificados que possuem um conhecimento extenso do processo de
                desenvolvimento de aplicativos nas plataformas Android e iOS.
              </p>

              <p data-aos="fade-up">
                Além disso, também oferecemos serviços de manutenção de
                aplicativos para atender às suas necessidades cada vez maiores à
                medida que seu negócio se expande e para auxiliar em futuras
                atualizações de tecnologia.
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://repforce.co/images/bg-banner.png"
            alt=""
          />
        </section>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              <strong>Vantagens</strong> de ter um Aplicações Moveis
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
                <h1>Você já tem a sua aplicação móvel?</h1>
                <h3>Quer aumentar as seus vendas e ir para outro nível? </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Criar minha aplicação móvel'}
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
              A sua <strong>aplicação móvel</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Criamos aplicação móvel a imagem da sua empresa, trabalhamos ao
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
            src="https://image.freepik.com/foto-gratis/hombre-africano-guapo-enojado-mirando-telefono-sobre-pared-azul_176420-2355.jpg"
            alt=""
          />
        </section>
      </ContainerServiceWebsite>
    </ServiceWebsiteStyles>
  )
}

export default MobileService
