import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
  <Component {...pageProps} />
  <Footer />
  </Layout>
  )
}

export default MyApp
