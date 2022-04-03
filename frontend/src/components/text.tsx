import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { TextBlock, FootnoteBlock, AuthorBioBlock } from './articleBlocks';
import { Link } from 'react-router-dom';

const textExample = {
    tags: ["Architecture", "Technology", "Networks"],
    contributors: "Tiziana Terranova and Ravi Sundaram",
    biographyBlocks: [{author: "Tiziana Terranova", text: "lectures and research the digital media cultures and politics in the Department of Human and Social Sciences at the University of Naples, 'L'Orientale'. She is the author of Network Culture: Politics for the Information Age (Pluto Press, 2004) and Hypersocial (University of Minnesota Press, forthcoming). She is a member of the free university network Euronomade and of the Robin Hood Minor Asset Management Cooperative."},
    {author: "Ravi Sundaram", text: "is a Professor at CSDS, Delhi, where he founded the Sarai program along with Ravi Vasudevan and Raqs Media Collective. Sundaram is the author of Pirate Modernity: Media Urbanism in Delhi (2010) and edited No Limits: Media Studies from India (2015). He is finishing his next book project on post-public media circulations and the question of the political."}],
    title: "Colonial Infrastructures and Techno-Social Networks",
    textBlocks: [{
        imageLink: "https://images.e-flux-systems.com/highway.jpg,1920",
        imageCaption: "Los Angeles, 2001. First Street bridge at bottom, Highway 101 at center, Cesar Chavez Bridge at center rear. Library of Congress Prints and Photographs Division, Washington, DC.",
        text: `The techno-social hypothesis concerns the idea that, over the last three decades or so, the technological and the social have become thoroughly enmeshed with each other. It also poses the question of how this new inseparability should be understood. The techno-social hypothesis is not about how, as Bernard Stiegler claimed, social media have bypassed “the traditional networks of proximity that have defined the social since time immemorial.” Neither is it about how technology has subsumed and colonized social life, and how this process might be reversed to gain access to a more authentic, embodied sociality. It is rather about the fundamental role played by “the social” in the modern age, and how contemporary digital and computational networks as technical beings do not just generate, as Gilbert Simondon suggested, a natural and technical milieu, but also a directly (techno-)social one.\r\n The techno-social hypothesis is thus premised on the idea that the social never possessed an intrinsic or preexisting reality, but rather what, with Michel Foucault, we might call a historical, that is a “transactional” one. Like sexuality, madness, or civil society, the social is real, although it has not always existed. It, too, was born “from the interplay of relations of power and everything which constantly eludes them at the interface … of governors and governed.” As a result of this history, the social assumed its three fundamental properties: a form of abstraction, the territory of government, and a conflictual political domain.`
    }, {
        imageLink: "https://images.e-flux-systems.com/Image_1_2.jpg,1600",
        imageCaption: 'Raqs Media Collective, Untold Intimacy of Digits, 2011. Archival trace, single-channel video projection, 47”. Photo courtesy the artists.',
        text: 'The social thus existed inasmuch as it was a fundamental part of modern Western European epistemologies and eventually also as part of its governmentalities. As a form of abstraction, it grounded the truth claims of the social sciences, which posited that it was possible to scientifically study human societies inasmuch as they presented quantitative and qualitative determinations. As part of what Denise Ferreira da Silva has called the power of the nomos, the social entailed a distinction between transparency and affectability, between the position of observers and observed. This epistemological function of the social (that is, its accounting for human social life as a distinct, measurable, and observable sphere of reality, endowed with its own patterns and regularities) was also indispensable to the other role that the social played. As Nikolas Rose put it, from the nineteenth to the mid-twentieth century, the social constituted the “territory of government,” that is, a “novel plane of territorialization [which] existed within, across, in tension with other spatializations (such as blood and territory; race and religion; town, region and nation).” At the same time, the social also had a third inflection, one that Raymond Williams defined as its “emphatic” one: one that explicitly opposed individual and especially individualist theories of societies. This is the social which, as Wendy Brown has put it, constitutes the foremost language and political domain “where subjections, abjections, and exclusions are lived, identified, protested and potentially rectified.” Inasmuch as it constituted a nexus of power/knowledge/subjectivation which functioned within both liberal and socialist governmentalities, the social was said to have come to its end in the late 1970s when a new political rationality—neoliberalism—displaced it with the more narrow notion of “community.” For postmodern philosophers such as Jean Baudrillard, the end of the social coincided with the rise of media, information, and capital coming together through the figure of the network. The circulatory logic of the Los Angeles highway system was Baudrillard’s favorite image for the end of the social in a space defined by circulation.'
    }],
    footnote: ['Bernard Stiegler, “The Most Precious Good in the Era of Social Technologies,” in Unlike Us Reader: Social Media Monopolies and Their Alternatives, ed. Geert Lovink and Miriam Rasch (Institute of Network Cultures, 2013), 16.', 'Gilbert Simondon, On the Mode of Existence of Technical Objects (University of Western Ontario, 1980).', 'Michel Foucault, The Birth of Biopolitics: Lectures at the Collège de France 1978–1979 (Palgrave Macmillan, 2010), 297.']
}

interface TextBlock {
    imageLink: string,
    imageCaption: string,
    text: string
}

interface TextBlockList extends Array<TextBlock>{}

interface AuthorBlock {
    author: string,
    text: string,
}

interface AuthorBlockList extends Array<AuthorBlock>{}

interface ArticleContent {
    tags: string[],
    contributors: string,
    title: string,
    textBlocks: TextBlockList,
    footnote: string[],
    authorBio: AuthorBlockList,
}

export const Text = () => {
    let params = useParams();
    const [articleContent, setArticleContent] = useState<ArticleContent | null>(null);

    // const getArticleFile = () => {
    //     axios(`http://localhost:8080/api/aarchitecture/article/?articleId=${params.id}`,{
    //         method: 'GET',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             withCredentials: true,
    //             mode: 'no-cors'
    //           }})
    //     .then((response: AxiosResponse)=>{
    //         console.log(response);
    //         setArticleContent(response.data)
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }
    // getArticleFile()

return (
<div className='px-3' style={{fontSize: '2rem'}}>
    <div className='row py-5'>
        <div className='col-3' style={{color: "#FF5C00", fontSize: '1.2rem'}}>
            Tag(s):<br />
            {textExample?textExample.tags.map((tag) => {
                return(
                    <div>
                        {tag} <br />
                    </div>
                )
            }):null}<br />
            
            Contributor(s):
            <div>{textExample?.contributors}</div>
            {/* {textExample?textExample.contributors.map((contributor, index) => {
                return(
                    <div key={index}>
                        {contributor} <br />
                    </div>
                )
            }):null} */}
            <br/>
            <div>Download PDF</div>
            <div>Share</div>
        </div>
        <div className='col-6' style={{color: "#FF5C00", fontSize: '4rem'}}>
            <div className='w-75'>
                {textExample?textExample.title:null}<br />
            </div>
        </div>
        <div className='col-3'>

        </div>
    </div>
    {textExample?textExample.textBlocks.map((text,index) => {
        return(
        <TextBlock key={index} imageLink={text.imageLink} imageCaption={text.imageCaption} text={text.text}/>
        )
    }):null}
    <FootnoteBlock references={textExample!.footnote}/>
    {
        textExample?textExample.biographyBlocks.map((text,index) => {
            return (
            <AuthorBioBlock key={index} author={text.author} text={text.text}/>
            )
        }):null
    }
</div>
)
}