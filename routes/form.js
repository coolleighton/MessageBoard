var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form", {
    title: "Message Board",
  });
});

/*router.post("/", (req, res) => {
  let messageText = req.body.messageText;
  let messageUser = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
});*/

module.exports = router;
