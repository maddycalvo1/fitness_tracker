const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter the type of workout',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter the name of the workout',
      },
      time: {
        type: Number,
        required: 'Enter the total time of workout',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness;