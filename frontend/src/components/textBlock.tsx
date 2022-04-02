import React from 'react';
import "./textBlock.module.css"

interface TextBlock {
id?: number,
imageLink?: string,
imageCaption?: string,
text: string,
}

export const TextBlock: React.FC<TextBlock> = ({id, imageLink, imageCaption, text}) => {
    return (
    <div key={id} className='row'>
        <div className='col-6'>
            <div className='row pb-5 pr-5'>
                <div>
                    <img className='w-75' src={imageLink}
                        alt={imageCaption} />
                </div>
                <div className='pt-3 w-75' style={{fontSize: '1.2rem'}}>
                    {imageCaption}
                </div>
            </div>
        </div>
        <div className='col-6' style={{fontSize: '1.5rem', opacity: '0.8'}}>
            {text}<br /><br />
        </div>
    </div>
    )
}