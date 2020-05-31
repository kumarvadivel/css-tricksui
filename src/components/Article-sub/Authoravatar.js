import React from 'react';

export default function Authoravatar(props){
    return(
        <>
        <div className='author-avatar'>
                    <a href='#'>
                        <img alt="Avatar of Ollie Williams" src={props.authoravatarlink} srcset={props.authoravatarlink} className="avatar avatar-80 photo skip-lazy" height="80" width="80"></img>
                    </a>
                    <svg class="half-circle" width="80px" height="80px" viewBox="0 0 106 57"><path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                </div>
        </>
    )
}