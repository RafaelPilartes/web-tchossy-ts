import { IoIosArrowForward } from 'react-icons/io'

import { routsNameMain } from '../../../data/routsName'
import { defaultTheme } from '../../../themes/default'
import ButtonBase from '../buttons/ButtonBase'
import { HeroContainerStyles } from './styles'

interface IHeroSectionPage {
  backgroundImage: string
  shadow?: boolean
  title?: string
  description?: string
  titleBtn?: string
  clickButton?: () => void
}

function HeroSectionPage({
  backgroundImage,
  title,
  description,
  titleBtn,
  shadow,
  clickButton
}: IHeroSectionPage) {
  return (
    <HeroContainerStyles backgroundImage={backgroundImage} shadow={shadow}>
      <div data-aos="zoom-in-up" className="containerMaxWidth">
        <div className="infoHero">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="containerBtn">
            {clickButton ? (
              <ButtonBase
                value={titleBtn ? titleBtn : 'Obter orçamento'}
                onClick={clickButton}
                colorBase={defaultTheme.colors['brand-primary']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-white']}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="shadow"></div>
    </HeroContainerStyles>
  )
}

export default HeroSectionPage
