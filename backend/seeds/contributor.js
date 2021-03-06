exports.seed = function (knex) {
  return knex("contributor").del()
  .then(async()=>{
      return knex("contributor").insert([{
          name: "Ye Ha Kim",
          bio: "is an architectural designer and a 3D Generalist, who has worked within the film and game industry. He is interested in the application of real-time technologies in data visualisation to identify issues related to climate change within the built environment. He has ran workshops with students at the Bartlett School of Architecture exploring these ideas.",
      }, {
        name: "Simon Denny",
        bio: "is an artist working with installation, sculpture, print and video. He makes exhibitions that unpack the social and political implications of the technology industry and the rise of social media, startup culture, blockchain and cryptocurrency.",
      }, {
        name: "Mich Rossiter",
        bio: "is an architectural designer and writer based in and around London. His work centres on urbanism, the architecture of healing and empowerment and the potential for language to be used to incite radical design action in response to the multi-crises facing our natural and built environments. Since graduating from the Bartlett School of Architecture in 2021, Mich has been writing, moving and working on personal projects before starting as a Design Intern at BCG in London in April.",
      }, {
        name: "Noah Gotlib",
        bio: "is a designer and researcher based in London. He works between Landscape architecture at VOGT London, and is an assistant tutor for Diploma Unit 4 at the Architectural Association. \n\nOriginally studying in Toronto, Canada, he received his M.Arch from the AA in 2020.",
      }, {
        name: "Lev Manovich",
        bio: "is a digital culture theorist, writer, and artist whose work has had a profound impact on the way we think about media and technology today. His books include Cultural Analytics, AI Aesthetics, Instagram and Contemporary Image, and The Language of New Media. He has been included in the list of '25 People Shaping the Future of Design' in 2013 and the list of '50 Most Interesting People Building the Future' in 2014. Recognized as one of the most influential voices in contemporary media theory, Dr. Manovich's work is essential reading for anyone interested in understanding the role of technology in contemporary society.",
      }, {
        name: "Emanuele Arielli",
        bio: "teaches aesthetics at the IUAV University in Venice, Italy. His research interests include the connection between aesthetics, communication and media theory, both from a philosophical and a psychological point of view.",
      }, {
        name: "Joanna Zylinska",
        bio: "is a writer, lecturer, artist and curator, working in the areas of digital technologies and new media, ethics, photography and art. She is Professor of Media Philosophy + Critical Digital Practice in the Department of Digital Humanities at King's College London. She is also a member of Creative AI Lab, a collaboration between King's and Serpentine Galleries. Zylinska is the author of eight books including *Nonhuman Photography* (MIT Press, 2017), *The End of Man: A Feminist Counterapocalypse* (University of Minnesota Press, 2018, open access) and most recently *AI Art: Machine Visions and Warped Dreams* (Open Humanities Press, 2020, open access).",
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
        contributor_id: 5,
      },{
        article_id: 3,
        contributor_id: 6,
      },{
        article_id: 4,
        contributor_id: 7,
      },{
        article_id: 5,
        contributor_id: 4,
      },{
        article_id: 6,
        contributor_id: 3,
      }
    ]);
  })
};