import React from 'react';
import { NavBar } from '../components/navbar';
import { Photography } from '../components/photography';
import { Text } from '../components/text';
import { Video } from '../components/video';

interface Article {
    type: string
}

export const Article: React.FC<Article> = ({type}) => {
const articleType = type
return (
<div className='container-fluid'>
    <NavBar />
    {articleType == "text" ? <Text /> : articleType == "video" ? <Video /> : <Photography />}
</div>
)
}