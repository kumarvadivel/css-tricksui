import React from 'react';

export default function Footersubsite(props){
    return(
        <>
            <div className='footer-subsite footer-subsite-conferences bold-underline-links'>
                <span className='presents'>
                    <strong>{props.title}</strong>
                    {props.subtitle}
                </span>
                    {props.content}
                <a href='#'>
                    {props.subcontent}
                </a>
            </div>
        </>
    )
}