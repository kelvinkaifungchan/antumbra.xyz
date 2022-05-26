exports.seed = function (knex) {
    return knex("article").del()
    .then(async()=>{
        return knex("article").insert([{
            title: "Data Warfare and the Warm War",
            type: "text",
            subtitle: "In the UK alone, there are over 1500 sites, which monitor air quality - these monitoring networks, in turn, continuously gather and process data in real-time. Although these networks continuously produce a wide range of both descriptive and exceedance statistics, not all data produced is easily accessible for the public realm, and neither does it remain unchallenged by other information sources.",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/ezgif.com-gif-maker.gif",
            datePublished: "May 2022"
        }, {
            title: "Dotcomseance",
            type: "image",
            subtitle: "Dotcom Séance is an on-chain spiritism NFT session to revive ghosts of companies that crashed in the dot-com bubble.",
            heroImage:"https://pbs.twimg.com/media/FG0JjTxXwA0kM90.jpg:large",
            datePublished: "May 2022"
        }, {
            title: "Even An AI Could Do That",
            type: "text",
            subtitle: "An excerpt taken from Artificial Aesthetics. A critical guide to AI, media and design by Lev Manovich and Emanuele Arielli",
            heroImage:"https://antumbra-media.s3.eu-west-2.amazonaws.com/220526_LevManovich_AIAesthetics.jpeg",
            datePublished: "May 2022"
        }, {
            title: "Does Photography Have A Future?",
            type: "text",
            subtitle: "More images are being produced, shared and seen today than ever in history. We are both constantly photographing and being photographed, with professional-level devices shrunk to a pocket size and seemingly infinite ‘cloud’ storage available at our constant disposal. The posing of the question, ‘Does photography have a future?’, may therefore seem premature or plainly absurd, given the extreme popularity of the photographic medium. ",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/Performing-Planetarity-Zylinska.jpg",
            datePublished: "May 2022"
        }, {
            title: "Crumbling Land",
            type: "video",
            subtitle: "The project explores the intentional abandonment of the Jeffersonian Grid, proposing that existing trends of abandonment and divestment can be strategically utilized for climate change adaptation.",
            heroImage:"https://testingbucketwebdev.s3.ap-southeast-1.amazonaws.com/SMALL_Rewilding_3.jpg",
            datePublished: "May 2022"
        }, {
            title: "Tate Realisms",
            type: "text",
            subtitle: "A question at the forefront of my head when I’m in an art gallery is: what shoes do people wear to galleries? Do they go for comfort? Do they go garmy? Do they veil their pretention with knackered reeboks? Do they try to impress a crowd that might be inclined to gag at an Ugg or side-eye a slipper?.",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/220403_MR_Leonora%20Carrington%20and%20Max%20Ernst%20(1937)%20by%20Lee%20Miller.jpg",
            datePublished: "May 2022"
        },]);
    })
}