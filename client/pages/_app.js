import '../scss/style.scss'
import { MainProvider } from '../components/context/Main'
import { UserProvider } from '../components/context/User'
export default function App({ Component, pageProps }) {
  return <UserProvider ><MainProvider >
    <Component {...pageProps} />
  </MainProvider >
  </UserProvider>
}