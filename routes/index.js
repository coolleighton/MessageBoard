var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "By Ysmir's beard! Another traveler approaches!",
    user: "Farengar Secret-Fire",
    added: new Date("January 1, 2015"),
  },
  {
    text: "What brings you to Whiterun?",
    user: "Balgruuf the Greater",
    added: new Date("January 2, 2015"),
  },
  {
    text: "I just got lost in Skyrim for hours again!",
    user: "Lydia",
    added: new Date("July 7, 2017"),
  },
  {
    text: "Skyrim's landscape is breathtaking, don't you think?",
    user: "Frodnar",
    added: new Date("September 20, 2018"),
  },
  {
    text: "I can't decide if I should join the Stormcloaks or the Imperials.",
    user: "Rikke",
    added: new Date("November 5, 2019"),
  },
  {
    text: "Dragons in Skyrim are both terrifying and majestic creatures.",
    user: "Delphine",
    added: new Date("February 10, 2021"),
  },
  {
    text: "I always feel like a true adventurer when exploring Skyrim's dungeons.",
    user: "Hadvar",
    added: new Date("May 25, 2022"),
  },
  {
    text: "Skyrim belongs to the Nords!",
    user: "Ulfric Stormcloak",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Message Board",
    messages: messages,
  });
});

/* recieves data via a POST request */
router.post("/form", (req, res) => {
  /* gets data from the req.body or the /form post reqest */
  let messageText = req.body.messageText;
  let messageUser = req.body.messageUser;

  /* pushes data to array */
  messages.push({ text: messageText, user: messageUser, added: new Date() });

  /* redirects to home page page */
  res.redirect("/");
});

module.exports = router;
