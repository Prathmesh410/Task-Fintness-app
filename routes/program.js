const express = require( "express");
const router = express.Router();

const {createProgram,getAllPrograms,getProgramById,updateProgram,deleteProgram} =require("../controllers/program")

router.post('/programs', createProgram);
router.get('/programs', getAllPrograms);
router.get('/programs/:id', getProgramById);
router.put('/programs/:id', updateProgram);
router.delete('/programs/:id', deleteProgram);
module.exports = router;