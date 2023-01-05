import Head from 'next/head'
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import Section from '../section/section'
import site from '../../site.conf';

export default function Layout({ children, pageProps }) {
  const slides = [1,2,3,4,5];

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="author" content={ site.title }/>
        <link rel="icon" href="/favicon.ico"/>
        <title>{`${ site.title }, ${ pageProps?.title }.`}</title>
        <meta name="description" content={`${ site.title }, ${ pageProps?.title }. ${ site.description }`}/>
        {process.env.development && ([
          <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-143913546-1" />,
          <Script> {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-143913546-1');
          `}
          </Script>
        ])}
      </Head>

      <header className="layout__header">
        <nav className="layout__header-navigation text-white py-5">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link text-white btn" href="#bio">Bio</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link text-white btn" href="#suivi">Suivi</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link text-white btn" href="#prestations">Prestations</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link text-white btn" href="#stages">Stages</a>
            </li> 
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item ml-auto">
              <a className="nav-link text-white btn" href={ site.instagram } rel="me" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="sm" />
              </a>
            </li>  
            <li className="nav-item">
              <a className="nav-link text-white btn" href={ site.facebook } rel="me" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="sm" />
              </a>
            </li>
          </ul>
        </nav>
        <Carousel controls={false}>
          {
            slides.map((slide, idx) => (
              <Carousel.Item interval={5000} key={idx}>
                <img
                  className="d-block w-100"
                  src={`/img/slider/img-${slide}.jpg`}
                  alt={`slide ${slide}`}
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </header>
      <main role="main" className='layout__main'>

        { children }
        
      </main>
      <footer className="layout__footer">
        <Section background="dark">
          <div className="row">
            <div className="col-md-4">
              <h2 className="layout__footer-title">
                CONTACT 
                <a className="layout__footer-title-link" href={ site.instagram } target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a className="layout__footer-title-link" href={ site.facebook } target="_blank">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </h2>
              <div>{ site.email }</div>
            </div>
            {
              site.authors.map((author, key) => (
                <div className="col-md-4" key={key}>
                  <h2 className="layout__footer-title">{ author.name }</h2>
                  <div>{ author.fone }</div>
                </div>
              ))
            }
          </div>
        </Section>
        <p className="layout__footer-signature">
          Design et développement par <a href="https://nicolasjouanno.com" target="_blank" className='layout__footer-signature-link'>Nicolas Jouanno</a>
        </p>
      </footer>
    </>
  )
}