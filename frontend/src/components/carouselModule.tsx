import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

interface imageSourceState {
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
    const [modalControl, setModalControl] = useState<any>(null);
    const [switcher, flipSwitch] = useState(false);
    useEffect(()=>{
    const imageSourceControl = imageSource.map((imageSource)=>{
    return {
    imageLink: imageSource.imageLink,
    imageCaption: imageSource.imageCaption,
    isOpen: false
    }
    })
    setModalControl(imageSourceControl);
    },[])

    const modalSwitcher = (index: number) => {
    modalControl[index].isOpen = !modalControl[index].isOpen;
    flipSwitch(!switcher)
    }
    return (
    <div className='row py-4'>
        <div style={{background:"#ffffff0f", borderRadius:"20px"}}>
        <Carousel width="100%" autoPlay infiniteLoop dynamicHeight showStatus={false} showThumbs={false}
            showIndicators={false} onClickItem={(index)=> modalSwitcher(index)}
            >
            {modalControl?
            modalControl.map((imageInfo: imageSourceState, i: number) => {
            return(
            <>
                <img key={i} style={{maxWidth:'100%', maxHeight:'80vh', minHeight:'80vh', width:'auto', height:'auto'}}
                    src={imageInfo.imageLink} />
                <Modal centered fullscreen isOpen={imageInfo.isOpen} toggle={()=>modalSwitcher(i)}>
                    <img key={i} style={{ width:'100%' }} src={imageInfo.imageLink} />
                </Modal>
            </>
            )
            }):
            null
            }
        </Carousel>
        </div>
    </div>

    )
    }