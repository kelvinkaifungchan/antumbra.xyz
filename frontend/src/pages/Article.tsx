import axios, {AxiosResponse} from 'axios';
import React, { useEffect, useState } from "react";
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer'
import { Text } from '../components/text'
import { Video } from '../components/video'
import { Image } from '../components/image'

interface Tag {
    id: number;
    tag: string
  }
  
  interface ArticleBlock {
    id: number;
    article_id: number;
    type: string;
    attachmentLink?: string;
    attachmentCaption?: string;
    text?: string;
  }
  
  export interface Contributor {
    id: number;
    name: string;
    bio: string;
  }

interface Article {
    id: number,
    type: string
    contributors: Array<Contributor>,
    title: string,
    subtitle: string,
    heroImage: string,
    datePublished: string,
    tags: Array<Tag>,
    articleBlock: Array<ArticleBlock>
}

interface Type {
    type: string
}

export const Article: React.FC<Type> = ({type}) => {

    const [article, setArticle] = useState<Article | null>(null);

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/article/:id`)
        .then((response: AxiosResponse)=>{
        setArticle(response.data)
        })
    },[])

return (
<div className='container-fluid'>
    <NavBar />
    {
        type == "essay" ? <Text /> : type == "film" ? <Video /> : <Image />
    }
    <Footer />
</div>
)
}