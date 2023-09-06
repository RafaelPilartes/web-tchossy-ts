import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ServiceSocialMediaManagementStyles,
  ContainerServiceSocialMediaManagement
} from '../../../styles/pages/_main/ServiceSocialMediaManagementStyles'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import ButtonSeeMore from '../../../components/_main/buttons/ButtonSeeMore'
import HeroSectionService from '../../../components/_main/HeroSectionService'
import RenderBenefits from '../../../components/_main/renders/RenderSolutions'
import RenderCardSocialMedia from '../../../components/_main/renders/RenderCardSocialMedia'
import { defaultTheme } from '../../../themes/default'
import TypesWebsite from '../../../components/_main/renders/RenderCardTypes'
import ButtonBase from '../../../components/_main/buttons/ButtonBase'

// Routs

// Components

function SocialMediaManagementService() {
  const docBenefits = [
    {
      imgUrl:
        'http://marketingobjetivo.com.br/wp-content/uploads/2019/08/presenca-online.jpg',
      title: 'Desenho e execução da estratégia digital',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://cdn.abcdoabc.com.br/o-que-sao-produtos-digitais-1_cc6d051b.jpg',
      title: 'Criação de conteúdos exclusivos',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://uoledtech.com.br/hubfs/Imported_Blog_Media/20943526-scaled-1.jpg',
      title: 'Monitoramento da marca',
      icon: <AiFillCode size={36} />
    },
    {
      imgUrl:
        'http://www.consultinghouse.com.br/wp-content/uploads/2019/03/accomplishment-agreement-business-1249158-1024x673.jpg',
      title: 'Relacionamento',
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
  const docSocialMediaManagement = [
    {
      imgUrl:
        'https://www.menosfios.com/wp-content/uploads/2023/02/i571145.jpeg',
      title: 'Facebook',
      link: 'https://www.facebook.com/tchossySolution/',
      description:
        'Maior rede social do mundo, com mais de 2 milhões de utilizadores activos em Angola. '
    },
    {
      imgUrl:
        'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2020/08/como-ocultar-mensajes-dms-de-instagram-conversaciones-andoid-ios-cover-e1600965280592.jpg?resize=1200%2C720&quality=80&ssl=1',
      title: 'Instagram',
      link: 'https://www.instagram.com/tchossySolution/',
      description:
        'O Instagram é a rede social de publicação de fotos e vídeos mais popular do mundo. '
    },
    {
      imgUrl:
        'https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-search-630834c87e29b-sej.png',
      title: 'Linkedin',
      link: 'https://www.linkedin.com/tchossySolution/',
      description:
        'Rede social profissional com mais de 500 mil utilizadores activos em Angola. '
    }
  ]
  const listSocialMediaManagement = docSocialMediaManagement.map(
    (item, index) => (
      <RenderCardSocialMedia
        key={index}
        imgUrl={item.imgUrl}
        title={item.title}
        link={item.link}
        description={item.description}
      />
    )
  )
  const docTypesSocialMediaManagement = [
    {
      imgUrl:
        'https://img.freepik.com/free-vector/travel-sale-flyer-template_52683-46904.jpg?w=2000',
      title: 'Travel',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://img.freepik.com/free-vector/vertical-business-flyer-template_23-2148838214.jpg?w=2000',
      title: 'HeadLine',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://img.freepik.com/free-vector/mosaic-business-flyer-template_52683-24035.jpg?w=2000',
      title: 'Bussiness',
      icon: <MdDesignServices size={36} />
    }
  ]
  const listTypesSocialMediaManagement = docTypesSocialMediaManagement.map(
    (item, index) => (
      <TypesWebsite
        key={index}
        imgUrl={item.imgUrl}
        title={item.title}
        icon={item.icon}
      />
    )
  )

  function getBudget() {}

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <ServiceSocialMediaManagementStyles>
      <HeroSectionService
        backgroundImage="https://blog.fortestecnologia.com.br/wp-content/uploads/2019/07/fortes-tecnologia-influencia-das-redes-sociais.jpg"
        title={'Gestão de redes sociais'}
        description="Ajudamos a sua empresa a ter o destaque que merece nas redes sociais."
        clickButton={getBudget}
      />

      <ContainerServiceSocialMediaManagement>
        <section className="section1">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Estratégia de marketing para as{' '}
              <strong>suas Redes Sociais</strong>
            </h1>

            <div className="contentDescriptions">
              <p data-aos="fade-right">
                Algumas empresas têm dificuldade em atrair novos clientes devido
                à falta de visibilidade e credibilidade no mercado. As pessoas
                que nunca ouviram falar da sua empresa ou marca dificilmente
                irão adquirir o seu produto ou serviço.
              </p>
              <p data-aos="fade-right">
                Sem uma boa estratégia qualquer coisa serve. Não basta estar
                online é preciso ter uma boa estratégia para destacar a sua
                empresa ou negócio nas redes sociais.
              </p>
              <p data-aos="fade-right">
                Ajudamos você a criar uma estratégia com o propósito de usar as
                redes sociais como uma poderosa ferramenta de marketing para o
                seu negócio, aumentar a visibilidade da sua marca, atrair
                potenciais clientes e tornar os seus actuais clientes em
                embaixadores e defensores da sua marca.
              </p>
            </div>
          </div>

          <img
            data-aos="fade-up-left"
            src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-management-2602882-2194270.png?f=webp"
            alt=""
          />
        </section>

        <section className="section2">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Cuidamos da sua marca nas <strong>redes sociais</strong>
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
                <h1>
                  Você quer destacar a sua empresa ou negócio nas redes sociais?
                </h1>
              </div>

              <div data-aos="fade-left">
                <ButtonSeeMore
                  value={'Sim com certeza'}
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
              <strong>Mídias sociais</strong> geridas por nós
            </h1>

            <p>
              A sua empresa deve estar onde os seus potenciais clientes estão.
            </p>

            <div className="containerTypesSocialMediaManagement">
              {listSocialMediaManagement}
            </div>
          </div>
        </section>

        <section className="section4">
          <div className="descriptionSection">
            <h1 data-aos="fade-up">
              Experiência comprovada em gestão de{' '}
              <strong>mídias sociais</strong>
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              illum beatae debitis iste soluta eos a, dicta obcaecati iusto in
              harum velit rerum excepturi atque hic vero molestiae itaque
              blanditiis.
            </p>

            <div className="containerTypesSocialMediaManagement">
              {listTypesSocialMediaManagement}
            </div>
          </div>
        </section>
      </ContainerServiceSocialMediaManagement>
    </ServiceSocialMediaManagementStyles>
  )
}

export default SocialMediaManagementService
