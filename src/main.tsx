import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from '@/routes/AppRoutes'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#66c6ff',
    },
    secondary: {
      main: '#1D214E',
    },
  },
  components: {
    MuiButton: {
      styleOverrides:{
        contained: {
          "&:hover": {
            opacity: "0.85",
          }
        },
      }
    }
  }

});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
