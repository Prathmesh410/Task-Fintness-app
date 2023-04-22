const Exercise = require('../models/exercise');

exports.createExercise = (req, res) => {
    const exercise = new Exercise(req.body);
    exercise.save((err, exercise) => {
      if (err) {
        return res.status(400).json({
          error: "Not able to save exercise",
        });
      }
      res.json({ exercise });
    });
  };

  exports.getAllExercises = (req, res) => {
    Exercise.find({}, (err, exercises) => {
      if (err) {
        return res.status(400).json({
          error: "Not able to retrieve exercises",
        });
      }
      res.json(exercises);
    });
  };

  exports.getExerciseById = (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
      if (err) {
        return res.status(400).json({
          error: "Exercise not found",
        });
      }
      res.json(exercise);
    });
  };



  exports.deleteExercise = (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete exercise",
        });
      }
      res.json({
        message: `Successfully deleted exercise: ${exercise.name}`,
      });
    });
  };