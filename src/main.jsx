import React from 'react'
import ReactDOM from 'react-dom/client'
import  theme  from './styles/theme.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { Header } from './components/Header/index.jsx'
import { FacialTreatments } from './pages/Treatments/Facial/index.jsx'
import { Footer } from './components/Footer/index.jsx'
import { About } from './pages/About/index.jsx'
import { Homepage } from './pages/Homepage/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Homepage />
    </ThemeProvider>
  </React.StrictMode>
)
