import React from 'react';
import Popularheadercard from './popular-article-sub/Popularheadercard';
import Popularminicard from './popular-article-sub/popularminicard';
import popularminicarddata from '../data/popularminicarddata.json'
export default function Populararticles(){
    return(
        <>
        <div className='popular-articles'>
            <Popularheadercard/>
            <div className='mini-card-grid'>
                {popularminicarddata.map(data=> 
                 <Popularminicard meta={data.meta} 
                 date={data.date} 
                 title={data.title} 
                 avatarlink={data.avatarlink}
                 name={data.name}
                 tags={data.tags}/>)}
               
                
            </div>
        </div>
        </>
    )
} 