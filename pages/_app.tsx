import '../styles/globals.scss';
import '@fortawesome/fontawesome-free';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout pageProps={pageProps} >
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
