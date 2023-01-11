const router = require("express").Router();
const dataPath = "./data/phones.json";

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", async (req, res, next) => {
  fs.readFile(__dirname + "/" + dataPath, "utf8", function (err, data) {
    console.log(data);
    res.send(data);
  });

  // res.json(phones);
});

router.get("/phones/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const phone = await Beer.findById(id);

    res.json({ ...beer._doc });
  } catch (error) {
    res.status(404).json({ message: "No beer with this id" });
  }
});

module.exports = router;
