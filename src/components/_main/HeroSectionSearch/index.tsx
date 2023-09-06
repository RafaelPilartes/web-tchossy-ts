import { BiSearchAlt } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { TfiWorld } from 'react-icons/tfi'

import { routsNameMain } from '../../../data/routsName'
import { defaultTheme } from '../../../themes/default'
import ButtonBase from '../buttons/ButtonBase'
import { HeroContainerStyles } from './styles'

interface IHeroSectionSearch {
  backgroundImage: string
}

function HeroSectionSearch({ backgroundImage }: IHeroSectionSearch) {
  return (
    <HeroContainerStyles backgroundImage={backgroundImage}>
      <div className="containerMaxWidth">
        <div className="containerTitle">
          <h1>Registe o seu domínio</h1>
          <h2>E garanta o endereço do seu site</h2>
        </div>

        <div className="containerInput">
          <TfiWorld />
          <input
            type="text"
            placeholder="Digite o domínio desejado"
            name=""
            id=""
          />
          <select name="" id="">
            <option value="">.com</option>
            <option value="">.ao</option>
            <option value="">.co</option>
            <option value="">.co.ao</option>
            <option value="">.info</option>
            <option value="">.org</option>
          </select>

          <button>
            <BiSearchAlt />
          </button>
        </div>

        <div className="containerTypesDomain">
          <div className="typeDomain">
            <p>
              <span className="color1">.</span>ao
            </p>
            <span>10.500 Kz</span>
          </div>
          <div className="typeDomain">
            <p>
              <span className="color2">.</span>com
            </p>
            <span>10.500 Kz</span>
          </div>
          <div className="typeDomain">
            <p>
              <span className="color3">.</span>net
            </p>
            <span>10.500 Kz</span>
          </div>
          <div className="typeDomain">
            <p>
              <span className="color4">.</span>info
            </p>
            <span>10.500 Kz</span>
          </div>
          <div className="typeDomain">
            <p>
              <span className="color5">.</span>tech
            </p>
            <span>10.500 Kz</span>
          </div>
        </div>

        <div className="containerBaseInfo">
          <p>
            Escolha um nome disponível para ser usado como o endereço do seu
            site!
          </p>

          <span>
            Oferta: Assine um plano de hospedagem de sites e registre o domínio
            gratuitamente
          </span>
        </div>
      </div>
      <div className="shadow"></div>
    </HeroContainerStyles>
  )
}

export default HeroSectionSearch
