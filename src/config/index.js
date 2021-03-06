module.exports = {
  author: "@nguyenanhpaul97",
  siteTitle: "Paul's Portfolio",
  siteShortTitle: "PN", // Used as logo text in header, footer, and splash screen
  siteDescription: "This is Paul's web portfolio.",
  siteUrl: "https://nguyenanhpaul.netlify.app/",
  siteLanguage: "en_US",

  splashScreen: true, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
  shownArticles: 3,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nguyenanhpaul/",
    },
    {
      name: "Github",
      url: "https://github.com/nguyenpaul97",
    },
    {
      name: "Resume",
      url:
        "https://drive.google.com/file/d/1cltGf1aQojwbPw-8VJJ5-GmrtsZ5oADR/view?usp=sharing",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
