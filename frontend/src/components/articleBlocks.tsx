import React from 'react';
import "./textBlock.module.css"
import style from './textBlock.module.css'

interface TextBlock {
id?: number,
imageLink?: string,
imageCaption?: string,
text: string,
}

export const TextBlock: React.FC<TextBlock> = ({id, imageLink, imageCaption, text}) => {
    return (
    <div key={id} className='row'>
        <div className='col-3'>
            <div className='row pb-5 pr-5'>
                <div>
                    <img className={`${style.image} w-75`} src={imageLink} alt={imageCaption} />
                </div>
                <div className='pt-3 w-75' style={{fontSize: '0.8rem'}}>
                    {imageCaption}
                </div>
            </div>
        </div>
        <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
            {text}<br /><br />
        </div>
        <div className='col-3'></div>
    </div>
    )
    }

    interface FootnoteBlock {references: Array<string>}

        export const FootnoteBlock: React.FC<FootnoteBlock> = ({references}) => {
            return (
            <div className='row'>
                <div className='col-3'>
                    <div className='row pb-5 pr-5'>
                        <div>
                        </div>
                        <div className='pt-3 w-75'>
                        </div>
                    </div>
                </div>
                <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
                    Notes <br />
                    {references.map((reference, index) => {
                    return (<div>
                        {index+1}. {reference}
                        <br />
                    </div>
                    )
                    })}
                    <br />

                </div>
                <div className='col-3'>

                </div>
            </div>
            )
            }

            interface BannerImageBlock {
            id?: number,
            imageLink: string,
            imageCaption: string,
            }

            export const BannerImageBlock: React.FC<BannerImageBlock> = ({imageLink, imageCaption}) => {
                return (
                <div className='row' style={{fontSize: '1.2rem', opacity: '0.8'}}>
                    <div className='col-3'>
                    </div>
                    <div className='col-6'>
                        <div>
                            <img className={`${style.image} w-100`} src={imageLink} alt={imageCaption} />
                        </div>
                        <div className='pt-3 w-75' style={{fontSize: '0.8rem'}}>
                            {imageCaption}
                        </div>
                    </div>
                    <div className='col-3'>
                    </div>
                </div>
                )
                }

                interface AuthorBioBlock {
                id?: number,
                author?: string,
                link?: string,
                text?: string,
                }

                export const AuthorBioBlock: React.FC<AuthorBioBlock> = ({author, text}) => {
                    return (
                    <div className='row' style={{fontSize: '1.2rem', opacity: '0.8'}}>
                        <div className='col-3'>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-3'>
                                    {author}
                                </div>
                                <div className='col-9'>
                                    {text}
                                    <br /><br />
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                        </div>
                    </div>
                    )
                    }