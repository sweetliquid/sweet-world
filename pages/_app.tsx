import { createGlobalStyle, ThemeProvider } from 'styled-components/macro'
import 'tailwindcss/tailwind.css'

const GlobalStyles = createGlobalStyle``
const theme = {}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
