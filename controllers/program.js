const Program = require("../models/program")

exports.createProgram = (req, res) => {
  const { name, exercises } = req.body;
  const program = new Program({ name, exercises });
  program.save((err, program) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save program",
      });
    }
    res.json(program);
  });
};

exports.getAllPrograms = (req, res) => {
    Program.find()
      .populate("exercises")
      .exec((err, programs) => {
        if (err) {
          return res.status(400).json({
            error: "Not able to fetch programs",
          });
        }
        res.json(programs);
      });
  };


  exports.getProgramById = (req, res) => {
    Program.findById(req.params.id)
      .populate("exercises")
      .exec((err, program) => {
        if (err || !program) {
          return res.status(400).json({
            error: "Program not found",
          });
        }
        res.json(program);
      });
  };
  

  exports.updateProgram = (req, res) => {
    Program.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, useFindAndModify: false },
      (err, program) => {
        if (err) {
          return res.status(400).json({
            error: "Failed to update program",
          });
        }
        res.json(program);
      }
    );
  };

  exports.deleteProgram = (req, res) => {
    Program.findByIdAndRemove(
      req.params.id,
      { useFindAndModify: false },
      (err, program) => {
        if (err || !program) {
          return res.status(400).json({
            error: "Failed to delete program",
          });
        }
        res.json({
          message: "Program deleted successfully",
        });
      }
    );
  };