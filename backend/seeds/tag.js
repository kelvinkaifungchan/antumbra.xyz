exports.seed = function (knex) {  
  return knex('tag').del()
  .then(async()=>{
      return knex('tag').insert([{
        tag: 'Essay',
      },{
        tag: 'Photography',
      },{
        tag: 'Film',
      },{
        tag: 'Interview',
      },{
        tag: 'Event',
      },{
        tag: 'Art',
      },{
        tag: 'Big Data',
      },{
        tag: 'Surveillance',
      },{
        tag: 'Privacy',
      },{
        tag: 'Tech',
      },{
        tag: 'NFTs',
      },{
        tag: 'AI',
      },{
        tag: 'Techno-Optimism',
      },{
        tag: 'Markets',
      },{
        tag: 'Aesthetics',
      },{
        tag: 'Computation',
      },{
        tag: 'Value',
      },{
        tag: 'Automation',
      },{
        tag: 'Alternative Imaginaries',
      }, {
        tag: 'Planning'
      }, {
        tag: 'Abandonment'
      }, {
        tag: 'Proximity'
      }])
  })
  .then(()=>{
    return knex('article_tag').del();
})
.then(()=>{
    return knex('article_tag').insert([{
        article_id: 1,
        tag_id: 1,
      },{
        article_id: 1,
        tag_id: 7,
      },{
        article_id: 1,
        tag_id: 8,
      },{
        article_id: 1,
        tag_id: 9,
      },{
        article_id: 2,
        tag_id: 6,
      },{
        article_id: 2,
        tag_id: 10,
      },{
        article_id: 2,
        tag_id: 11,
      },{
        article_id: 2,
        tag_id: 12,
      },{
        article_id: 2,
        tag_id: 13,
      },{
        article_id: 2,
        tag_id: 14,
      },{
        article_id: 3,
        tag_id: 1,
      },{
        article_id: 3,
        tag_id: 12,
      },{
        article_id: 3,
        tag_id: 15,
      },{
        article_id: 3,
        tag_id: 16,
      },{
        article_id: 4,
        tag_id: 1,
      },{
        article_id: 4,
        tag_id: 15,
      },{
        article_id: 4,
        tag_id: 17,
      },{
        article_id: 4,
        tag_id: 18,
      },{
        article_id: 4,
        tag_id: 19,
      },{
        article_id: 5,
        tag_id: 3,
      },{
        article_id: 5,
        tag_id: 20,
      },{
        article_id: 5,
        tag_id: 21,
      },{
        article_id: 6,
        tag_id: 1,
      },{
        article_id: 6,
        tag_id: 6,
      },{
        article_id: 6,
        tag_id: 19,
      },{
        article_id: 6,
        tag_id: 22,
      }]);
  })
};