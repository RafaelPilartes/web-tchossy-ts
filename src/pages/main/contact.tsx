import { useEffect, useState } from 'react'

// Modulos do material
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Autocomplete } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

// Modulos do Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// Icons
import { FiPhoneCall } from 'react-icons/fi'

// Layout
import RootLayoutMain from '../../Layout/RootLayoutMain'
import {
  ContainerContacts,
  ContainerContactsUs
} from '../../styles/pages/_main/ContactsStyles'
import HeroSection from '../../components/_main/HeroSection'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { TfiMapAlt } from 'react-icons/tfi'
import ButtonBase from '../../components/_main/buttons/ButtonBase'
import { routsNameMain } from '../../data/routsName'
import { defaultTheme } from '../../themes/default'

// Theme

// Styles

// Routs

// Components

function Contact() {
  const [haveError, setHaveError] = useState<boolean>(false)

  function goTo(to: string) {
    console.log('-> ', to)
  }

  const subject = [
    { label: 'Sugestão' },
    { label: 'Suporte' },
    { label: 'Ajuda' },
    { label: 'Outros' }
  ]

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerContacts>
      <HeroSection
        backgroundImage="https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/bg-header-banner.jpg"
        title="Contactos"
        base1="Contactos"
      />

      <div className="containerContent">
        <ContainerContactsUs>
          <div className="contentLeft">
            <div className="containerTitleSection">
              <div>
                <h4>Entre em contacto connosco</h4>
                <h1>Sinta-se a vontade para entrar em contacto</h1>
              </div>
            </div>

            <div className="containerLink">
              <div className="containerLinkContacts">
                <div className="containerIcon">
                  <div className="backgroundIcon">
                    <FiPhoneCall />
                  </div>
                </div>

                <div className="containerInfo">
                  <p>Ligue a qualquer hora</p>
                  <a target="_blank" href="tel:923414621">
                    +244 923 414 621
                  </a>
                  <a target="_blank" href="tel:923414621">
                    +244 923 414 621
                  </a>
                </div>
              </div>

              <div className="containerLinkContacts">
                <div className="containerIcon">
                  <div className="backgroundIcon">
                    <MdOutlineAttachEmail />
                  </div>
                </div>

                <div className="containerInfo">
                  <p>Enviar email</p>
                  <a target="_blank" href="mailto:geral@tchossy.com">
                    geral@tchossy.com
                  </a>
                </div>
              </div>

              <div className="containerLinkContacts">
                <div className="containerIcon">
                  <div className="backgroundIcon">
                    <TfiMapAlt />
                  </div>
                </div>

                <div className="containerInfo">
                  <p>Visite agora</p>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/1Uvj3cRqNQPEKzoB7"
                  >
                    Luanda, Benfica, Avenida 21 de Janeiro
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contentRight">
            <div className="containerRowInput">
              <TextField
                name="name"
                className="widCem"
                required
                id="outlined-required"
                label="Seu nome"
                error={haveError}
              />

              <TextField
                name="name"
                className="widCem"
                required
                id="outlined-required"
                label="Endereço de email"
                error={haveError}
              />
            </div>

            <div className="containerRowInput">
              <TextField
                className="widCem"
                required
                id="outlined-required"
                label="Número de telefone"
                type="number"
              />
              <TextField
                className="widCem"
                required
                id="outlined-required"
                label="Sujeito"
              />
            </div>

            <textarea name="" rows={5}></textarea>

            <ButtonBase
              value={'Enviar mensagem'}
              onClick={() => goTo(routsNameMain.home)}
              colorBase={defaultTheme.colors['base-gray']}
              colorSecondary={defaultTheme.colors['brand-primary']}
              textColor={defaultTheme.colors['base-text']}
            />
          </div>
        </ContainerContactsUs>
      </div>

      <div className="containerMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.3761560883269!2d13.159591665056022!3d-8.925559012057013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a518ac42bd55b49%3A0xec7f851390a7b958!2sRua%20Pedro%20de%20Castro%20Van-Dunem%20Loy%20-%20Estrada%20Benfica%2C%20Estr.%20da%20Samba%202%2C%20Belas!5e0!3m2!1spt-BR!2sao!4v1669995550740!5m2!1spt-BR!2sao"
          width="600"
          height="450"
        ></iframe>
      </div>
    </ContainerContacts>
  )
}

Contact.layout = RootLayoutMain

export default Contact
