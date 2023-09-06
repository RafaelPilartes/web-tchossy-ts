import { useEffect } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Icons
import { ContainerAbout } from '../../styles/pages/_main/AboutStyles'
import {
  BsCheck2Circle,
  BsFillCheckCircleFill,
  BsFillCloudCheckFill,
  BsPatchCheckFill
} from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { AiOutlineAreaChart, AiOutlineTeam } from 'react-icons/ai'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'

// Theme
import { defaultTheme } from '../../themes/default'

// Styles

// Component
import HeroSection from '../../components/_main/HeroSection'
import ButtonSeeMore from '../../components/_main/buttons/ButtonSeeMore'
import { routsNameMain } from '../../data/routsName'
import CountUp from 'react-countup'
import { NavLink } from '../../components/NavLink'

// Images
import imgLittleLogo from '../../../public/it_logo.png'
import imgBuildora from '../../../public/clients/buildora.png'
import imgKa from '../../../public/clients/ka.jpg'
import imgPungo from '../../../public/clients/pungo.png'
import imgTvone from '../../../public/clients/tvone.png'
import imgProcess1 from '../../../public/process/process1.png'
import imgProcess2 from '../../../public/process/process2.png'
import imgProcess3 from '../../../public/process/process3.png'
import imgProcess4 from '../../../public/process/process4.png'
import imgProcess5 from '../../../public/process/process5.png'
import imgProcess6 from '../../../public/process/process6.png'
import { useNavigate } from 'react-router-dom'
import { GiAcousticMegaphone } from 'react-icons/gi'

