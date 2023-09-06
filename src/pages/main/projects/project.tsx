import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ContainerBlog,
  ContainerProject
} from '../../../styles/pages/_main/ProjectsDetailsStyles'

// Routs

// Components
import HeroSection from '../../../components/_main/HeroSection'
import { useParams } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function Project() {
  const param = useParams()

  const [numComment, setNumComment] = useState(2)

  const idPath = param.projectId
  const titlePath = param.projectName

  const docPhotosProject = [
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-05.jpg'
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-06.jpg'
    }
  ]
  const listarPhotosProject = docPhotosProject.map((item, index) => {
    return (
      <div key={index} className="photosProject">
        <img src={item.imgUrl} alt="" />
      </div>
    )
  })

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerBlog>
      <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title={titlePath}
        base1="Projetos"
        base2={titlePath}
      />

      <div className="container">
        <ContainerProject>
          <div className="post">
            <div className="containerRowImg">
              <div className="containerImg">
                <img
                  src={
                    'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/04/blog-06.jpg'
                  }
                  alt={'news'}
                  width="400"
                  height="300"
                />
              </div>

              <div className="containerDescriptionProject">
                <div className="itemDescriptionProject">
                  <span className="label">Clients:</span>
                  <span className="value">Mike Hardson</span>
                </div>

                <div className="itemDescriptionProject">
                  <span className="label">Category:</span>
                  <span className="value">IT, Technology</span>
                </div>

                <div className="itemDescriptionProject">
                  <span className="label">Date:</span>
                  <span className="value">03/16/2022</span>
                </div>

                <div className="itemDescriptionProject">
                  <span className="label">Website</span>
                  <a href="www.domain.com" className="value">
                    www.domain.com
                  </a>
                </div>

                <div className="itemDescriptionProject">
                  <span className="label">Location</span>
                  <span className="value">New York, USA</span>
                </div>
              </div>
            </div>

            <div className="containerInfProject">
              <div className="headerTotal">
                <strong>
                  Conteúdo sem dados compatíveis com versões anteriores.
                </strong>
              </div>

              <div className="containerAllSectionPost">
                <div className="descriptionPost">
                  <h3>Experiências tecnológicas que nos conectam</h3>

                  <p>
                    É um fato estabelecido há muito tempo que um leitor se
                    distrairá com o conteúdo legível de uma página ao olhar para
                    seu layout. O objetivo de usar Lorem Ipsum O homem, que está
                    em condição estável no hospital, tem “ferimentos
                    potencialmente capazes de mudar sua vida” após o ataque
                    noturno em Garvagh, Condado de Lono Donderry. Ele foi
                    baleado nos braços e nas pernas.” Que tipo de homem acharia
                    aceitável submeter uma jovem a esse nível de brutalidade e
                    violência?
                    <br />
                    <br />
                    “Toda criança tem o direito de se sentir segura e protegida
                    em sua própria casa – como essa pobre criança vai dormir
                    esta noite ou nas próximas noites? Quais serão os efeitos a
                    longo prazo sobre ela?”
                  </p>

                  <ul className="descriptionPostList">
                    <li>
                      <BsFillCheckCircleFill /> Trazer novas soluções de TI para
                      o mercado
                    </li>
                    <li>
                      <BsFillCheckCircleFill /> Incluir a lista das 100 melhores
                      empresas de TI
                    </li>
                    <li>
                      <BsFillCheckCircleFill /> Nossa empresa tem profissionais
                      capacitados de TI.
                    </li>
                  </ul>

                  <div className="containerPhotosRow">
                    {listarPhotosProject}
                  </div>
                </div>

                <div className="descriptionPost">
                  <h3>Experiências tecnológicas que nos conectam</h3>

                  <p>
                    É um fato estabelecido há muito tempo que um leitor se
                    distrairá com o conteúdo legível de uma página ao olhar para
                    seu layout. O objetivo de usar Lorem Ipsum O homem, que está
                    em condição estável no hospital, tem “ferimentos
                    potencialmente capazes de mudar sua vida” após o ataque
                    noturno em Garvagh, Condado de Lono Donderry. Ele foi
                    baleado nos braços e nas pernas.” Que tipo de homem acharia
                    aceitável submeter uma jovem a esse nível de brutalidade e
                    violência?
                    <br />
                    <br />
                    “Toda criança tem o direito de se sentir segura e protegida
                    em sua própria casa – como essa pobre criança vai dormir
                    esta noite ou nas próximas noites? Quais serão os efeitos a
                    longo prazo sobre ela?”
                  </p>

                  <div className="containerPhotosRow">
                    {listarPhotosProject}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerProject>
      </div>
    </ContainerBlog>
  )
}

export default Project
