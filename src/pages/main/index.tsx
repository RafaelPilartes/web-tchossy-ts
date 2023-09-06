import { useEffect, useRef, useState } from 'react'

// Navegação
import { useNavigate } from 'react-router-dom'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// Modulos de Icons
import { SiOpenai, SiWechat } from 'react-icons/si'
import { BsFillCheckCircleFill, BsFillPlayFill } from 'react-icons/bs'
import { GiAcousticMegaphone, GiSmartphone, GiSpikesFull } from 'react-icons/gi'
import {
  MdComputer,
  MdDesignServices,
  MdOutlineSupportAgent,
  MdOutlineWork
} from 'react-icons/md'
import { AiFillCode, AiFillStar, AiOutlineAreaChart } from 'react-icons/ai'
import { TfiWorld } from 'react-icons/tfi'
import { BsFillPatchCheckFill } from 'react-icons/bs'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// AliceCarousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'

// Theme
import { defaultTheme } from '../../themes/default'

// Styles
import { ContainerHome } from '../../styles/pages/_main/HomeStyles'

// Routs
import { routsNameMain } from '../../data/routsName'

// Components
import ButtonSeeMore from '../../components/_main/buttons/ButtonSeeMore'
import RenderCardBlog from '../../components/_main/renders/RenderCardRecenteBlog'
import RenderSolutions from '../../components/_main/renders/RenderSolutions'
import ButtonBase from '../../components/_main/buttons/ButtonBase'
import RenderMember from '../../components/_main/renders/RenderMember'
import { NavLink } from '../../components/NavLink'
import RenderServices from '../../components/_main/renders/RenderServices'
import RenderProject from '../../components/_main/renders/RenderProject'
import RenderDeponents from '../../components/_main/renders/RenderDeponents'
import RenderPrice from '../../components/_main/renders/RenderPrices'

// Models
import { projectPropsType } from '../../models/types/projectTypes'
import { AnyNsRecord } from 'dns'

// Images