function About() {
  const router = useNavigate()

  const NumClients = 7
  const numProjects = 16
  const numYears = 2
  const numExperts = 4

  const docClients = [
    {
      imgUrl: imgBuildora,
      link: '#'
    },
    {
      imgUrl: imgKa,
      link: '#'
    },
    {
      imgUrl: imgPungo,
      link: '#'
    },
    {
      imgUrl: imgTvone,
      link: '#'
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

  function goTo(path: string) {
    router(path)
  }

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerAbout>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title="Sobre nós"
        base1="Sobre"
      />

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
                  Sempre entregamos <strong>mais</strong> do que você espera
                </h1>
              </div>

              <p>
                Bem-vindo à nossa empresa especializada em ajudar empresas a
                crescer através da tecnologia. Nós oferecemos uma ampla gama de
                serviços, incluindo marketing, criação de website,
                desenvolvimento de aplicativos móveis, design gráfico,
                identidade visual, links patrocinados e muito mais.
              </p>
              <p>
                Então, se você está pronto para levar sua empresa para o próximo
                nível e alcançar o sucesso que você merece, entre em contato
                conosco hoje mesmo e vamos começar!
              </p>

              <div className="rowCheck">
                <ul>
                  <li>
                    <BsFillCheckCircleFill /> Destacar sua marca
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Alcançamos os seus objetivos de
                    crescimento
                  </li>
                </ul>

                <ul>
                  <li>
                    <BsFillCheckCircleFill /> Soluções personalizadas
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Website profissional e atraente
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

      <section className="countUp">
        <div className="containerContent">
          <div className="containerCountUpRow">
            <div className="contentCountUp">
              <div className="containerIcon">
                <HiOutlineUsers />
              </div>

              <div className="numbers">
                <CountUp
                  start={0}
                  end={NumClients}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>
                <span> +</span>
              </div>
              <h3>Cliente ativos</h3>
            </div>

            <div className="contentCountUp">
              <div className="containerIcon">
                <BsFillCloudCheckFill />
              </div>

              <div className="numbers">
                <CountUp
                  start={0}
                  end={numProjects}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>
                <span>+</span>
              </div>
              <h3>Projetos Concluídos</h3>
            </div>

            <div className="contentCountUp">
              <div className="containerIcon">
                <BsPatchCheckFill />
              </div>

              <div className="numbers">
                <CountUp
                  start={0}
                  end={numYears}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>

                <span>+</span>
              </div>
              <h3>Anos Gloriosos</h3>
            </div>

            <div className="contentCountUp">
              <div className="containerIcon">
                <AiOutlineTeam />
              </div>

              <div className="numbers">
                <CountUp
                  start={0}
                  end={numExperts}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>

                <span>+</span>
              </div>
              <h3>Equipe Profissional</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="containerContent">
          <div className="containerProcess">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>Como processamos os nossos projetos</h4>
                    <h1 style={{ color: '#000000' }}>Nossos processos</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p style={{ color: '#353535' }}>
                  Visando facilitar o trabalho, assim como localizar de modo
                  sequencial as atividades. As listas apresentadas para cada
                  parte, é apenas um esboço dos seus principais pontos.
                </p>
              </div>
            </div>

            <div className="containerColumnProcess">
              <div className="containerRowProcess">
                <div className="itemProcess" data-aos="fade-right">
                  <img src={imgProcess1} alt="imgProcess1" />

                  <div className="descriptionProcess">
                    <h2>Assessment (avaliação)</h2>
                    <p>
                      A ideia é que o Tchossy possa gerar um diagnóstico com uma
                      visão 360º dos aspectos culturais, técnicos,
                      organizacionais e de negócios.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-left">
                  <img src={imgProcess2} alt="imgProcess2" />

                  <div className="descriptionProcess">
                    <h2>Processos de planeamento</h2>
                    <p>
                      Apresentaremos os detalhes das etapas, quais metodologias
                      serão utilizadas em cada uma delas, ferramentas aplicadas
                      e a descrição de como as etapas ocorrerão.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-right">
                  <img src={imgProcess3} alt="imgProcess3" />

                  <div className="descriptionProcess">
                    <h2>Investimento</h2>
                    <p>
                      Colocar de forma clara o valor de investimento referente à
                      projeto proposto. Este valor pode ainda ser dividido
                      conforme foi planejado o projeto.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-left">
                  <img src={imgProcess4} alt="imgProcess4" />

                  <div className="descriptionProcess">
                    <h2>Responsabilidades</h2>
                    <p>
                      Definimos desde o início quais são as nossas
                      responsabilidades e quais são as responsabilidades do
                      cliente sucesso do projeto.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-right">
                  <img src={imgProcess5} alt="imgProcess5" />

                  <div className="descriptionProcess">
                    <h2>Execução</h2>
                    <p>
                      Integra a equipe e outros recursos para produzir as
                      entregas e informações sobre o desempenho do respectivo
                      projeto.
                    </p>
                  </div>
                </div>

                <div className="itemProcess" data-aos="fade-left">
                  <img src={imgProcess6} alt="imgProcess6" />

                  <div className="descriptionProcess">
                    <h2>Encerramento</h2>
                    <p>
                      Finaliza todas as atividades de todos os grupos de
                      processos de gestão do projeto, visando completar
                      formalmente o respectivo projeto (ou uma fase dele) e
                      formalizar a aceitação do produto, serviço ou resultado
                      para o qual ele foi dedicado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourClients">
        <div className="containerContent">
          <div className="containerClients">
            <div className="containerHeader">
              <div className="containerLeft">
                <div className="containerTitleSection">
                  <div>
                    <h4>Nossos clientes</h4>
                    <h1>Conheça nosso clientes</h1>
                  </div>
                </div>
              </div>

              <div className="containerRight" data-aos="fade-left">
                <p>
                  Amamos ajudar pessoas e negócios a crescerem. Apostamos na
                  excelência para execução dos nossos serviços.
                </p>
              </div>
            </div>

            <div className="containerClientsRow" data-aos="fade-up">
              {listarClients}
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
            <div data-aos="fade-right">
              <h3>Estamos aqui para ajudar a crescer o seu negócio.</h3>
              <h1>Procurando as melhores soluções de negócios de TI?</h1>
            </div>

            <div data-aos="fade-left">
              <ButtonSeeMore
                value={'Obter solução'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>
    </ContainerAbout>
  )
}

About.layout = RootLayoutMain

export default About
