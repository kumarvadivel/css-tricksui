import React from 'react';


export default function ArticleComment(){
    return(<>
        <div className='article-comments-meta'>
            <div className='comments-prefix'>Comments</div>
            <a className='comments-link' href='#'>
                
                Start conversation
                
                <svg viewBox="0 0 24 24" class="icon-arrow-right" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12.5L23 12.5" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M1 12.5H2" stroke="url(#paint1_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M17.5 7L23 12.5L17.5 18" stroke="url(#paint2_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<defs>
<linearGradient id="paint0_linear" x1="10.7498" y1="12.5" x2="11.3447" y2="9.73465" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8A00"></stop>
<stop offset="1" stop-color="#DA1B60"></stop>
</linearGradient>
<linearGradient id="paint1_linear" x1="1.23436" y1="12.5" x2="2.00945" y2="12.2748" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8A00"></stop>
<stop offset="1" stop-color="#DA1B60"></stop>
</linearGradient>
<linearGradient id="paint2_linear" x1="18.789" y1="17.9995" x2="23.3162" y2="17.3419" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8A00"></stop>
<stop offset="1" stop-color="#DA1B60"></stop>
</linearGradient>
</defs>
</svg>
            </a>
        </div>
    </>)
}