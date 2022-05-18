import { TitleBlock, TextBlock, BannerImageBlockCenter, QuoteBlock, SidePanel, ContributorBioBlock, BannerImageBlockStart, BannerImageBlockFill, TextBlockSparse } from "./articleBlocks";
import React, { useEffect, useState } from "react";
import { ArticleData } from "../types"

export const Text = ({props} : {props: ArticleData}) => {
    const [article, setArticle] = useState<ArticleData | null>(null);
    useEffect(() => {
      setArticle(props)
    },[props])

    return (
    <div className='px-3'>
        {article ? <SidePanel title={article.title} tags={article.tags} contributors={article.contributors} pdf={article.pdf}/> : null}
        {article ? <TitleBlock title={article.title} tags={article.tags} contributors={article.contributors} pdf={article.pdf}/> : null}
        {article ? article.articleBlocks.map((block, index) => {
          if (block.type === "text" && block.text) {
            return (
              <div key={index}>
              <TextBlock attachmentLink={block.attachmentLink} attachmentCaption={block.attachmentCaption} text={block.text}/>
              </div>
            )
          } else if (block.type === "textSparse" && block.text) {
            return (
              <div key={index}>
              <TextBlockSparse attachmentLink={block.attachmentLink} attachmentCaption={block.attachmentCaption} text={block.text}/>
              </div>
            )
           } else if (block.type === "bannerImageStart" && block.attachmentLink && block.attachmentCaption) {
            return (
              <div key={index}>
              <BannerImageBlockStart imageLink={block.attachmentLink} imageCaption={block.attachmentCaption} />
              </div>
            )
           } else if (block.type === "bannerImageCenter" && block.attachmentLink && block.attachmentCaption) {
            return (
              <div key={index}>
              <BannerImageBlockCenter imageLink={block.attachmentLink} imageCaption={block.attachmentCaption} />
              </div>
            )
           } else if (block.type === "bannerImageFill" && block.attachmentLink && block.attachmentCaption) {
            return (
              <div key={index}>
              <BannerImageBlockFill imageLink={block.attachmentLink} imageCaption={block.attachmentCaption} />
              </div>
            )
           } else if (block.type === "quote" && block.text) {
            return (
              <div key={index}>
                <QuoteBlock text={block.text}/>
              </div>
            )
          } else {
            return (null)
          }
        }) : null}
        {article && article.contributors ? <ContributorBioBlock contributors={article.contributors}/> : null}
    </div>
    )
    }