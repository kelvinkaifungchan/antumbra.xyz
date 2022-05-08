exports.seed = function (knex) {
    return knex("carousel").del()
      .then(async () => {
        return knex("carousel").insert([
              {
                article_id: 2,
                imageLink: "https://www.dotcomseance.com/art/pets.com/guile.jpg",
                imageCaption: "pets.com: A website that sold pet-related supplies to retail customers",
            },{
                article_id: 2,
                imageLink: "https://www.dotcomseance.com/art/alladvantage.com/guile.jpg",
                imageCaption: "alladvantage.com: A web browser that paid users for looking at advertisements while browsing",
            },{
                article_id: 2,
                imageLink: "https://www.dotcomseance.com/art/bidland.com/guile.jpg",
                imageCaption: "bidland.com: A service provider enabling websites to run auctions",
            },{
              article_id: 2,
              imageLink: "https://www.dotcomseance.com/art/bizbuyer.com/guile.jpg",
              imageCaption: "a website which listed contract jobs for businesses to bid on",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/capacityweb.com/guile.jpg",
            imageCaption: "a platform that facilitated the leasing of manufacturing companies’ production downtime",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/cashwars.com/guile.jpg",
            imageCaption: "a free online role playing game which awarded winners money",
          },
        ]);
      })
  };