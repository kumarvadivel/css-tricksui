import React from 'react';
import Jobcard from './components/jobcard';
import jobcarddata from './data/jobcarddata.json'
export default function Footerjobs(){
    console.log(jobcarddata)
    return(
        <div className='footer-jobs-wrapper'>
            <div className='footer-jobs'>
                <header className='footer-jobs-header'>
                    <h2 className='header-card-title'>
                        Browse &nbsp;<br/>the Jobs
                    </h2>
                    <p className='bold-underline-links'>
                        Powered by<br/>
                        <a href='#'>
                            Codepen Jobs
                        </a>
                    </p>
                    <a href='#' className='button button-full-width button-small'>
                        Post a Job
                    </a>
                    <a href='#' className='button button-outline button-full-width button-small'>
                        See more Jobs
                    </a>
                </header>
                <ul className='job-list'>
                    {jobcarddata.map(data=>
                        <Jobcard title={data.title} content={data.content} address={data.address} />
                    )}
                    
                </ul>
            </div>
        </div>
    )
}