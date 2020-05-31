import React from 'react';

export default function Adcomponent(props){
    return(
        <>
        <div className='single-module single-module-Sentry module-6'>
            <div className='module'>
                <a href="#">
                        <img src={props.adbanner}/>
                </a>
            </div>
            <div className="interlude">
                <img src={props.adprofimage} className='avatar' height='80' width='80' alt='CSS-Tricks Star Logo'></img>
                <a href="#">{props.adcontent}</a>
            </div>
        </div>

        </>
    )
}