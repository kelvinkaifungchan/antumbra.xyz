import React from 'react';
import { NavBar } from '../components/navbar';
import { Photography } from '../components/photography';
import { Text } from '../components/text';
import { Video } from '../components/video';
import { HorizontalLine } from '../components/horizontalLine';
import { Footer } from '../components/footer'

interface Article {
    type: string
}

export const Article: React.FC<Article> = ({type}) => {
const articleType = type
return (
<div className='container-fluid'>
    <NavBar />
    {articleType == "text" ? <Text /> : articleType == "video" ? <Video /> : <Photography />}
    <br/>
    {/* <HorizontalLine /> */}
    <Footer />
</div>
)
}