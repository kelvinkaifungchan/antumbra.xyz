import { TitleBlock, TextBlock, BannerImageBlock, QuoteBlock } from "./articleBlocks";
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

export const Text = ({props} : {props: Article}) => {
    const [article, setArticle] = useState<Article | null>(null);
    useEffect(() => {setArticle(props)})

    console.log(article)

    return (
    <div className='px-3'>
        {article ? <TitleBlock title={article.title} tags={article.tags} contributors={article.contributors} pdf={article.pdf}/> : null}
        {article ? article.articleBlocks.map((block, index) => {
          if (block.type === "text" && block.text) {
            return (
              <div key={index}>
              <TextBlock imageLink={block.attachmentLink} imageCaption={block.attachmentCaption} text={block.text}/>
              </div>
            )
          } else if (block.type === "bannerImage" && block.attachmentLink && block.attachmentCaption) {
            return (
              <div key={index}>
              <BannerImageBlock imageLink={block.attachmentLink} imageCaption={block.attachmentCaption} />
              </div>
            )
          }
        }) : null}
    </div>
    )
    }