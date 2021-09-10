import '../scss/style.scss'
import { MainProvider } from '../components/context/Main'
export default function App({ Component, pageProps }) {
  return <MainProvider >
  <Component {...pageProps} />
</MainProvider > 
}