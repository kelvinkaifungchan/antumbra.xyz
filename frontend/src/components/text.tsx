import axios, {AxiosResponse} from 'axios';
import { TitleBlock } from "./articleBlocks";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

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

export const Text = () => {
    
    let params = useParams();
    const [article, setArticle] = useState<Article | null>(null);

    const getArticle = () => {
        axios(`http://localhost:8080/api/aarchitecture/article/:${params.id}`,{
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                withCredentials: true,
                mode: 'no-cors'
              }})
        .then((response: AxiosResponse)=>{
            console.log(response);
            setArticle(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    getArticle()

    return (
    <div className='px-3'>
        {article ? <TitleBlock title={article.title} tags={article.tags} contributors={article.contributors}/> : null}
    </div>
    )
    }