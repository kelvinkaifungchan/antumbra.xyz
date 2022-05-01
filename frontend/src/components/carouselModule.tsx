import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const imageSource = [
'https://www.dotcomseance.com/art/pets.com/guile.jpg',
'https://www.dotcomseance.com/art/alladvantage.com/guile.jpg',
'https://www.dotcomseance.com/art/bidland.com/guile.jpg'
]
interface imageSourceState {
imageUrl: string,
isOpen: boolean
}

export const CarouselModule = (props: any) => {
const [modalControl, setModalControl] = useState<any>(null);
    const [switcher, flipSwitch] = useState(false);
    useEffect(()=>{
    const imageSourceControl = imageSource.map((imageSource)=>{
    return {
    imageUrl: imageSource,
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
                    src={imageInfo.imageUrl} />
                <Modal centered fullscreen isOpen={imageInfo.isOpen} toggle={()=>modalSwitcher(i)}>
                    <img key={i} style={{ width:'100%' }} src={imageInfo.imageUrl} />
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