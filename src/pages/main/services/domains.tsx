import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ServiceDomainStyles,
  ContainerServiceDomain
} from '../../../styles/pages/_main/ServiceDomainStyles'
import HeroSectionSearch from '../../../components/_main/HeroSectionSearch'
import RenderDomain from '../../../components/_main/renders/RenderDomain'
import ButtonBase from '../../../components/_main/buttons/ButtonBase'
import { defaultTheme } from '../../../themes/default'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import FAQ from '../../../components/_main/renders/renderFAQ'
import RenderBenefits from '../../../components/_main/renders/RenderSolutions'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'

// Routs

// Components

function Domains() {
  const domainsData = [
    {
      imgDomain:
        'https://www.angohost.ao/templates/website/Modern/images/tldlogos/ao.jpg',
      nameDomain: '.ao',
      descriptionDomain:
        'O domínio .AO é utilizado para empresa angolanas em geral, tais como loja virtual, sites de notícias, curso à distância e outros.',
      priceDomain: 10200
    },
    {
      imgDomain:
        'https://www.angohost.ao/templates/website/Modern/images/tldlogos/com.jpg',
      nameDomain: '.com',
      descriptionDomain:
        'O domínio .COM é utilizado por qualquer empresa ou negócios.',
      priceDomain: 11500
    },
    {
      imgDomain:
        'https://s3.ca-central-1.amazonaws.com/hover-assets/images/logos/studio-domain-logo.png',
      nameDomain: '.studio',
      descriptionDomain:
        'O domínio .STUDIO é utilizado por estúdios de beleza, música, fotografia, entre outros',
      priceDomain: 13000
    },
    {
      imgDomain:
        'https://www.angohost.ao/templates/website/Modern/images/tldlogos/net.jpg',
      nameDomain: '.net',
      descriptionDomain:
        'O domínio .NET é bastante versátil e por ser utilizado por sites de notícias, desenvolvedores e demais profissionais da web.',
      priceDomain: 12000
    },
    {
      imgDomain:
        'https://www.angohost.ao/templates/website/Modern/images/tldlogos/co.jpg',
      nameDomain: '.co',
      descriptionDomain:
        'O domínio .CO é utilizado por qualquer companhia em geral',
      priceDomain: 27500
    },
    {
      imgDomain:
        'https://www.angohost.ao/templates/website/Modern/images/tldlogos/info.jpg',
      nameDomain: '.info',
      descriptionDomain:
        'O domínio .INFO é utilizado para fins comerciais e instituições como museus e bibliotecas escolhem esse domínio para os seus sites.',
      priceDomain: 13000
    }
  ]
  const listDomains = domainsData.map((item, index) => {
    return (
      <RenderDomain
        imgDomain={item.imgDomain}
        descriptionDomain={item.descriptionDomain}
        nameDomain={item.nameDomain}
        priceDomain={item.priceDomain}
        key={index}
      />
    )
  })

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

  const [faqs, setFaqs] = useState([
    {
      question: 'O que é domínio?',
      answer: `Domínio, nada mais é que o nome técnico usado para se referir ao endereço de um site ou loja virtual.

        Um domínio é composto por um nome + uma extensão, formando um endereço. Exemplo: hostnet.com.br.
        
        Este endereço será usado pelos visitantes para acessarem o seu site ou será exibido nos resultados de pesquisa no Google, quando alguém buscar sobre determinado assunto que tenha relação com o seu negócio.`,
      open: true
    },
    {
      question: 'O que é registro de domínio?',
      answer: `Registro de Domínio é o serviço que cuida da administração dos endereços dos sites, que envolve o registro de novos nomes e a renovação anual dos nomes já registrados.

      Existem órgãos nacionais e internacionais que regulamentam os endereços dos sites. A Hostnet é homologada pelo Registro.br e credenciada nos principais órgãos do setor para comercializar domínios.`,
      open: false
    },
    {
      question: 'O que são extensões de domínio?',
      answer: `Extensões de Domínios, também chamadas de TLD (Top Level Domains ou Domínio de Nível Superior), funcionam como uma nomenclatura para designar os tipos de segmento ou regiões em que o site atua.

      As extensões mais conhecidas são as .COM e .COM.BR, mas existem diversas outras disponíveis no mundo. Elas são dividas em duas principais categorias, são elas Generic Top-Level Domain (GTLD) e Country Code Top-Level Domain (ccTLD).`,
      open: false
    },
    {
      question:
        'Qual a diferença entre hospedagem de sites e registro de domínios?',
      answer: `Hospedagem de sites e registro de domínio são dois serviços diferentes que funcionam de forma integrada. Você precisará de ambos para publicar o seu site na Internet.

      A hospedagem de sites é o serviço que armazena os arquivos e códigos. O registro de domínio é o serviço que fornece um endereço para que o visitante acesse o site.
      
      A hospedagem é "casa" do seu site, enquanto o domínio é a "estrada" que leva o visitante até lá.`,
      open: false
    },
    {
      question: 'como escolher um bom domínio para registrar?',
      answer: `Dicas de ouro para registrar um bom domínio para o seu site:

      1. Antes de tudo, pense primeiro: Qual é a sua marca? Qual é o seu produto ou serviço a ser oferecido? Quais são os termos que os usuários mais buscam em relação à sua marca?
      2. Use nomes que sejam fáceis de escrever em português e memorizar. Se a sua marca tem um nome “difícil”, registre-o (para proteção da sua marca) mas considere o registro de outros domínios que apontem para o mesmo site.
      3. Evite usar nomes muito curtos, ou siglas. Há uma grande chance dessa sigla já estar registrada.
      4. Evite os nomes muito longos. Elas exigem que o usuário decore tudo e facilmente se esqueça. Use nomes com no máximo 12 caracteres.
      5. Evite letras repetidas. Dificulta a grafia do nome.
      6. Evite cacofonias, que são palavras que “soam mal” aos nossos ouvidos. A sonoridade do nome tem que ser boa. Escreva o nome pensado num papel e leia-o em voz alta, para 8. verificar se a sonoridade do nome proposto é boa.
      7. Use palavras-chave que tem relação com o seu negócio. Acesse o site Google Trends e veja se as palavras relacionadas com o seu negócio estão “em alta”, e monte um domínio que faça uso dessas palavras.
      8. Veja se esse nome está disponível nas redes sociais, como Instagram, Facebook, Twitter e outros. Assim, você terá um nome único para tudo, tanto para o domínio do seu site 
      quanto para os seus usuários nas redes sociais, o que facilita muito para todo mundo.
      9. Registre o domínio criado com várias extensões (sufixos). Por exemplo, se você registrar comocriarmeusite.com.br, cogite registrar também comocriarmeusite.com e comocriarmeusite.net.
      10. Construa um site relacionado a esse domínio que você criou.
      `,
      open: false
    }
  ])
  const toggleFAQ = (index: any) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }

        return faq
      })
    )
  }
  const listFAQs = faqs.map((faq, index) => (
    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
  ))

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ServiceDomainStyles>
      <HeroSectionSearch backgroundImage="https://www.menosfios.com/wp-content/uploads/2020/07/INFOSI-AO.jpg" />

      <ContainerServiceDomain>
        <div className="containerSectionMaxWidth">
          <div className="containerHeader">
            <div className="containerLeft">
              <div className="containerTitleSection">
                <div>
                  <h4>Conheça as extensões disponíveis</h4>
                  <h1>Registre o seu domínio agora</h1>
                </div>
              </div>
            </div>

            <div className="containerRight" data-aos="fade-left">
              <p style={{ color: '#bbbbbb' }}>
                Escolha o nome perfeito para o seu negocio e garanta a
                visibilidade e posicionamentos nos motores de busca da Google!
              </p>
            </div>
          </div>

          <section className="section1">{listDomains}</section>
        </div>

        <section className="weAreReady">
          <div className="contentWeAreReady">
            <div className="coverBackground"></div>

            <div className="contentInfo">
              <div className="containerIntro">
                <h2>Registrar o domínio e o 1º passo para ter</h2>
                <h1>Site, Loja virtual e E-mail profissional!</h1>
              </div>

              <p>
                O Domínio é o endereço do seu site na Internet, ou seja, o nome
                que você vai registrar para que seus clientes possam te
                encontrar e se comunicar com você pela Internet.
              </p>

              <ButtonBase
                value={'Consultar disponibilidade'}
                onClick={() => null}
                colorBase={defaultTheme.colors['base-gray']}
                colorSecondary={defaultTheme.colors['brand-pink']}
                textColor={defaultTheme.colors['base-black']}
              />
            </div>
          </div>
        </section>

        {/* 
        <section className="yourBusiness">
          <div className="descriptionSection">
            <div>
              <h1 data-aos="fade-up">
                Dê vida às suas <br /> <strong>ideias e alavanque</strong> seu
                negócio
              </h1>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                illum beatae debitis iste soluta eos a, dicta obcaecati iusto in
                harum velit rerum excepturi atque hic vero molestiae itaque
                blanditiis.
              </p>
            </div>

            <div className="containerRowBenefices">
              <div className="containerBenefits">{listBenefits}</div>

              <img
                className="illustrationW"
                src="https://www.hostnet.com.br/wp-content/uploads/2021/08/img-03.png"
                alt=""
              />
            </div>
          </div>
        </section> 
        */}

        <div className="containerSectionMaxWidth">
          <div className="containerHeader">
            <div className="containerLeft">
              <div className="containerTitleSection">
                <div>
                  <h4>O que é registro de domínio?</h4>
                  <h1>Perguntas frequentes sobre os serviços se domínio</h1>
                </div>
              </div>
            </div>

            <div className="containerRight" data-aos="fade-left">
              <p>
                Essas são algumas da perguntas que recebemos frequentemente
                pelos nossos cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="faqs">{listFAQs}</div>
      </ContainerServiceDomain>
    </ServiceDomainStyles>
  )
}

export default Domains
