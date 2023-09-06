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

// Routs

// Components

function EmailProfessionalService() {
  const docBenefits = [
    {
      imgUrl:
        'http://marketingobjetivo.com.br/wp-content/uploads/2019/08/presenca-online.jpg',
      title: 'Gera mais credibilidade e confiança.',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://cdn.abcdoabc.com.br/o-que-sao-produtos-digitais-1_cc6d051b.jpg',
      title: 'Transmite uma excelente primeira impressão',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://uoledtech.com.br/hubfs/Imported_Blog_Media/20943526-scaled-1.jpg',
      title: 'Promove o conhecimento da sua marca;.',
      icon: <AiFillCode size={36} />
    },
    {
      imgUrl:
        'http://www.consultinghouse.com.br/wp-content/uploads/2019/03/accomplishment-agreement-business-1249158-1024x673.jpg',
      title: 'É fácil de usar.',
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
        backgroundImage="https://sloovi-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/11/16105429/1-Sales-Email-Signature.webp"
        title={'E-mail Profissional'}
        titleBtn="Criar meu e-mail"
        description=""
        clickButton={getBudget}
      />

      <ContainerServiceWebsite>
        <div className="containerSectionMaxWidth">
          <section className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Comunicação <strong>segura e confiável</strong>{' '}
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Empresas que utilizam endereços de e-mail personalizados
                  @suaempresa têm maior credibilidade junto a fornecedores e
                  clientes, pois, quando se comunicam, não geram dúvidas sobre a
                  autenticidade das mensagens trocadas com os membros daquela
                  corporação.
                </p>
                <p data-aos="fade-right">
                  Muitas pessoas se sentem inseguras quando recebem um orçamento
                  ou contato comercial de um endereço de e-mail gratuito.
                  Existem muitas fraudes nos meios digitais e o endereço de
                  e-mail personalizado gera maior confiança.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-left"
              src="https://cdni.iconscout.com/illustration/premium/thumb/people-receive-marketing-email-7244206-5901086.png"
              alt=""
            />
          </section>
        </div>

        <section className="exploreUs">
          <div className="containerContent">
            <div className="contentExploreUs">
              <div data-aos="fade-right">
                <h1>Solicite já o seu Email </h1>
                <h3>
                  Não hesite em nos contactar, estabeleça a sua marca usando
                  email profissional.
                </h3>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Solicitar agora'}
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
              <strong>Vantagens</strong> de ter um e-mail profissional
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

export default EmailProfessionalService
