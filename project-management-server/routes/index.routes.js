const router = require("express").Router();
//const dataPath = "./data/phones.json";
const fs = require("fs");
const dataPath = "./data/phones.json";

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", async (req, res, next) => {
  fs.readFile(dataPath, "utf8", function (err, data) {
    //console.log(data, "test02");
    res.end(data);
  });

  // res.json(phones);
});
router.get("/phones/:id", function (req, res) {
  // First retrieve existing user list
  fs.readFile(dataPath, "utf8", function (err, data) {
    const phones = JSON.parse(data);
    console.log(phones[0], "test");
    const phone = phones[req.params.id];
    console.log(phone, "sara");
    res.end(JSON.stringify(phone));
  });
});
/* router.get("/phones/:id", async (req, res, next) => {
  try {
    const { phoneId } = req.params;
    fs.readFile(dataPath, "utf8", function (err, data) {
      console.log("test05", data.phoneId);
      res.end(...data.phoneId);
    });

    // res.json({ ...beer._doc });
  } catch (error) {
    res.status(404).json({ message: "No beer with this id" });
  }
}); */

module.exports = router;
