const express = require("express");
const router = express.Router();

const { list, create, remove, questionById } = require("../controllers/questionController")

router.get("/listquestion", list);
router.post("/createquestion", create);
router.delete("/:questionId", remove);
router.param("questionId", questionById);



module.exports = router;