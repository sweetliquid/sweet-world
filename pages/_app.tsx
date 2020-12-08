import 'tailwindcss/tailwind.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Serif SC', Mulish, -apple-system, 'PingFang SC',
      'Microsoft YaHei', sans-serif;
  }
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
