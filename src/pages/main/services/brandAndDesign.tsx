import { useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Styles
import {
  ServiceWebsiteStyles,
  ContainerServiceWebsite
} from '../../../styles/pages/_main/ServiceWebsiteStyles'

// Routs

// Components

function BrandAndDesignService() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ServiceWebsiteStyles>
      {/* <HeroSection
        backgroundImage="https://kodesolution.com/html/2022/oitech-html/images/background/page-title.jpg"
        title={titlePath}
        base1="Projetos"
        base2={titlePath}
      /> */}

      <div className="container">
        <ContainerServiceWebsite>BrandAndDesignService</ContainerServiceWebsite>
      </div>
    </ServiceWebsiteStyles>
  )
}

export default BrandAndDesignService
