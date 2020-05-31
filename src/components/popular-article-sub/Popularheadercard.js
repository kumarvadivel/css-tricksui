import React from 'react';


export default function Popularheadercard(){
    return(
        <>
        <header className='popular-header header-card white-underline-links'>
            <h2 className="header-card-title">
                Popular<br/>this<br/>month<br/>
            </h2>
            <p className='header-card-sponsor'>
                Sponsered by<br/>
                <a href="#">Frontend Masters</a>
            </p>
        </header>
        </>
    )
}