import axios, {AxiosResponse} from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer'
import { Text } from '../components/text'
import { Video } from '../components/video'
import { Image } from '../components/image'
import { Hamburger } from '../components/hamburger';
import { ArticleModuleSmall } from "../components/articleGrid";
import { HorizontalLine } from '../components/horizontalLine';

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

  interface CarouselImage {
    id: number;
    article_id: number;
    imageLink?: string;
    imageCaption?: string;
  }
  
  interface Contributor {
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
    carousel?: Array<CarouselImage>
}

interface ArticleModule {
  id: number,
  type: string
  contributors: Array<Contributor>,
  title: string,
  subtitle: string,
  heroImage: string,
  pdf: string,
  datePublished: string,
  tags: Array<Tag>,
}

export const Article=({type}: {type:string} ) => {
    let navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);
    const [articleList, setArticleList] = useState<ArticleModule[] | null>(null);
    let params = useParams()

    useEffect(()=>{
      axios.get(`http://localhost:8080/api/aarchitecture`)
      .then((response: AxiosResponse)=>{
        setArticleList(response.data)
      })
      axios.get(`http://localhost:8080/api/aarchitecture/article/?articleId=${params.id}`)
      .then((response: AxiosResponse)=>{
      setArticle(response.data)
      })
    },[])

    const handleNav = (e: any, id: number, type:string) => {
      navigate(`/${type}/${id}`);
      }

return (
<div className='container-fluid'>
    <NavBar />
    <Hamburger />
    <div className='pb-3'>
    {
        article && type === "text" ? <Text props={article}/> : article && type === "video" ? <Video props={article}/> : article ? <Image props={article}/> : null
    }
    </div>
    {/* <HorizontalLine />
    <div className='row px-3' style={{fontSize: '2rem', opacity: '0.8', color:'#FF5C00'}}>
      <div className='col'>
        Read More
      </div>
    </div>
    <div className='row px-3' style={{fontSize: '1.2rem', opacity: '0.8', overflowX:"auto", whiteSpace:"nowrap"}}>
        <div className='col-12'>
        {articleList && articleList.length > 0 ? articleList.slice(0, 4).map((item, index)=>{
            return (
            <div key={index} onClick={(e)=>{handleNav(e, item.id, item.type)}} className="col-lg-3 col-sm-6 col-xs-12 py-3" style={{width:"100%", height:"auto", float:"left"}}>
              <ArticleModuleSmall contributors={item.contributors} title={item.title} heroImage={item.heroImage}
                subtitle={item.subtitle} />
            </div>
            )
            }):null}
        </div>
    </div>
    <HorizontalLine /> */}
    <Footer />
</div>
)
}