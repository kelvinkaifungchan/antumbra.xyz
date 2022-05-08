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
      }, {
        tag: 'Markets'
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
        tag_id: 7,
      }, {
        article_id: 1,
        tag_id: 10,
      }, {
        article_id: 1,
        tag_id: 11,
      }, {
        article_id: 1,
        tag_id: 18,
      }, {
        article_id: 2,
        tag_id: 5,
      }, {
        article_id: 2,
        tag_id: 8,
      }, {
        article_id: 2,
        tag_id: 12,
      },{
        article_id: 2,
        tag_id: 20,
      },{
        article_id: 3,
        tag_id: 1,
      },{
        article_id: 3,
        tag_id: 5,
      },{
        article_id: 3,
        tag_id: 19,
      },{
        article_id: 3,
        tag_id: 20,
      },{
        article_id: 4,
        tag_id: 3,
      },{
        article_id: 4,
        tag_id: 6,
      },{
        article_id: 4,
        tag_id: 17,
      },{
        article_id: 5,
        tag_id: 1,
      }]);
  })
};