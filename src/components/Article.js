import React from 'react';
import Newscomponent from './Newscomponent';
import Adcomponent from './Adcomponent';
import row1data from'../data/row1data.json';
export default function Article(props){
    return(
    <>
        <article className='hero-article'>
            <div className="hero-article-article">
                <Newscomponent newstitle={row1data.articlemeta} newsdate={row1data.articledate} title={row1data.articletitle} 
                authoravatarlink={row1data.authoravatarlink} 
                authorname={row1data.authorname} content1={row1data.newscontent1} content2={row1data.newscontent2} />
            </div>

            <div className='hero-article-ad'>
                <Adcomponent adbanner={row1data.adbannerimage} adprofimage={row1data.adprofimage} adcontent={row1data.adcontent}/>
            </div>
        </article>
    </>
    )
}