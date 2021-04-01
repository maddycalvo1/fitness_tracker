let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let fitnessSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    workout: [
      {
        type: "resistance",
        name: "Bicep Curl",
        time: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    workout: [
      {
        type: "resistance",
        name: "Lateral Pull",
        time: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    workout: [
      {
        type: "resistance",
        name: "Push Press",
        time: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    workout: [
      {
        type: "cardio",
        name: "Running",
        time: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    workout: [
      {
        type: "resistance",
        name: "Bench Press",
        time: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    workout: [
      {
        type: "resistance",
        name: "Bench Press",
        time: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    workout: [
      {
        type: "resistance",
        name: "Quad Press",
        time: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    workout: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        time: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    workout: [
      {
        type: "resistance",
        name: "Military Press",
        time: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  }
];

db.Fitness.deleteMany({})
  .then(() => db.Fitness.collection.insertMany(fitnessSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
