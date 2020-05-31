import React from 'react'
import Adcomponent from './Adcomponent'
import Newscardsrail from './newscardsrail'
import addata from '../data/addata.json'
import articledata from '../data/articledata.json'
export default function Articlerail(){
    const array1=articledata.splice(0,articledata.length/2)
    const array2=articledata.splice(articledata.length/2,articledata.length)
    console.log(array2)
    return(
        <>
        <div className='articles-and-rail'>
            <aside className='entry-unrelated sidebar'>
                <div id='all-ads'>
                   {addata.map(data=><Adcomponent adbanner={data.adbannerimage} adprofimage={data.adprofimage} adcontent={data.adcontent} />)}
                    <div id='scroll-ad-position'></div>
                    <div id='sticky-sidebar-stuff' class>
                        <div id='conditional-message'>
                            <div className='fem-ad fem-sidebar-ad'>
                                <div className='fem-header'>
                                    <div className='fem-header-inner'>
                                        <div className='fem-learning-partner'>
                                            Our learning Partner
                                        </div>
                                        <a href="#">
                                           <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1578251803/FEM-sidebar-Generic_dipjef.png" alt="Frontend Masters logo" className="fem-logo"/>

                                        </a>
                                    </div>
                                    
                                                             </div>
                                <svg class="fem-diagonal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><defs><linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#c02d28"></stop><stop offset="100%" stop-color="#e66225"></stop></linearGradient></defs><polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon></svg>
                                <div class="fem-message">
<h4>Need some front-end development training?</h4>
<p><a href="#">Full Stack</a>.</p>
</div>
       
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <div className='articles'>
               {array1.map(data=><Newscardsrail articlemeta={data.articlemeta}
               articledate={data.articledate} 
               authoravatarlink={data.authoravatarlink}
               authorname={data.authorname}
               articletitle={data.articletitle}
               newscontent1={data.newscontent1}
                newscontent2={data.newscontent2}
               />)}
                <div className='bsap-doubles side-by-side'>
                    <div id='bsap_1250418' className='bsap bsap_1250418'>
                        <div className="bsa_it one">
                            <div className="bsa_it_ad ad0 odd ">
                                    <a target="_blank" href="#" rel="nofollow">
                                        <span class="bsa_it_i">
                                            <img alt="Color Ninja for Mac" src="https://s3.buysellads.com/creatives/f47c981a75f93444de1afcba36af2745-1589035049.png" width="120" height="90"/>
                                        </span>
                                    </a>
                                    <a target="_blank" href="" rel="nofollow">
                                        <span className="bsa_it_t">Color Ninja for Mac</span>
                                        <span className="bsa_it_d">Picker, schemer and palette manager in one. Love it or your money back. </span>
                                    </a>
                                    
                            </div>
                            <div className="bsa_it_ad ad1  even">
                                <a target="_blank" href="#" rel="nofollow">
                                    <span className="bsa_it_i">
                                        <img alt="The Divi Theme" src="//s3.buysellads.com/1250418/293805-1444204566.png" width="120" height="90"/>
                                    </span>
                                </a>
                                <a target="_blank" href="#" rel="nofollow">
                                    <span className="bsa_it_t">The Divi Theme</span>
                                    <span className="bsa_it_d">Download the Ultimate WordPress Theme including our advanced Drag &amp; Drop builder</span>
                                </a>
                            
                        </div>
                            <span className="bsa_it_p">
                                <a href="#">ads by BSA</a>
                            </span>
                        </div>
                    </div>
                </div>
            
                 {array2.map(data=><Newscardsrail articlemeta={data.articlemeta}
                                    articledate={data.articledate} 
                                authoravatarlink={data.authoravatarlink}
               authorname={data.authorname}
               articletitle={data.articletitle}
               newscontent1={data.newscontent1}
                newscontent2={data.newscontent2} />)}
            </div>
        </div>
        </>
    )
} 