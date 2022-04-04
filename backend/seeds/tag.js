exports.seed = function (knex) {  
  return knex('tag').del()
  .then(async()=>{
      return knex('tag').insert([{
        tag: 'Essays',
      },{
        tag: 'Photography',
      },{
        tag: 'Film',
      },{
        tag: 'Interviews',
      },{
        tag: 'Art',
      },{
          tag: 'Infrastructure',
      },{
          tag: 'Architecture',
      },{
          tag: 'Technology',
      },{
          tag: 'Photography',
      },{
          tag: 'Anthropocene',
      },{
        tag: 'Surveillance',
      },{
        tag: 'Archives',
      },{
        tag: 'Algorithms',
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
      }])
  })
};