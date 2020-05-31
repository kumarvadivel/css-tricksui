//pass props with tags for the para to display with formats
import React from 'react';

export default function Articlecontentpara(props){
    return(
        <p>
        {props.content}
        </p>
    )
}