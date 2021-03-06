import React from 'react'

export default function Footercolophon(){
    return(
        <>
        <footer className='site-footer footer-colophon'>
            <div>
                <p>
                    CSS-Tricks
                    <span>*</span>
                    is created, written by,and maintained by
                    <a href='#'>Chris Coyier</a>
                    and
                    <a href='#'>a team</a>
                    of swell people.the tech stack for this site is fairly
                    <a href='#'>boring</a>
                    . That's a good thing! I've used 
                    <a href="#">WordPress</a>
                     since day one all the way up to 
                     <a href="/design-v17/">v17</a>
                     ,
                    a decision I'm 
                    <a href="/video-screencasts/154-poster-child-wordpress-site/">very happy with</a>
                    . I also
                    leverage 
                    <a href="/jetpack/">Jetpack</a>
                     for extra functionality and 
                     <a href="/local-by-flywheel/">Local</a>
                     
                    for local development.
                </p>
                <p className='mega-big-time-warning'>
                    <small>
                        <span>*</span>
                        May or may not contain any actual "CSS"
                        or&nbsp;"Tricks".
                    </small>
                </p>
            </div>
            <nav>
                <h4>Other Nav</h4>
                <a href="/contact/">Contact</a>
                <a href="/about/">About</a>
                <a href="/guest-posting/">Guest Writing</a>
                <a href="/jobs">Jobs</a>
                <a href="/advertising/">Advertise</a>
                <a href="/license/">License</a>
                <a href="/subscription-options/">Subscribe</a>
                <a href="/authors/">All Authors</a>
            </nav>
        </footer>
        </>
    )
}