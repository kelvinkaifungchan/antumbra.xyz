import axios, {AxiosResponse} from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer'
import { Text } from '../components/text'
import { Video } from '../components/video'
import { Image } from '../components/image'
import { Hamburger } from '../components/hamburger';

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
    text: string;
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
    pdf: string,
    datePublished: string,
    tags: Array<Tag>,
    articleBlocks: Array<ArticleBlock>
}

export const Article=({type}: {type:string} ) => {
    const [article, setArticle] = useState<Article | null>(null);
    let params = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/aarchitecture/article/?articleId=${params.id}`)
        .then((response: AxiosResponse)=>{
        setArticle(response.data)
        })
    },[])

return (
<div className='container-fluid'>
    <NavBar />
    <Hamburger />
    {
        article && type === "text" ? <Text props={article}/> : article && type === "video" ? <Video props={article}/> : article ? <Image props={article}/> : null
    }
    <Footer />
</div>
)
}