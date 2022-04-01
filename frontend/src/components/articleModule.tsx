import React from 'react';

interface Props {
    img: string;
    content: string;
}

export const ArticleModule = (props: Props) => {
    return (
        <div style={{ backgroundImage:`url("${props.img}")`, width:'auto', height:'100%', backgroundRepeat:'no-repeat', backgroundSize:'auto', borderRadius:'9'}}>
            <h2 className='p-3'>{props.content}</h2>
        </div>
    )
}