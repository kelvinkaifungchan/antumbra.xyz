import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Article } from '../pages/Home'

export const CarouselModule = (props:any) => {
    console.log(props)
    return (
        <Carousel width="100%" autoPlay infiniteLoop centerMode dynamicHeight showStatus={false} showThumbs={false} centerSlidePercentage={100} showIndicators={false}>
            {props.imageSource.map((article:any)=>{
                console.log(article)
                return (
                    <img style={{maxHeight:'100%'}} src={article.heroImage} />
                )
            })}
            </Carousel>
    )
}