function Home() {
  const router = useNavigate()

  const [currentSlide, setCurrentSlide] = useState<number>(0)

  useEffect(() => {}, [])

  const date = new Date()

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex)
  }
  const handleTransitionEnd: React.TransitionEventHandler<HTMLElement> = (
    event: any
  ) => {
    const { target } = event
    target.classList.remove('slide-animation')
  }

  function solicitation() {}

  const navigateToExternalPage = (urlPage: string) => {
    window.location.href = urlPage
  }

  const responsive = {
    0: { items: 1 },
    250: { items: 2 },
    500: { items: 3 },
    750: { items: 4 },
    1000: { items: 5 }
  }

  const docSolutions = [
    {
      imgUrl: '/service/service1.png',
      title: 'Venda de diversos',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl: '/service/service2.png',
      title: 'Designer gráficos e identidade visual',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl: '/service/service3.png',
      title: 'Video e fotografia',
      icon: <AiFillCode size={36} />
    }
  ]
  const listSolutions = docSolutions.map((item, index) => (
    <RenderSolutions
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      icon={item.icon}
    />
  ))

  const docServices1 = [
    {
      imgUrl:
        'https://www.easydesign.com.br/wp-content/uploads/2022/01/desenvolvimento-de-sites-personalizados-1.jpg',
      title: 'Desenvolvimento de Websites',
      description:
        'Desenvolvimento e execução de estratégias de marketing digital para aumentar a visibilidade e o alcance da sua empresa.',
      icon: <img src="/icons/desenvolvedor-de-software.png" />,
      iconWhite: <img src="/icons/desenvolvedor-de-software-white.png" />
    },
    {
      imgUrl:
        'https://imgcom.masterd.es/_repos_/images/Cursos_Design_Grafico.jpg',
      title: 'Design Gráfico',
      description:
        'Criação de elementos visuais, como logotipos, banners, folhetos e materiais promocionais, para fortalecer a identidade visual da sua marca.',
      icon: <img src="/icons/consulta.png" />,
      iconWhite: <img src="/icons/consulta-white.png" />
    },
    {
      imgUrl:
        'https://informebrasil.com.br/wp-content/uploads/2022/01/aplicativos-45.jpg',
      title: 'Desenvolvimento de Aplicativos Mobile',
      description:
        'Oferecemos uma variedade das melhores estratégias de marketing para expandir seus negócios.',
      icon: <img src="/icons/campanha-digital.png" />,
      iconWhite: <img src="/icons/campanha-digital-white.png" />
    },
    {
      imgUrl:
        'https://www.makingnet.com.br/wp-content/uploads/2019/08/o-que-sao-links-patrocinados-1-1.jpg',
      title: 'Links Patrocinados',
      description:
        'Gerenciamento de campanhas de links patrocinados em plataformas como Google Ads, garantindo uma presença estratégica nos resultados de busca.',
      icon: <img src="/icons/campanha-digital.png" />,
      iconWhite: <img src="/icons/campanha-digital-white.png" />
    },
    {
      imgUrl:
        'https://www.paved.com/blog/wp-content/uploads/2022/03/email-marketing.png',
      title: 'Email profissional',
      description:
        'Criação e envio de campanhas de email marketing para fortalecer o relacionamento com os clientes e promover seus produtos ou serviços.',
      icon: <img src="/icons/campanha-digital.png" />,
      iconWhite: <img src="/icons/campanha-digital-white.png" />
    },
    {
      imgUrl:
        'https://neilpatel.com/wp-content/uploads/2019/07/consultoria-em-marketing-digital.jpeg',
      title: 'Marketing Digital',
      description:
        'Desenvolvimento e execução de estratégias de marketing digital para aumentar a visibilidade e o alcance da sua empresa.',
      icon: <img src="/icons/campanha-digital.png" />,
      iconWhite: <img src="/icons/campanha-digital-white.png" />
    }
  ]
  const listServices1 = docServices1.map((item, index) => (
    <RenderServices
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      description={item.description}
      icon={item.icon}
      iconWhite={item.iconWhite}
    />
  ))

  const docMemberTime = [
    {
      _id: 'g56rbe685j68r67',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team-02.jpg',
      name: 'Cristian Perry',
      role: 'Desenvolvedor',
      socialLinks: [
        {
          type: 'facebook',
          link: 'facebook'
        },
        {
          type: 'instagram',
          link: 'instagram'
        },
        {
          type: 'twitter',
          link: 'twitter'
        }
      ]
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team.jpg',
      name: 'Ana Mia Joice',
      role: 'Designer',
      socialLinks: [
        {
          type: 'facebook',
          link: 'facebook'
        },
        {
          type: 'instagram',
          link: 'instagram'
        },
        {
          type: 'twitter',
          link: 'twitter'
        }
      ]
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team-03.jpg',
      name: 'Luana Sofia',
      role: 'Analista',
      socialLinks: [
        {
          type: 'facebook',
          link: 'facebook'
        },
        {
          type: 'instagram',
          link: 'instagram'
        },
        {
          type: 'twitter',
          link: 'twitter'
        }
      ]
    }
  ]
  const listMemberTime = docMemberTime.map((item, index) => (
    <RenderMember key={index} memberTime={item} />
  ))

  const docClients = [
    {
      imgUrl: 'clients/graceminds.png',
      link: 'https://graceminds.com/'
    },
    {
      imgUrl: 'clients/cgapn.png',
      link: 'https://consuladoangolapontanegra.org/'
    },
    {
      imgUrl: 'clients/gusmapis.png',
      link: 'https://gusmapis.com/'
    },
    {
      imgUrl: 'clients/DIGITALONE.png',
      link: 'https://www.digital-one.co/'
    },
    {
      imgUrl: 'clients/pungo.png',
      link: 'https://jornalpungoandongo.ao/'
    },
    {
      imgUrl: 'clients/tvone.png',
      link: 'http://tvone.ao/'
    }
  ]
  const listarClients = docClients.map((item, index) => {
    return (
      <div key={index} className="clients">
        <NavLink href={item.link}>
          <img src={item.imgUrl} alt="" />
        </NavLink>
      </div>
    )
  })

  const docProjects: projectPropsType[] = [
    {
      _id: 'bqwjk89e8h8x2',
      nome: 'Projeto de Marketing Inteligente',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, natus numquam unde',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project01.jpg',
      link: '#',
      category: 'Marketing Inteligente',
      tags: ['Visão', 'Ideias']
    },
    {
      _id: 'cc87g3uie8c3dc3',
      nome: 'Projeto de Identidade visual',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, natus numquam unde',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project04.jpg',
      link: '#',
      category: 'Identidade visual',
      tags: ['Design', 'Identidade']
    },
    {
      _id: '34fc3g5344tgcdsu8d9',
      nome: 'Projeto de Consultoria',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, natus numquam unde',
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/project02.jpg',
      link: '#',
      category: 'Consultoria',
      tags: ['Ideias']
    }
  ]
  const listarProjects = docProjects.map((item, index) => {
    return <RenderProject project={item} key={index} />
  })

  const docDeponents = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/10/team-08.jpg',
      author: 'Aleesha Smith',
      deponents:
        'A Infetech é uma provedora de serviços de consultoria em TI e desenvolvimento de software.',
      numberStars: 5
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/10/team-07.jpg',
      author: 'Mike Hardson',
      deponents:
        'Ajudam organizações e empresas que não são de TI a melhorar o desempenho dos negócios.											',
      numberStars: 3
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/team06.jpg',
      author: 'Aleeshe Smith',
      deponents:
        'A Infetech é uma provedora de serviços de consultoria em TI e desenvolvimento de software.',
      numberStars: 4
    }
  ]
  const listarDeponents = docDeponents.map((item, index) => {
    return (
      <RenderDeponents
        key={index}
        imgUrl={item.imgUrl}
        author={item.author}
        deponents={item.deponents}
        numberStars={item.numberStars}
      />
    )
  })

  const newNotices = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-02-768x500.jpg',
      title: 'Os diferentes tipos de backups de dados',
      author: 'Eng. Rafael',
      comments: 0,
      datePub: date.toLocaleDateString()
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-01-768x501.jpg',
      title: 'Uma solução rápida para o problema',
      author: 'Eng. Raimundo',
      comments: 11,
      datePub: date.toLocaleDateString()
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-04-768x500.jpg',
      title: 'O que é Aumento de Pessoal?',
      author: 'Eng. Rafael',
      comments: 21,
      datePub: date.toLocaleDateString()
    }
  ]
  const listNewNotices = newNotices.map((item, index) => (
    <RenderCardBlog
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      author={item.author}
      comments={item.comments}
      datePub={item.datePub}
    />
  ))

  const docPrices = [
    {
      titlePlane: 'Plano Básico',
      descriptionPlane: 'Projetado para empresas com requisitos básicos de TI',
      icon: <SiOpenai />,
      price: '70.250',
      textPlaneInclude: 'Este plano básicos inclui:',
      serviceIncluded: [
        'Monitoramento do sistema 24/7',
        'Gerenciamento de segurança',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Plano Sliver',
      descriptionPlane: 'Projetado para empresas com requisitos médios de TI',
      icon: <TfiWorld />,
      price: '70.250',
      textPlaneInclude: 'Este plano sliver inclui:',
      serviceIncluded: [
        'Monitoramento do sistema 24/7',
        'Gerenciamento de segurança',
        'Gerenciamento de patches',
        'Suporte remoto'
      ],
      onClick: solicitation()
    },
    {
      titlePlane: 'Plano Profissional',
      descriptionPlane:
        'Projetado para empresas com requisitos profissional de TI',
      icon: <GiSpikesFull />,
      price: '70.250',
      textPlaneInclude: 'Este plano profissional inclui:',
      serviceIncluded: [
        'Monitoramento do sistema 24/7',
        'Gerenciamento de segurança',
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

  function goTo(path: string) {
    router(path)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ContainerHome>
      <div className="containerSwiper">
        <Swiper
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide className={currentSlide === 1 ? 'slide-animation' : ''}>
            <div className="containerDescription">
              <div className="tag" data-aos="fade-down">
                <BsFillPatchCheckFill />
                <span>Resultados de qualidade</span>
                <BsFillPatchCheckFill />
                <span>Taxa de sucesso</span>
              </div>
              <h1 className="title" data-aos="fade-down">
                Nos <strong>especializamos</strong> <br /> em ajudar empresas
              </h1>
              <span className="description" data-aos="fade-up">
                Está procurando maneiras de aumentar sua presença online e
                expandir seus negócios? Com nossos serviços de tecnologia
                personalizados, podemos ajudá-lo a alcançar seus objetivos!
              </span>

              <div data-aos="fade-up">
                <ButtonSeeMore
                  value={'Descubra mais'}
                  onClick={() => goTo(routsNameMain.home)}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-super-dark']}
                />
              </div>
            </div>

            <img className="shapeSlide" src="/backgrounds/shapeSlide.png" />
            <img className="bgSlide" src="/backgrounds/slide1.jpg" />
            <div className="shadow"></div>
          </SwiperSlide>

          <SwiperSlide className={currentSlide === 0 ? 'slide-animation' : ''}>
            <div className="containerDescription">
              <div className="tag" data-aos="fade-down">
                <div className="line" />
                <span>Soluções para seus negócios</span>
              </div>
              <h1 className="title" data-aos="fade-down">
                Expanda sua <br />
                presença <strong>online</strong>
              </h1>
              <span className="description" data-aos="fade-up">
                Alcance novos patamares de sucesso com nossos serviços de
                tecnologia personalizados.
              </span>

              <div data-aos="fade-up">
                <ButtonSeeMore
                  value={'Descubra mais'}
                  onClick={() => goTo(routsNameMain.home)}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-super-dark']}
                />
              </div>
            </div>

            <img className="shapeSlide" src="/backgrounds/shapeSlide.png" />
            <img className="bgSlide" src="/backgrounds/slide2.jpg" />
            <div className="shadow"></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="aboutUs">
        <div className="containerContent">
          <div className="containerAboutUs">
            <div className="contentLeft">
              <div className="containerImagesTop">
                <div className="containerImg1" data-aos="fade-right">
                  <img src="images/about01.jpg" alt="" />
                </div>
                <div className="containerImg2">
                  <img src="it_logo.png" alt="Logo Tchossy" />
                </div>
              </div>

              <div className="containerImagesBottom">
                <div className="containerImg" data-aos="fade-left">
                  <img src="images/about02.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="contentRight" data-aos="fade-up">
              <div className="containerTitleSection">
                <h4>Sobre nossa empresa</h4>
                <h1>
                  Somos Parceiros de Suas <strong>Inovações</strong>{' '}
                </h1>
              </div>

              <p>
                Se você está procurando uma solução abrangente para aumentar a
                presença online da sua empresa e alcançar um público mais amplo,
                você veio ao lugar certo.
              </p>

              <div className="rowCheck">
                <ul>
                  <li>
                    <BsFillCheckCircleFill /> Desenvolvimento web e mobile de
                    qualidade
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Design Gráfico
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Video e fotografia
                  </li>
                </ul>

                <ul>
                  <li>
                    <BsFillCheckCircleFill /> Mensagens Automatizadas
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Links Patrocinados
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Email Profissional
                  </li>
                </ul>
              </div>

              <div className="containerIconDescription">
                <div className="iconDescription">
                  <div className="containerIcon">
                    <AiOutlineAreaChart />
                  </div>
                  <span>
                    Crescimento dos <br /> Negócios
                  </span>
                </div>

                <div className="iconDescription">
                  <div className="containerIcon">
                    <GiAcousticMegaphone />
                  </div>
                  <span>
                    Solução de <br /> Marketing
                  </span>
                </div>
              </div>

              <div>
                <ButtonSeeMore
                  value={'Consulte Mais informação'}
                  arrowIsVisible={true}
                  onClick={() => goTo(routsNameMain.home)}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-super-dark']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions ">
        <div className="containerContent">
          <div className="contentSolutions" data-aos="fade-right">
            {listSolutions}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="containerContent">
          <div className="containerServices">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>O que estamos oferecendo aos nossos clientes</h4>
                    <h1 style={{ color: '#020202' }}>
                      Negociação em todos os serviços profissionais
                    </h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p style={{ color: '#353535' }}>
                  Nós oferecemos serviços especializados em tecnologia para
                  ajudar sua empresa a crescer e se destacar na internet.
                  Deixe-nos ajudá-lo a alcançar o sucesso que você merece na era
                  digital.
                </p>
              </div>
            </div>

            <div className="containerColumnServices">
              <div className="containerRowServices" data-aos="fade-left">
                {listServices1}
              </div>

              <br />
              <br />
              <br />

              <div className="containerRowServices">
                <ButtonSeeMore
                  value={'Consulte Mais informação'}
                  arrowIsVisible={true}
                  onClick={() => goTo(routsNameMain.home)}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-super-dark']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="weAreReady">
        <div className="contentWeAreReady">
          <div className="coverBackground"></div>

          <div className="containerImg">
            <img
              src="https://technerve.my/wp-content/uploads/2020/07/istock-827896866.jpg"
              alt=""
            />
          </div>

          <div className="contentInfo">
            <h1>Estamos Prontos, Desenvolva Seu Site!</h1>

            <div>
              <ul>
                <li>
                  <BsFillCheckCircleFill /> As soluções de TI são criadas pelos
                  melhores especialistas
                </li>
                <li>
                  <BsFillCheckCircleFill /> Receba consultoria gratuita para
                  qualquer tipo de solução de TI
                </li>
                <li>
                  <BsFillCheckCircleFill /> Suporte 24 horas por dia, 7 dias por
                  semana para parceiros durante o processo.
                </li>
              </ul>

              <ButtonBase
                value={'CRIAR AGORA'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-gray']}
                colorSecondary={defaultTheme.colors['brand-primary']}
                textColor={defaultTheme.colors['base-text']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="containerContent">
          <div className="containerProjects">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <span>Projectos</span>
                    <h4>Nossos Projetos Concluídos</h4>
                    <h1>Conheça alguns dos nossos projetos</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p>
                  Existem vários projetos bem-sucedidos, desde consultoria em
                  estratégia de TI até o desenvolvimento end-to-end de soluções
                  escaláveis ​​feitas por nossos criativos e experientes
                  profissionais.
                </p>
              </div>
            </div>

            <div className="containerProjectsRow" data-aos="fade-up">
              {listarProjects}
            </div>

            <div className="containerBottom">
              <ButtonSeeMore
                value={'Ver mais projetos'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['brand-primary']}
                colorSecondary={defaultTheme.colors['brand-super-dark']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="freeConsulting">
        <div className="containerLinesLeft" data-aos="fade-up">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <div className="containerLinesRight" data-aos="fade-down">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="containerLinesRightInvert">
          <div className="line1"></div>
        </div>

        <div className="containerContent">
          <div className="contentFreeConsulting">
            <div data-aos="fade-right">
              <h1>Consultoria em Marketing digital.</h1>
              <h3>
                Receba um diagnóstico de tudo que envolve a presença online da
                sua marca. Nossos especialistas estão disponíveis para lhe
                ajudar a obter bons resultados com estratégias de Marketing
                Digital.
              </h3>
            </div>

            <div data-aos="fade-left">
              <ButtonSeeMore
                value={'Primeira consultoria gratuita'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="ourExperts">
        <div className="containerImg">
          <img src="backgrounds/bg-lines-main.png" alt="" />
        </div>

        <div className="containerContent">
          <div className="containerOurExperts">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>Nossos especialistas</h4>
                    <h1>Conheça nosso membro da equipe profissional</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p>
                  Conheça uma equipe de profissionais experientes e conhecedores
                  que deixam nossos clientes satisfeitos com sua capacidade de
                  criar as melhores soluções de TI para melhorar o desempenho
                  dos cliente
                </p>
              </div>
            </div>

            <div className="containerMemberExperts">{listMemberTime}</div>
          </div>
        </div>
      </section>
      */}

      {/* Mensagens automatizadas */}
      <section className="ourExperts">
        <div className="containerImg">
          <img src="backgrounds/bg-lines-main.png" alt="" />
        </div>

        <div className="containerContent">
          <div className="containerOurExperts">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <span>Mensagens</span>
                    <h4>Mensagens automatizadas</h4>
                    <h1>
                      Desperte a eficiência da sua comunicação com eficácia.
                    </h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p>
                  Simplifique o seu processo de comunicação e aumente a
                  eficiência da sua empresa. Experimente agora mesmo a
                  conveniência e o poder da Mensagem Automatizada! Com a nossa
                  tecnologia avançada, você pode automatizar o envio de
                  mensagens personalizadas, agendamentos, lembretes e muito
                  mais.
                </p>
              </div>
            </div>

            <div className="section1">
              <div className="descriptionSection">
                <div className="contentDescriptions">
                  <p>
                    Sente-se e relaxe, o chatbot cuidará de todas as conversas
                    de seus clientes e amigos, respondendo às suas perguntas
                    instantaneamente. Aproveite a praticidade da nossa solução
                    de Mensagem Automatizada e nunca mais perca uma oportunidade
                    de se comunicar com seus clientes.
                  </p>

                  <ul>
                    <li>
                      <BsFillCheckCircleFill />
                      <p>
                        <strong>Vendas Personalizadas Simplificadas:</strong>
                        <br />
                        Envie funis de vendas personalizados e ofertas
                        automáticas para cada cliente, simplificando suas
                        estratégias de vendas e maximizando os resultados;
                      </p>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <p>
                        <strong>Vendas Inteligentes:</strong>
                        <br />
                        Conquiste mais clientes e aumente suas vendas com fluxos
                        automatizados, proporcionando interações relevantes e
                        oportunas com seus leads;
                      </p>
                    </li>
                    <li>
                      <BsFillCheckCircleFill />
                      <p>
                        <strong>Automação de Vendas Simplificada:</strong>
                        <br /> Simplifique seu processo de vendas com fluxos
                        automatizados, enviando sequências personalizadas e
                        aumentando sua eficiência no fechamento de negócios.
                      </p>
                    </li>
                  </ul>

                  <div className="containerBottom">
                    <ButtonSeeMore
                      value={'Ver planos'}
                      onClick={() => goTo(routsNameMain.service.chatbot)}
                      colorBase={defaultTheme.colors['brand-primary']}
                      colorSecondary={defaultTheme.colors['brand-super-dark']}
                    />
                  </div>
                </div>
              </div>

              <img
                data-aos="fade-up-left"
                src="https://mtalkz.com/wp-content/uploads/2022/09/Whatsapp_chatbot_integration_hero1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="saveTime">
        <div className="containerLinesLeft">
          <div className="line1"></div>
        </div>

        <div className="coverBackground"></div>

        <div className="containerContent">
          <div className="containerSaveTime">
            <div className="containerLeft">
              <div className="containerPlay">
                <span>
                  <BsFillPlayFill />
                </span>
              </div>

              <div className="containerContent">
                <h6>Você precisa de uma solução?</h6>
                <h1 data-aos="fade-up">
                  Economize tempo e dinheiro com uma das principais agências de
                  soluções
                </h1>
              </div>
            </div>

            <div className="containerRight">
              <div className="containerCalculations" data-aos="flip-left">
                <div className="containerIcon">
                  <MdOutlineWork />
                </div>

                <div>
                  <h3>Com experiência</h3>
                  <p>3 anos de experiência</p>
                </div>
              </div>

              <div className="containerCalculations" data-aos="flip-left">
                <div className="containerIcon">
                  <MdOutlineSupportAgent />
                </div>

                <div>
                  <h3>Conveniência</h3>
                  <p>Suporte a qualquer hora 24/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourBlog">
        <div className="containerContent">
          <div className="containerOurBlog">
            <div className="containerTitleSection">
              <span>Posts</span>
              <h4>O que está acontecendo</h4>
              <h1>Postagens recentes</h1>
            </div>

            <div className="containerRow">{listNewNotices}</div>
          </div>
        </div>
      </section>

      <section className="ourClients">
        <div className="bgClients"></div>

        <div className="containerContent">
          <div className="containerClientsRow" data-aos="fade-up">
            <AliceCarousel
              mouseTracking
              items={listarClients}
              responsive={responsive}
              autoPlay
              infinite
              autoPlayInterval={1000}
              animationDuration={1000}
            />
          </div>
        </div>
      </section>

      <section className="prices">
        <div className="containerContent">
          <div className="containerPrices">
            <div className="containerTitleSection">
              <div>
                <span>Preços</span>
                <h4>Nossos planos de preços</h4>
                <h1>Planos de preços transparentes adequados para você</h1>
              </div>
            </div>

            <div className="containerPricesRow" data-aos="fade-up">
              {listarPrices}
            </div>
          </div>
        </div>
      </section>

      <section className="exploreUs">
        <div className="containerLinesLeft" data-aos="fade-up">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <div className="containerLinesRight" data-aos="fade-down">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="containerLinesRightInvert">
          <div className="line1"></div>
        </div>

        <div className="containerContent">
          <div className="contentExploreUs">
            <div className="rowExploreUs">
              <SiWechat />

              <div data-aos="fade-right">
                <h3>Estamos aqui para ajudar a crescer o seu negócio.</h3>
                <h1>Procurando as melhores soluções de TI?</h1>
              </div>
            </div>

            <div data-aos="fade-left">
              <ButtonSeeMore
                value={'Saber mais'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>
    </ContainerHome>
  )
}

export default Home
