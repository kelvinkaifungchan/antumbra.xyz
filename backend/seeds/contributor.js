exports.seed = function (knex) {
  return knex("contributor").del()
  .then(async()=>{
      return knex("contributor").insert([{
          name: "Yeha Kim",
          bio: "Yeha Kim is a visual effects artist with a demonstrated history of working in the design industry. Skilled in Adobe Photoshop, C#, Maya, Python (Programming Language), and Computational Fluid Dynamics (CFD). Strong arts and design professional with a Bachelor's degree focused in Architecture from The Bartlett School of Architecture, UCL.",
      }, {
        name: "Simon Denny",
        bio: "Simon Denny is a contemporary artist based in Berlin. He represented New Zealand at the 2015 Venice Biennale. Since 2018 he is a professor for time based media at the HFBK Hamburg.",
      }, {
        name: "Joanna Zylinska",
        bio: "Joanna Zylinska is a writer, lecturer, artist and curator, working in the areas of digital technologies and new media, ethics, photography and art. She is Professor of Media Philosophy + Critical Digital Practice in the Department of Digital Humanities at King's College London. She is also a member of Creative AI Lab, a collaboration between King's and Serpentine Galleries.",
      }, {
        name: "Mich Rossiter",
        bio: "Mich Rossiter is an architecture graduate based in London. His work takes the form of architecture, essays, photography and podcasts. 'Mich' is pronounced: 'Mitch'.",
      }]);
  })
  .then(()=>{
      return knex('article_contributor').del();
  })
  .then(()=>{
      return knex('article_contributor').insert([{
          article_id: 1,
          contributor_id: 1,
      },{
        article_id: 2,
        contributor_id: 2,
      },{
        article_id: 3,
        contributor_id: 3,
      },{
        article_id: 6,
        contributor_id: 4,
      },{
        article_id: 7,
        contributor_id: 4,
    }]);
  })
};