exports.seed = function (knex) {
  return knex("archive").del()
    .then(async () => {
      return knex("archive").insert([{
        issue: "43",
        title: "Untitled",
        date: "2021",
      }, {
        issue: "42",
        title: "Firament",
        date: "2021",
      }, {
        issue: "41",
        title: "Fenlandia",
        date: "December 2021",
      }, {
        issue: "40",
        title: "Heart of the Angel",
        date: "Term 1 20",
      }, {
        issue: "39",
        title: "A Charger for a Non-Rechargeable Battery",
        date: "March 2020",
      }, {
        issue: "38",
        title: "Censorship",
        date: "December 2019",
      }, {
        issue: "37",
        title: "Recognition",
        date: "Term 4 18",
      }, {
        issue: "36",
        title: "(IN)SECURITY",
        date: "Term 1 18",
      }, {
        issue: "35",
        title: "Compromise",
        date: "Term 4 17",
      }, {
        issue: "34",
        title: "Collision",
        date: "Term 3 17",
      }, {
        issue: "33",
        title: "Desire",
        date: "Term 1 17",
      }, {
        issue: "32",
        title: "Curating Architecture",
        date: "Term 2 16",
      }, {
        issue: "31",
        title: "Protocol",
        date: "Term 1 16",
      }, {
        issue: "30",
        title: "Untitled",
        date: "June 19",
      }, ]);
    })
};