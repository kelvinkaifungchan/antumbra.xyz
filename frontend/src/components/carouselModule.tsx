import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

interface ImageSourceState {
imageLink: string,
imageCaption: string,
isOpen: boolean
}

interface CarouselImage {
id: number;
article_id: number;
imageLink?: string;
imageCaption?: string;
}

export const CarouselModule = ({imageSource}: {imageSource:CarouselImage[]}) => {
    return (
    <div className='row py-4 d-flex align-content-center' style={{minHeight: "80vh", overflowX:"auto", whiteSpace:"nowrap"}}>
        <div>
            {imageSource.map((image, index) => {
            return(
            <img key={index} style={{maxWidth:'100%', maxHeight:'80vh', width:'auto', height:'auto'}}
                src={image.imageLink} />
            )
            })}
        </div>
    </div>

    )
    }