import React from 'react';
import Authoravatar from './Article-sub/Authoravatar'
import Authorname from './Article-sub/Authorname'
import Tag from './Article-sub/Article-tag'
import Articlecontentpara from './Article-sub/Article-content-para';
import ArticleComment from './Article-sub/Article-comments';
export default function Newscomponent(props){
    const tags=props.tags
    return(
        <>
            <header className="article-publication-meta">

                <strong>{props.newstitle}</strong>
                <time datetime='2020-05-27'>
                    {props.newsdate}
                   
                </time>
            </header>
            <h1>
                <a href="#">{props.title}</a>
            </h1>
            <div className='article-content-meta'>
                <Authoravatar authoravatarlink={props.authoravatarlink}/>
                <Authorname authorname={props.authorname}/>
                <ArticleComment/>
            </div>
            <div className='article-content'>
               <Articlecontentpara content={props.content1}/>
               <Articlecontentpara content={props.content2}/>

            </div>
            <div className='tags'>
                


            </div>
        </>
        
    )
}