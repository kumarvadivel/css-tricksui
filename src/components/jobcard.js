import React from 'react'


export default function Jobcard(props){
    
    return(
        <>
        <li>
            <a href='#'>
                <div className='job-info'>
                    <strong>
                        {props.title}
                    </strong>
                    {props.content}
                </div>
                <address>
                    <svg class="icon-pin" viewBox='0 0 16 16'  width="16px" height="16px">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.727 2A4.727 4.727 0 004 6.727c0 1.826 1.198 3.65 2.59 5.12a18.357 18.357 0 002.137 1.917 18.36 18.36 0 002.138-1.918c1.392-1.469 2.59-3.293 2.59-5.119A4.727 4.727 0 008.726 2zm0 13l-.555.832-.002-.002-.005-.003-.016-.01a6.814 6.814 0 01-.253-.18 20.364 20.364 0 01-2.758-2.416C3.666 11.669 2 9.357 2 6.728a6.727 6.727 0 1113.454 0c0 2.63-1.665 4.941-3.137 6.495a20.366 20.366 0 01-2.956 2.556 6.845 6.845 0 01-.055.038l-.016.01-.005.004-.002.001s-.001.001-.556-.831zm0 0l.555.832a1 1 0 01-1.11 0L8.727 15z"></path>
                        <path d="M8.727 8.637a1.91 1.91 0 100-3.819 1.91 1.91 0 000 3.819z"></path>
                    </svg>

                    {props.address}
                </address>
            </a>
        </li>
        </>
    )
}