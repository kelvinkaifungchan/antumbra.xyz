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
        tag: 'Art',
      },{
          tag: 'Infrastructure',
      },{
          tag: 'Architecture',
      },{
          tag: 'Tech',
      },{
          tag: 'Photography',
      },{
          tag: 'Anthropocene',
      },{
        tag: 'Surveillance',
      },{
        tag: 'Archives',
      },{
        tag: 'NFTs',
      },{
        tag: 'Computation',
      },{
        tag: 'Earth Systems',
      },{
        tag: 'Robotics',
      },{
        tag: 'Growth',
      },{
        tag: 'Urbanisation',
      },{
        tag: 'Data',
      },{
        tag: 'Museums',
      }])
  })
  .then(()=>{
    return knex('article_tag').del();
})
.then(()=>{
    return knex('article_tag').insert([{
        article_id: 1,
        tag_id: 1,
      }, {
        article_id: 1,
        tag_id: 8,
      }, {
        article_id: 1,
        tag_id: 11,
      }, {
        article_id: 1,
        tag_id: 12,
      }, {
        article_id: 1,
        tag_id: 19,
      }, {
        article_id: 2,
        tag_id: 5,
      },{
        article_id: 2,
        tag_id: 8,
      },{
        article_id: 2,
        tag_id: 13,
      },{
        article_id: 6,
        tag_id: 1,
      },{
        article_id: 6,
        tag_id: 5,
      },{
        article_id: 6,
        tag_id: 20,
      }]);
  })
};