import React from 'react';
import "./textBlock.module.css"

interface FootnoteBlock {
references: Array<string>,
}

export const FootnoteBlock: React.FC<FootnoteBlock> = ({references}) => {
    return (
        <div className='row'>
        <div className='col-6'>
            <div className='row pb-5 pr-5'>
                <div>
                </div>
                <div className='pt-3 w-75'>
                </div>
            </div>
        </div>
        <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
            Notes <br/>
            {references.map((reference, index) => {
                return (<div>
                    {index+1}. {reference}
                    <br/>
                </div>
                )
            })}
        </div>
    </div>
    )
}