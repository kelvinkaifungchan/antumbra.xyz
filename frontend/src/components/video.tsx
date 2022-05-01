import { TitleBlockB, TextBlock, BannerImageBlock, VideoBlock, TextBlockRight } from "./articleBlocks";
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
    pdf: string,
    datePublished: string,
    tags: Array<Tag>,
    articleBlocks: Array<ArticleBlock>
}

export const Video = ({props} : {props: Article}) => {
    const [article, setArticle] = useState<Article | null>(null);
    useEffect(() => {setArticle(props)})

    return (
    <div className='px-3'>
        {article ? article.articleBlocks.map((block, index) => {
          if (block.type === "textRight" && block.text) {
            return (
              <div key={index}>
              <TextBlockRight text={block.text} />
              </div>
            )
          } else if (block.type === "bannerImage" && block.attachmentLink && block.attachmentCaption) {
            return (
              <div key={index}>
              <BannerImageBlock imageLink={block.attachmentLink} imageCaption={block.attachmentCaption} />
              </div>
            )
          } else if (block.type === "video" && block.attachmentLink) {
            return (
              <div key={index}>
                <VideoBlock videoLink={block.attachmentLink}/>
              </div>
            )
          } else if (block.type === "titleBlockB" && article) {
            return (
              <div>
                <TitleBlockB title={article.title} tags={article.tags} contributors={article.contributors} text={block.text}/>
              </div>
            )
          } else {
            return
          }
        }) : null}
    </div>
    )
    }