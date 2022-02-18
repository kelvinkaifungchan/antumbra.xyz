exports.seed = function (knex) {
    return knex("article").del()
    .then(async()=>{
        return knex("article").insert([{
            type: "text",
            authour: "Kevline Cosnor",
            title: "Dances with Wolfs",
            subtitle: "it dance with wolfs lol",
            datePublished: "today lor"
        },{
            type: "text",
            authour: "Kevline Cosnor",
            title: "Dances with Wolfs",
            subtitle: "it dance with wolfs lol",
            datePublished: "today lor"
        },{
            type: "text",
            authour: "Kevline Cosnor",
            title: "Dances with Wolfs",
            subtitle: "it dance with wolfs lol",
            datePublished: "today lor"
        },{
            type: "text",
            authour: "Kevline Cosnor",
            title: "Dances with Wolfs",
            subtitle: "it dance with wolfs lol",
            datePublished: "today lor"
        }]);
    })
    .then(()=>{
        return knex('attachment').del();
    })
    .then(()=>{
        return knex('attachment').insert([{
            article_id: 1,
            attachmentLink: 'https://google.com'
        },{
            article_id: 2,
            attachmentLink: 'https://google.com'
        },{
            article_id: 3,
            attachmentLink: 'https://google.com'
        }]);
    })
    .then(()=>{
        return knex('tag').del();
    })
    .then(()=>{
        return knex('tag').insert([{
            tag: 'wholesome',
        },{
            tag: 'romance',
        },{
            tag: 'big tits',
        }])
    })
    .then(()=>{
        return knex('article_tag').del();
    })
    .then(()=>{
        return knex('article_tag').insert([{
            article_id: 1,
            tag_id: 1
        }])
    })
};