import React from 'react'


export default function Footernews(){
    return(
        <>
        <hr className='thick'></hr>
        <h2>How do you stay up to date in this fast-moving &nbsp; industry? </h2>
        <p>
            A good start is to sign up for our weekly hand-written newsletter. We bring you the best articles and ideas
            from around the web, and what we think about them.
        </p>
        <div id='footer-form-wrap'>
            <form action='#'>
                <label className='screen-reader'>Email Address</label>
                <input type='email' className='required email mailchimp-email-input' placeholder='lovetricks@internet.cool' required/>
                <input type='submit' value='Subscribe' className='button subscribe-button'></input>
            </form>
        </div>
        <div className='social-links'>
            <a href="#" class="social-link-facebook">
                <strong>Facebook</strong>
                <span>@CSSTricks</span>
            </a>
            <a href="#" class="social-link-twitter">
                <strong>Twitter</strong>
                <span>@CSS</span>
            </a>
            <a href="#" class="social-link-youtube">
                <strong>YouTube</strong>
                <span>@realcsstricks</span>
            </a>
            <a href="#" class="social-link-instagram">
                <strong>Instagram</strong>
                <span>@real_css_tricks</span>
            </a>
            <a href="#" class="social-link-rss">
                <strong>RSS</strong>
                <span>Feed</span>
            </a>
        </div>
        </>
    )
}