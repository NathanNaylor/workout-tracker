const router = require("express").Router();
const db = require("../models");

// TODO: import required model/s

// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    {
      runValidators: true,
      new: true,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find()
    .sort({ day: -1 })
    .limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts", (req, res) => {
  db.Workout.deleteOne({ _id: req.body.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
