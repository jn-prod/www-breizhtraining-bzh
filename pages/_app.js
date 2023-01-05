import '../styles/globals.scss';
import '@fortawesome/fontawesome-free';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return <Layout {...pageProps} >
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
