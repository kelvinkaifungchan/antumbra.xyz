import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { TextBlock, FootnoteBlock, AuthorBioBlock } from './articleBlocks';
import { Link } from 'react-router-dom';

const textExample = {
    tags: ["Architecture", "Technology", "Networks", "Surveillance"],
    contributors: "Yeha Kim",
    biographyBlocks: [{author: "Yeha Kim", text: "lectures and research the digital media cultures and politics in the Department of Human and Social Sciences at the University of Naples, 'L'Orientale'. She is the author of Network Culture: Politics for the Information Age (Pluto Press, 2004) and Hypersocial (University of Minnesota Press, forthcoming). She is a member of the free university network Euronomade and of the Robin Hood Minor Asset Management Cooperative."}],
    title: "Data Warfare and the Warm War",
    textBlocks: [{
        imageLink: "https://aarchitecture.blob.core.windows.net/videos/ezgif.com-gif-maker.gif",
        imageCaption: "Demo of real-time CO2 movement visualisation AR application",
        text: "As we enter a hyper-consumerist era governed by “big data” and “surveillance capitalism”, data has become an all-powerful technocratic instrument in the negotiation of many socio-political sectors, including the negotiations within Climate Politics. According to the market intelligence agency IDC, global data reached up to an astonishing data cap of 18 zettabytes in 2018 with no signs of slowing down whatsoever. In the UK alone, there are over 1500 sites, which monitor air quality - these monitoring networks, in turn, continuously gather and process data in real-time. Although these networks continuously produce a wide range of both descriptive and exceedance statistics, not all data produced is easily accessible for the public realm, and neither does it remain unchallenged by other information sources. Both governments and high-technology corporations now compete to gather and analyze data, at the expense of their respective citizens’ and consumers’ health and privacy. It has become an ultimate quest to gather, process, and to manipulate as much data as one can for financial profit - to meet certain environmental quotas, such as UK Air Quality Objectives, EU Limit and Target Values, and Critical Loads . Data abstraction and spreading misinformation have become powerful tools for such agencies, and to objectively interpret available datasets has become an increasingly challenging task for the general populace."
        }, {
        text: 'Many new readers may be unfamiliar with this open hostility, as it has been cleverly masked by numerous agencies involved in this conflict. A clear example of this is the UK’s commitment to reduce greenhouse gas emissions to net zero by 2050 to meet the suggested quotas by the National Air Quality Standards. These discussions, however, cleverly avoids the discussions of the ever-increasing offshoring of CO2 emissions. This includes discussions of importing carbon-intensive goods and electricity from overseas - during the “coal free” fortnight in 2019, no domestic coal was used to power the UK grid, however, the UK imported an estimated 40.5 GWH of Dutch coal-generated electricity. The data and the information involved in this event was cleverly avoided by the apparatus of ubiquity and the promises of a “greener tomorrow”. Energy and Infrastructure analyst Tony Lodge further describes  this in his lecture “The Great Carbon Swindle” in regards to how the UK is able to cleverly mask the emissions involved in supply chains and how it avoids carbon levies through layers of convoluted bureaucracy. This has become much more imminent in recent years, as the UK now imports six times more electricity than it exports, which is currently exempt from carbon levies. This, fundamentally, confuses the general populace, who cannot know the actual source of electricity that they are using. In short, this has become an open hostility to acquire the “real picture” of UK sustainability.'
    }, {
        text: 'The same principle applies to the UK’s construction and agricultural sectors. Greenhouse gas emissions from imported goods and raw materials, e.g. steel, coal, brick, etc. are currently exempt in UK statistics, thus allowing the UK to continue using carbon-intensive energy and goods, while appearing to meet both domestic and EU emission targets. A clear example of this is the UK promise of shutting down domestic coal pits - in truth, millions of tonnes of coal were imported overseas over the last few years for industrial use, thereby hiding the real picture of UK greenhouse gas emissions. Additional emissions costs incurred by transportation of these goods were also exempt in these statistics, thus providing a dishonest image of UK gas emissions. This data warfare has ultimately led to an intense discrimination against domestic UK companies (which are subject to climate levies), compared to their overseas competitors. The manipulation and abstraction of data have become powerful tools to direct domestic climate change policies, which may, in fact, be detrimental to the UK in the long run.'
    }, {
        text: 'Although “free goods”, such as the air that we breathe, has remained as a non-commodity, the data surrounding it has either become private or commercialized. Although most Londoners will agree that monitoring air pollutants is key to monitoring climate change in cities, very few are able to answer the question “Where does this data go?” Some say the government, and others say Google, or some other high-technology corporation. Quick Google-searches lead to websites, such as the London Air Quality Network, which provides abstractified air pollutant maps, either in “real-time” or on an annual basis. However, on closer inspection, a new question arises: “Why is the data abstractified?” Abstract data maps imply that detailed data is unavailable for the public realm, and can only be requested either via filling out forms or via purchase. Here, we see that “free goods” have become questionable for consumption; it renders requirements for basic human needs as commodities, while leaving “free goods” untouched as non-commodities.'
    }, {
        text: 'Unexplained splotches and missing data are somewhat common in such abstracted datasets, such as the modeled background pollution data maps. This includes background pollution maps at 1 x 1 km resolution, which are modeled under Defra’s MAAQ (Modeling of Ambient Air Quality) contract to fulfill UK’s CO2 reporting obligations to the EU. Although this data is publicly available for research applications (e.g. university studies and public health surveys), there are key grid squares, which are currently labeled as “missing”. To complement this missing data, UK’s Defra suggests to utilize alternative Local Authority-specific maps, which are based on the same CO2 monitoring and modeling tools. This convoluted bureaucracy of recording and managing data maps has gradually become a key hurdle in understanding the “real picture” of UK sustainability. However, the general populace can do very little, but to accept the provided abstracted data. The question of missing data, in turn, raises additional questions - why is the data missing to begin with? '
    }]
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
    footnote?: string[],
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