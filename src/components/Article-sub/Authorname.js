import React from 'react';

export default function Authorname(props){
    return(
        <>
        <div className='author-name-area'>
            <div className='author-name-prefix'>
                Author
            </div>
            <a className='author-name' href='#'>
                {props.authorname}
            </a>
        </div>
        </>
    )
} 