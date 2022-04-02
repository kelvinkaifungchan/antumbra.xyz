import React from 'react';
import ReactPlayer from 'react-player'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { TextBlock } from './textBlock';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const photographyExample = {
    tags: ["Architecture", "Photography"],
    contributors: ["Bas Princen"],
    title: "Gold Standard",
    textBlocks: [{text: "Photographer Bas Princen has published a new book looking at the visual and personal backstory to one particular photograph, seen above, “Ringroad (Houston),” from 2005. Called The Construction of an Image, the book is also the final publication from Bedford Press. It is, the book’s editor, Vanessa Norwood, writes, “an arresting image: an ordinary American office block transformed by Princen’s lens into a glowing golden cube cut by the horizon, acting as both mirror and container; the reflected landscape of trees confined within its gridded exterior.” As part of his work process, Princen assembles small research notebooks of images he is thinking of or influenced by during the production of certain images; The Construction of an Image includes those along with other examples of Princen’s work created at the same time. As such, it offers a sustained glimpse of how Princen operates, how visual concepts are formed, and how analogies are identified and tracked from one building or landscape to another. In the case of “Ringroad (Houston),” these precedent images range from engravings by Albrecht Dürer—fitting the world into a perspectival grid—to photographs taken inside geodesic domes, and from corporate lobbies to archaeological earthworks. These represent moments or sites where solitary structures, all-encompassing geometric frames or grids, and uneasy distinctions between foreground and background predominate. I’m proud to have a short essay featured in the book, alongside texts by editor Vanessa Norwood, architect Kersten Geers, curator Moritz Küng, and a summary by Princen himself. Geers, in particular, swings for the fences with his assessment of the photo, writing, “Bas Princen’s photograph Ringroad (Houston) encapsulates, through its simple presence and curious ambiguity, almost everything I feel we can ever say about architecture,” continuing over the rest of his essay to explain how the photo went on to influence Geers’s own architectural design work. My own look at the image is in the context of Princen’s output, from Los Angeles to Dubai, focusing on his images in which “there is often an extraordinary, building-size geometric shape in the center of the frame, yet it is not always clear if it can be described as architecture. (…) Rather, these abstract objects—sometimes mirrored, sometimes with no visible points of entry—function more like undeclared monuments with no clear subject of commemoration. They are, in a sense, both unexplained and inexplicable.” If you’re curious to see a slightly different sort of approach, Princen’s photos are also—as of yesterday—on display at the Met Breuer museum in New York City. In a show called Breuer Revisited, photographers Luisa Lambri and Princen both offer their own distinctive visual analyses of four buildings designed by Marcel Breuer. “Evoking minimalism and abstraction,” the museum explains, “Lambri creates images that examine the dialogue between interior and exterior, and the interaction between surface and light. Princen investigates and reframes urban and rural spaces through documenting the concept of post-occupancy, or the evolution of a building and its enduring relevance.” The show is open until May 21, 2017; The Construction of an Image is available through the Architectural Association. Photographer Bas Princen has a fantastic new exhibition, called “Refuge,” up at Storefront for Art and Architecture. Tonight, Tuesday, May 11, Princen will be at the gallery for a public event and opening, and it’s well worth checking out."
    }]
}

export const Photography = () => {
    let params = useParams();
    const getArticleFile = () => {
        axios(`http://localhost:8080/api/aarchitecture/article/?articleId=${params.id}`,{
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                withCredentials: true,
                mode: 'no-cors'
              }})
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    getArticleFile()
return (
<div className='px-3 pb-5' style={{fontSize: '1.5rem'}}>
<div className='row pb-4'>
    </div>
    <div className='row pb-5'>
        <div className='col-6' style={{color:"#FF5C00", fontSize: '3rem'}}>
            {photographyExample.title}
        </div>
        <div className='col-3'>
            <div style={{fontSize: '1.2rem', color:"#FF5C00"}}>
                Tag(s):<br />
                {photographyExample.tags.map((tag) => {
                    return(
                        <div>
                            {tag}<br/>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='col-3'>
            <div style={{fontSize: '1.2rem', color:"#FF5C00"}}>
                Contributor(s):<br />
                {photographyExample.contributors.map((contributor) => {
                    return (
                        <div>
                            {contributor}
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    {photographyExample.textBlocks.map((text,index) => {
        return(
        <TextBlock key={index} text={text.text}/>
        )
    })}
</div>
)
}