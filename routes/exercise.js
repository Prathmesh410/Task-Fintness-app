const express = require( "express");
const router = express.Router();

const {createExercise, getAllExercises,getExerciseById,deleteExercise} = require("../controllers/exercise")

router.post("/exercises", createExercise);
router.get("/exercises",getAllExercises)
router.get("/exercises/:id", getExerciseById);
router.delete("/exercises/:id", deleteExercise);

module.exports = router;