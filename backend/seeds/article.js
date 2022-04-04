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
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/220403_GGV_A.jpg",
            datePublished: "3rd April 2022"
        }, {
            title: "Tate Realisms",
            type: "text",
            subtitle: "A question at the forefront of my head when I’m in an art gallery is: what shoes do people wear to galleries? Do they go for comfort? Do they go garmy? Do they veil their pretention with knackered reeboks? Do they try to impress a crowd that might be inclined to gag at an Ugg or side-eye a slipper?",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/220403_MR_Leonora%20Carrington%20and%20Max%20Ernst%20(1937)%20by%20Lee%20Miller.jpg",
            datePublished: "3rd April 2022"
        }, {
            title: "Surfacescapes",
            type: "image",
            subtitle: "As Mark Zuckerberg beckons us over into his van marked ‘Metaverse’, the architectural profession looks to go virtual and I literally lose the plot, I’ve decided to go meta-hiking and make art. Art I do not own, cannot monetise and is sincerely wrong.",
            heroImage:"https://aarchitecture.blob.core.windows.net/videos/220403_MR_Surfacescape%20No.%205%20-%20MX4_2.png",
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
            attachmentLink: 'https://aarchitecture.blob.core.windows.net/videos/ezgif.com-gif-maker.gif',
            attachmentCaption: 'text',
            text: 'In the UK alone, there are over 1500 sites, which monitor air quality - these monitoring networks, in turn, continuously gather and process data in real-time. Although these networks continuously produce a wide range of both descriptive and exceedance statistics, not all data produced is easily accessible for the public realm, and neither does it remain unchallenged by other information sources.'
        }]);
    })
};