import React from 'react';
import Newscomponent from './Newscomponent'
export default function Newscardsrail(props){
    return(
        <>
        <article className='article-card module module-article article'>
            <Newscomponent newstitle={props.articlemeta}
             newsdate={props.articledate}
             title={props.articletitle} 
             authorname={props.authorname}
             authoravatarlink={props.authoravatarlink}
             content1={props.newscontent1}
             content2={props.newscontent2} />
        </article>
        </>
    )
}