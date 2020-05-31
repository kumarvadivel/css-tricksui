import React from 'react';
import Nav from './components/Nav'
import Article from './components/Article'
import Populararticles from './components/Populararticles'
import Articlerail from './components/Articlesrail';
import Footerjobs from './footerjobs';
import FooterNews from './components/footernews'
import Footercolophon from './components/footercolophon'
import Footerpartner from './components/footerpartner'
import Footersubsite from './components/footersubsites'
export default function App() {
  return (
        <>
        <Nav></Nav>
        <div className='all-site-wrap' id="all-site-wrap">
            <main className='page-wrap page-wrap-home' id="maincontent">
                <Article/>
                <Populararticles/>
                <Articlerail/>
            </main>
            <Footerjobs/>
        </div>
        <footer className='site-footer footer-newsletter'>
            <div class='footer-newsletter-inside'>
               < FooterNews/>
            </div>
        </footer>
        <div className='footer-colophon-wrapper'>
            <Footercolophon/>
        </div>
        <div className='site-footer footer-partners'>
            <Footerpartner/>
        </div>
        <div className='site-footer footer-subsites'>
            <Footersubsite title='CSS-Tricks' subtitle="Presents" content='
📅 Upcoming ' subcontent='Front-End Confrences'/>
 <Footersubsite title='CSS-Tricks' subtitle="Presents" content='The Power of Serverless for ' subcontent='Front-End devlopers'/>
        </div>

    </>

    )
}