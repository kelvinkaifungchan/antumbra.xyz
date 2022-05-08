import { TitleBlockB, TextBlockRight} from "./articleBlocks";
import React, { useEffect, useState } from "react";
import { CarouselModule } from "../components/carouselModule";
import { ArticleData} from "../types"

export const Image = ({props} : {props: ArticleData}) => {
    const [article, setArticle] = useState<ArticleData | null>(null);
    const [modalControl, setModalControl] = useState(false);
    useEffect(() => {
      setArticle(props)
    })

    return (
    <div className="px-3">
        {article && article.carousel ? <CarouselModule imageSource={article.carousel}/> : null}
        {article ? <TitleBlockB title={article.title} tags={article.tags} contributors={article.contributors}/> : null}
        {article ? article.articleBlocks.map((block, index) => {
          if (block.type === "textRight" && block.text) {
            return (
              <div key={index}>
              <TextBlockRight text={block.text} />
              </div>
            )
          } else {
            return
          }
        }) : null}
    </div>
    )
    }