var db = require('../models');

module.exports = function (app) {

    app.get("/api/fitness", (req, res) => {

        db.Fitness.aggregate([
            {
                $addFields: {
                    totalTime: { $sum: "$workout.time" }
                }
            }]).then((data) => {
                res.json(data);
            }).catch((error) => {
                res.sendStatus(500).json(error);
            });
    });

    app.post("/api/fitness", (req, res) => {
        db.Fitness.create({}
            , (err, data) => {
                if (err) return err;
                else res.json(data);
            })

    });

    app.put("/api/fitness/:id", (req, res) => {
        db.Fitness.findByIdAndUpdate(req.params.id, { $push: { workout: req.body } }, (err, data) => {
            if (err) return err;
            else res.json(data);
        })
    });

    app.get("/api/fitness/range", (req, res) => {
        db.Fitness.aggregate([
            {
                $addFields: {
                    totalTime: { $sum: "$workout.time" }
                }
            },
            { $limit: 7 }
        ]).then((data) => {
            res.json(data);
        }).catch((error) => {
            res.sendStatus(500).json(error);
        });
    });

};