import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Article } from '../pages/Home'
const imageSource = [
    'https://aarchitecture.blob.core.windows.net/videos/220403_MR_Surfacescape%20No.%205%20-%20MX4_2.png',
    'https://aarchitecture.blob.core.windows.net/videos/220403_MR_Leonora%20Carrington%20and%20Max%20Ernst%20(1937)%20by%20Lee%20Miller.jpg',
    'https://img.artrabbit.com/events/joanna-zylinska-pictures-from-the-end-of-the-world-nonhuman-photography/images/jm8WmIUweF9u/1000x789/01-Brown-tailed-Moth-Euproctis-chrysorrhoea.jpg'
]
interface imageSourceState {
    imageUri: string,
    isOpen: boolean
}

export const CarouselModule = (props: any) => {
    const [modalControl, setModalControl]  = useState<any>(null);
    const [switcher, flipSwitch] = useState(false);
    useEffect(()=>{
        const imageSourceControl = imageSource.map((imageSource)=>{
            return {
                imageUri: imageSource,
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
        <Carousel 
        width="100%" 
        autoPlay
        infiniteLoop 
        dynamicHeight 
        showStatus={false} 
        showThumbs={false} 
        showIndicators={false}
        onClickItem={(index)=> modalSwitcher(index)}
        >
            {modalControl?
            modalControl.map((imageInfo: imageSourceState, i: number) => {
                return(
                    <>
                    <img key={i} style={{ width:'100%' }} src={imageInfo.imageUri}/>
                    <Modal centered fullscreen isOpen={imageInfo.isOpen} toggle={()=>modalSwitcher(i)}>
                        <img key={i} style={{ width:'100%' }} src={imageInfo.imageUri} />
                    </Modal>
                    </>
                )
            }):
            null
            }
                    
        </Carousel>
    )
}