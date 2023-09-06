import { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppContext, AppProvider } from './provider/AppProvider'
import { Router } from './routes/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'
import './i18n/index'
import { darkTheme } from './themes/darkTheme'

function App() {
  const { isDarkMode } = useContext(AppContext)

  return (
    <AppProvider>
      <ThemeProvider theme={!isDarkMode ? defaultTheme : darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
