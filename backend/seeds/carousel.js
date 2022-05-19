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
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/ecircles.com/guile.jpg",
            imageCaption: "an image sharing social network allowing users to share photos to friends in closed groups",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/efanshop.com/guile.jpg",
            imageCaption: "a company that managed logistics and technology for sports web shops",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/ehobbies.com/guile.jpg",
            imageCaption: "a website selling hobbyist products and equipment",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/elaw.com/guile.jpg",
            imageCaption: "a searchable database of downloadable legal documents for lawyers",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/exchangepath.com/guile.jpg",
            imageCaption: "a website facilitating person-to-person money transfers via credit card and mail-out cheque",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/financialprinter.com/guile.jpg",
            imageCaption: "a website that produced and distributed financial and legal documents for companies",
          },{
            article_id: 2,
            imageLink: "https://www.dotcomseance.com/art/funbug.com/guile.jpg",
            imageCaption: "a game platform that allowed users to earn and spend a proprietary private currency that could be converted to fiat",
          },
        ]);
      })
  };