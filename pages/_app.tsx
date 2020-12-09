import '../styles/tailwind.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
`
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
