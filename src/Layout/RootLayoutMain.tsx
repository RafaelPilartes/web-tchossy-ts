import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import WhatsappButton from '../components/WhatsappButton'
import FooterMain from '../components/_main/Footer'
import HeaderMain from '../components/_main/Header'

function RootLayoutMain() {
  useEffect(() => {
    // Função para cancelar o evento do botão direito
    const cancelarCliqueBotaoDireito = (event: MouseEvent) => {
      event.preventDefault()
    }

    // Adiciona o evento de clique ao documento inteiro
    document.addEventListener('contextmenu', cancelarCliqueBotaoDireito)

    // Remove o evento quando o componente for desmontado
    return () => {
      document.removeEventListener('contextmenu', cancelarCliqueBotaoDireito)
    }
  }, [])

  useEffect(() => {
    // Função para detectar o pressionamento de teclas
    const detectarTeclaDeAtalho = (event: KeyboardEvent) => {
      // Verifica se a tecla F12 (para Windows) ou Command+Option+I (para Mac) foi pressionada
      if (event.keyCode === 123) {
        event.preventDefault()
      }
      if (event.keyCode === 123 && event.shiftKey) {
        event.preventDefault()
      }
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault()
      }
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault()
      }
    }

    // Registra o evento de pressionamento de teclas
    document.addEventListener('keydown', detectarTeclaDeAtalho)

    // Remove o evento quando o componente for desmontado
    return () => {
      document.removeEventListener('keydown', detectarTeclaDeAtalho)
    }
  }, [])

  useEffect(() => {
    const handleDevtoolsChange = (event: any) => {
      if (event.detail.isOpen === true) {
        alert('1234')
      }
    }

    // Verifica se as ferramentas de desenvolvimento estão abertas
    window.addEventListener('devtoolschange', handleDevtoolsChange)

    // Remove o evento quando o componente é desmontado
    return () => {
      window.removeEventListener('devtoolschange', handleDevtoolsChange)
    }
  }, [])

  return (
    <>
      <HeaderMain />
      <Outlet />
      <WhatsappButton />
      <FooterMain />
    </>
  )
}

export default RootLayoutMain
