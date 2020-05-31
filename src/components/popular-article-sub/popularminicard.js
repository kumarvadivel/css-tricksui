import React from 'react';
import Authoravatar from '../Article-sub/Authoravatar';
import Authorname from '../Article-sub/Authorname';
import Tag from '../Article-sub/Article-tag';
export default function Popularminicard(props){
    

    return(
        <>
            <article className='mini-card module module-article article'>
                <header className='mini-article-card-header'>
                    <div className="mini-article-card-title">
                        <div className='mini-article-subhead'>
                            {props.meta}
                            <time datetime='2020-04-24'>
                                {props.date}
                            </time>
                        </div>
                        <h2 className>
                            <a href='#' class='article-card-header read-article'>
                                {props.title}
                            </a>
                        </h2>
                    </div>
                </header>
                <div className='mini-article-meta'>
                    <div className='mini-article-byline'>
                        <Authoravatar authoravatarlink={props.avatarlink}/>
                        <Authorname authorname={props.name}/>
                    </div>
                    <div className='tags'>
                        
                        {props.tags.map(data=> <Tag tagname={data.value}/> )}
                    </div>
                </div>
            </article> 
        </>
    )
}