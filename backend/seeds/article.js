exports.seed = function (knex) {
    return knex("article").del()
    .then(async()=>{
        return knex("article").insert([{
            title: "Data Warfare and the Warm War",
            type: "text",
            subtitle: "In the UK alone, there are over 1500 sites, which monitor air quality - these monitoring networks, in turn, continuously gather and process data in real-time. Although these networks continuously produce a wide range of both descriptive and exceedance statistics, not all data produced is easily accessible for the public realm, and neither does it remain unchallenged by other information sources.",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/ezgif.com-gif-maker.gif",
            datePublished: "22nd March 2022"
        }, {
            title: "Dotcomseance",
            type: "image",
            subtitle: "Twenty-one dotcom era companies have been summoned for revival. Each company includes an ENS domain, a new logo-NFT designed by Guile Twardowski—the artist behind Cryptokitties—and a suite of hidden text-to-image logo-NFTs by Cosmographia that Guile drew inspiration from.",
            heroImage:"https://pbs.twimg.com/media/FG0JjTxXwA0kM90.jpg:large",
            datePublished: "1st April 2022"
        }, {
            title: "The Future of Media",
            type: "text",
            subtitle: "An investigation of the future of various media industries and technologies that considers how media shape our future. How do we combat post-truth in the news? Are social media influencers the journalists of today? What is it like to live in a smart city? Does AI really change 'everything'?",
            heroImage:"https://img.artrabbit.com/events/joanna-zylinska-pictures-from-the-end-of-the-world-nonhuman-photography/images/jm8WmIUweF9u/1000x789/01-Brown-tailed-Moth-Euproctis-chrysorrhoea.jpg",
            datePublished: "3rd April 2022"
        }, {
            title: "Sci-Fi Imaginaries",
            type: "image",
            subtitle: "Colliding Hollywood sci-fi imaginaries with the realities of colonisation in the Americas",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/220404_GGV_1_H.gif",
            datePublished: "3rd April 2022"
        }, {
            title: "Artificial Aesthetics",
            type: "text",
            subtitle: "A critical guide to AI, media, and design",
            heroImage:"https://3.bp.blogspot.com/-ZMxKkKWJIL0/W5rBMxVtXPI/AAAAAAACcrc/ESMzCc7Q_HEepOCC9DrFxJY_6YM7ynLDgCLcBGAs/s1600/AI__book_cover_2_jpg.jpg",
            datePublished: "3rd April 2022"
        },{
            title: "Tate Realisms",
            type: "text",
            subtitle: "A question at the forefront of my head when I’m in an art gallery is: what shoes do people wear to galleries? Do they go for comfort? Do they go garmy? Do they veil their pretention with knackered reeboks? Do they try to impress a crowd that might be inclined to gag at an Ugg or side-eye a slipper?",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/220403_MR_Leonora%20Carrington%20and%20Max%20Ernst%20(1937)%20by%20Lee%20Miller.jpg",
            pdf: "https://aarchitecture.blob.core.windows.net/videos/220404_MR_TateRealisms.pdf",
            datePublished: "3rd April 2022"
        }, {
            title: "Surfacescapes",
            type: "image",
            subtitle: "As Mark Zuckerberg beckons us over into his van marked ‘Metaverse’, the architectural profession looks to go virtual and I literally lose the plot, I’ve decided to go meta-hiking and make art. Art I do not own, cannot monetise and is sincerely wrong.",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/220403_MR_Surfacescape%20No.%205%20-%20MX4_2.png",
            pdf: "https://aarchitecture.blob.core.windows.net/videos/220404_MR_Surfacescapes.pdf",
            datePublished: "3rd April 2022"
        }]);
    })
    .then(()=>{
        return knex('articleBlock').del();
    })
    .then(()=>{
        return knex('articleBlock').insert([{
            article_id: 1,
            type: 'text',
            text: 'As we enter a hyper-consumerist era governed by “big data” and “surveillance capitalism”, data has become an all-powerful technocratic instrument in the negotiation of many socio-political sectors, including the negotiations within Climate Politics. According to the market intelligence agency IDC, global data reached up to an astonishing data cap of 18 zettabytes in 2018 with no signs of slowing down whatsoever. In the UK alone, there are over 1500 sites, which monitor air quality - these monitoring networks, in turn, continuously gather and process data in real-time. Although these networks continuously produce a wide range of both descriptive and exceedance statistics, not all data produced is easily accessible for the public realm, and neither does it remain unchallenged by other information sources. Both governments and high-technology corporations now compete to gather and analyze data, at the expense of their respective citizens’ and consumers’ health and privacy. It has become an ultimate quest to gather, process, and to manipulate as much data as one can for financial profit - to meet certain environmental quotas, such as UK Air Quality Objectives, EU Limit and Target Values, and Critical Loads . Data abstraction and spreading misinformation have become powerful tools for such agencies, and to objectively interpret available datasets has become an increasingly challenging task for the general populace.'
        }, {
            article_id: 1,
            type: 'text',
            text: 'Many new readers may be unfamiliar with this open hostility, as it has been cleverly masked by numerous agencies involved in this conflict. A clear example of this is the UK’s commitment to reduce greenhouse gas emissions to net zero by 2050 to meet the suggested quotas by the National Air Quality Standards. These discussions, however, cleverly avoids the discussions of the ever-increasing offshoring of CO2 emissions. This includes discussions of importing carbon-intensive goods and electricity from overseas - during the “coal free” fortnight in 2019, no domestic coal was used to power the UK grid, however, the UK imported an estimated 40.5 GWH of Dutch coal-generated electricity. The data and the information involved in this event was cleverly avoided by the apparatus of ubiquity and the promises of a “greener tomorrow”. Energy and Infrastructure analyst Tony Lodge further describes  this in his lecture “The Great Carbon Swindle” in regards to how the UK is able to cleverly mask the emissions involved in supply chains and how it avoids carbon levies through layers of convoluted bureaucracy. This has become much more imminent in recent years, as the UK now imports six times more electricity than it exports, which is currently exempt from carbon levies. This, fundamentally, confuses the general populace, who cannot know the actual source of electricity that they are using. In short, this has become an open hostility to acquire the “real picture” of UK sustainability.'
        }, {
            article_id: 1,
            type: 'text',
            text: 'The same principle applies to the UK’s construction and agricultural sectors. Greenhouse gas emissions from imported goods and raw materials, e.g. steel, coal, brick, etc. are currently exempt in UK statistics, thus allowing the UK to continue using carbon-intensive energy and goods, while appearing to meet both domestic and EU emission targets. A clear example of this is the UK promise of shutting down domestic coal pits - in truth, millions of tonnes of coal were imported overseas over the last few years for industrial use, thereby hiding the real picture of UK greenhouse gas emissions. Additional emissions costs incurred by transportation of these goods were also exempt in these statistics, thus providing a dishonest image of UK gas emissions. This data warfare has ultimately led to an intense discrimination against domestic UK companies (which are subject to climate levies), compared to their overseas competitors. The manipulation and abstraction of data have become powerful tools to direct domestic climate change policies, which may, in fact, be detrimental to the UK in the long run.'
        },{
            article_id: 1,
            type: 'text',
            text: 'Although “free goods”, such as the air that we breathe, has remained as a non-commodity, the data surrounding it has either become private or commercialized. Although most Londoners will agree that monitoring air pollutants is key to monitoring climate change in cities, very few are able to answer the question “Where does this data go?” Some say the government, and others say Google, or some other high-technology corporation. Quick Google-searches lead to websites, such as the London Air Quality Network, which provides abstractified air pollutant maps, either in “real-time” or on an annual basis. However, on closer inspection, a new question arises: “Why is the data abstractified?” Abstract data maps imply that detailed data is unavailable for the public realm, and can only be requested either via filling out forms or via purchase. Here, we see that “free goods” have become questionable for consumption; it renders requirements for basic human needs as commodities, while leaving “free goods” untouched as non-commodities.'
        },{
            article_id: 1,
            type: 'text',
            text: 'This has become particularly evident in London, where raw data is very rarely accessible for the general populace. Processed data sets and abstract data maps of carbon dioxide are now widely accessible through the London Datastore and the UK NAEI (National Atmospheric Emissions Inventory) at no to little cost whatsoever, however, this data is limited. Other datasets provided by government networks are subject to OGL (Open Government License), and under the constraints of OGL, numerous agencies are able to combine their data with government-licensed datasets to exploit this data both commercially and non-commercially. They are able to adapt, manipulate, and publish this data in conjunction with their own product and/or application; thus,  it becomes somewhat easy to spread misinformation under the guise of “government-licensed datasets.” In addition, real-time measurements of CO2 levels in the UK are almost always processed and abstractified, provided in either monthly or yearly intervals. '
        },{
            article_id: 1,
            type: 'bannerImage',
            attachmentLink: 'https://aarchitecture.blob.core.windows.net/videos/ezgif.com-gif-maker.gif',
            attachmentCaption: 'Demo of AR application visualising movement of CO2'
        },{
            article_id: 1,
            type: 'text',
            text: 'Unexplained splotches and missing data are somewhat common in such abstracted datasets, such as the modeled background pollution data maps. This includes background pollution maps at 1 x 1 km resolution, which are modeled under Defra’s MAAQ (Modeling of Ambient Air Quality) contract to fulfill UK’s CO2 reporting obligations to the EU. Although this data is publicly available for research applications (e.g. university studies and public health surveys), there are key grid squares, which are currently labeled as “missing”. To complement this missing data, UK’s Defra suggests to utilize alternative Local Authority-specific maps, which are based on the same CO2 monitoring and modeling tools. This convoluted bureaucracy of recording and managing data maps has gradually become a key hurdle in understanding the “real picture” of UK sustainability. However, the general populace can do very little, but to accept the provided abstracted data. The question of missing data, in turn, raises additional questions - why is the data missing to begin with?'
        },{
            article_id: 1,
            type: 'text',
            text: 'Here, one can observe that the dispossession of the information surrounding “free goods”, however, this process of dispossession is no longer a mere abstraction. It is conducted through well-thought out operational practices, where either limited raw data or abstracted datasets are presented as full datasets to the general populace. This seemingly transparent attitude taken by various government and environmental agencies cannot be anything further than the truth. The datafication of “free goods” ultimately leads to stores of privatized raw data and unaltered knowledge, only accessible by a few. It illustrates that the apparatus of ubiquity is, in fact, a method to overcome the hurdles involved in the general populace’s fundamental human rights to non-commodities. This is further accomplished by the movement of data, as illustrated by NAEI’s FAQ section, under the question “Are there UK emission maps for previous years?”. According to the NAEI, “UK emission maps are only available for the latest inventory year [...] [and they] do not generate a time series of emissions maps for trend analysis.” Where then does the data for previous years go? Recalcitrant citizens will only number in a few; agencies will always argue that the general populace will always have access to both raw (albeit limited) and abstracted data, which they argue, is “more than enough”. No moral or legal constraints will stand in the way for such agencies, as long as they are ubiquitous enough to satisfy the general populace.'
        },{
            article_id: 1,
            type: 'text',
            text: 'It is no surprise that “big data” capitalism has begun to meticulously catalog “free goods”, thereby establishing “non-commodities” as potential commodities in the near future. Although the datafication of environmental “free goods" has shed light on the ongoing issues of climate change, the manipulation and abstraction of datasets has ultimately led to an inward sense of valid truth and moral authority. The general populace is currently divided in terms of responding to the ongoing challenges of climate change. Full and objective datasets have been rendered useless in favor of rejection of genuine reciprocity. It offers a new template for future climate change policies, where the “real picture” is forfeit for others’ profit. It has become much more difficult to discern the truth in the fog of utopian rhetoric conjured by numerous profit-driven agencies. In short, this becomes a question of the ownership of environmental “free goods” data? Who has access to it? Who knows? Who decides who knows? Failure to answer these questions will inevitably lead to more hidden pollution, insecure UK power supplies and, ultimately, more global greenhouse gas emissions.'
        },{
            article_id: 1,
            type: 'text',
            text: 'It becomes self-evident that the “Warm War” is an open hostility between the general populace and numerous governmental and private agencies for the access of data. The modus operandi of this war is through the collection, abstraction and the movement of data. It is a negotiation to satisfy both sides of the conflict without committing to tangible solutions and concrete targets. A new transparent approach must be implemented to level the global playing field and to cut overall emissions worldwide. The raw data of “free goods” must be circulated among the general populace to incentivise renewed discussions, which, in turn, may lead to decisive action.'
        },]);
    })
};