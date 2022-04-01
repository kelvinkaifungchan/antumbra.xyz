exports.seed = function (knex) {
  return knex("archive").del()
    .then(async () => {
      return knex("archive").insert([
        {
          issue: 43,
          title: "Untitled",
          date: "2021",
          link: "https://issuu.com/aaschool/docs/220218_aarchitecture_43_web_pages_high-res"
      },
      {
          issue: 42,
          title: "Firament",
          date: "2021",
          link: "https://issuu.com/aaschool/docs/210802_aarchitecture_42_web_high-res"
      },
      {
          issue: 41,
          title: "Fenlandia",
          date: "2020",
          link: "https://issuu.com/aaschool/docs/200904_aarchitecture_41_fen_digi_pages"
      },
      {
          issue: 40,
          title: "Heart of the Angel",
          date: "2020",
          link: "https://issuu.com/aaschool/docs/200713_aarchitecture_40_angel_issue_digi_p"
      },
      {
          issue: 39,
          title: "A Charger for a Non-rechargeable Battery",
          date: "2019",
          link: "https://issuu.com/aaschool/docs/210202_aarchitecture_39_charger_issuu_144dpi"
      },
      {
          issue: 38,
          title: "Censorship",
          date: "2019",
          link: "https://issuu.com/aaschoValol/docs/191009_aarchitecture_38_censorship"
      },
      {
          issue: 37,
          title: "Recognition",
          date: "2018",
          link: "https://issuu.com/aaschool/docs/190520_aarchitecture_37_recognition_digital"
      },
      {
          issue: 36,
          title: "(In)Security",
          date: "2018",
          link: "https://issuu.com/aaschool/docs/190313_aarchitecture_36_security_in"
      },
      {
          issue: 35,
          title: "Compromise",
          date: "2017",
          link: "https://issuu.com/aaschool/docs/180903_aarchitecture_35_compromise_"
      },
      {
          issue: 34,
          title: "Collision",
          date: "2017",
          link: "https://issuu.com/aaschool/docs/180501_aarchitecture_34_collision_f"
      },
      {
          issue: 33,
          title: "Desire",
          date: "2017",
          link: "https://issuu.com/aaschool/docs/aarchitecture33"
      },
      {
          issue: 32,
          title: "Curating Architecture",
          date: "2017",
          link: "https://issuu.com/aaschool/docs/aarchitecture32"
      },
      {
          issue: 31,
          title: "Protocol",
          date: "2017",
          link: "https://issuu.com/aaschool/docs/aarchitecture31"
      },
      {
          issue: 29,
          title: "Value",
          date: "2016",
          link: "https://issuu.com/aaschool/docs/161002_aarchitecture_29_final_web"
      },
      {
          issue: 28,
          title: "Boundary",
          date: "2016",
          link: "https://issuu.com/aaschool/docs/full_aarchitecture_28_web_pages"
      },
      {
          issue: 27,
          title: "{Theme}",
          date: "2016",
          link: "https://issuu.com/aaschool/docs/full_aarchitecture_28_web_pages"
      },
      {
          issue: 26,
          title: "Non-Sense",
          date: "2015",
          link: "https://issuu.com/aaschool/docs/aarchitecture_26"
      },
      {
          issue: 25,
          title: "Deadlines",
          date: "2015",
          link: "https://issuu.com/aaschool/docs/aarchitecture_25"
      },
      {
          issue: 24,
          title: "Escapes",
          date: "2015",
          link: "https://issuu.com/aaschool/docs/150220_aarchitecture_24_single_web"
      },
      {
          issue: 23,
          title: "Health and Safety",
          date: "2014",
          link: "https://issuu.com/aaschool/docs/aarchitecture23"
      },
      {
          issue: 22,
          title: "Language",
          date: "2014",
          link: "https://issuu.com/aaschool/docs/140520_aarchitecture_22_preview_ful"
      },
      {
          issue: 21,
          title: "Paper",
          date: "2014",
          link: "https://issuu.com/aaschool/docs/140128_aarchitecture_21_preview_sin"
      },
      {
          issue: 20,
          title: "Time",
          date: "2013",
          link: "https://issuu.com/aaschool/docs/aarchitecture_20"
      },
      {
          issue: 19,
          title: "Stuff",
          date: "2013",
          link: "https://issuu.com/aaschool/docs/aarchitecture19"
      },
      {
          issue: 18,
          title: "Architecture As Research",
          date: "2012",
          link: "https://issuu.com/aaschool/docs/130108_aarchitecture_18_art_full_low_single"
      },
      {
          issue: 17,
          title: "Curating Architecture",
          date: "2012",
          link: "https://issuu.com/aaschool/docs/aarchitecture17"
      },
      {
          issue: 16,
          title: "Life After The AA",
          date: "2012",
          link: "https://issuu.com/aaschool/docs/aarchitecture16"
      },
      {
          issue: 15,
          title: "News from the Architectural Association",
          date: "2012",
          link: "https://issuu.com/aaschool/docs/110805_aarchitecture15_full_web_1"
      },
      {
          issue: 14,
          title: "News from the Architectural Association",
          date: "2011",
          link: "https://issuu.com/aaschool/docs/aarchitecture14"
      },
      {
          issue: 13,
          title: "News from the Architectural Association",
          date: "2010",
          link: "https://issuu.com/aaschool/docs/aarchitecture13"
      },
      {
          issue: 12,
          title: "News from the Architectural Association",
          date: "2010",
          link: "https://issuu.com/aaschool/docs/aarchitecture12"
      },
      {
          issue: 11,
          title: "News from the Architectural Association",
          date: "2010",
          link: "https://issuu.com/aaschool/docs/aarchitecture11"
      },
      {
          issue: 10,
          title: "News from the Architectural Association",
          date: "2009",
          link: "https://issuu.com/aaschool/docs/aarchitecture10"
      },
      {
          issue: 9,
          title: "News from the Architectural Association",
          date: "2009",
          link: "https://issuu.com/aaschool/docs/aarchitecture09ocr"
      },
      {
          issue: 8,
          title: "News from the Architectural Association",
          date: "2009",
          link: "https://issuu.com/aaschool/docs/aarchitecture08ocr"
      },
      {
          issue: 7,
          title: "News from the Architectural Association",
          date: "2008",
          link: "https://issuu.com/aaschool/docs/aarchitecture07ocr"
      },
      {
          issue: 6,
          title: "News from the Architectural Association",
          date: "2008",
          link: "https://issuu.com/aaschool/docs/aarchitecture06ocr"
      },
      {
          issue: 5,
          title: "News from the Architectural Association",
          date: "2007",
          link: "https://issuu.com/aaschool/docs/aarchitecture05ocr"
      },
      {
          issue: 4,
          title: "News from the Architectural Association",
          date: "2007",
          link: "https://issuu.com/aaschool/docs/aarchitecture04ocr"
      },
      {
          issue: 3,
          title: "News from the Architectural Association",
          date: "2007",
          link: "https://issuu.com/aaschool/docs/aarchitecture03ocr"
      },
      {
          issue: 2,
          title: "News from the Architectural Association",
          date: "2007",
          link: "https://issuu.com/aaschool/docs/aarchitecture02ocr"
      },
      {
          issue: 1,
          title: "News from the Architectural Association",
          date: "2006",
          link: "https://issuu.com/aaschool/docs/aarchitecture01ocr"
      }, ]);
    })
};