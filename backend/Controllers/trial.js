const Trial = require('../Models/Trial')
const formidable = require('formidable')
const fs = require('fs')
const lodash = require("lodash")

exports.createTrial = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image not uploaded"
            });
        }
        let trial = new Trial(fields);
        if (files.photo) {
            trial.photo.data = fs.readFileSync(files.photo.path)
            trial.photo.contentType = files.photo.type
        }
        trial.save((err, result) => {
            if (err)
                return res.status(400).json({ error: err })
            res.json(result)
        })
    }) 
}

exports.getTrial = (req, res) => {
    const trials = Trial.find()
        .select("_id title")
    .then( (trials)=> { res.json(trials)} )
	.catch( (err)=> { console.log(err)})
    
}

exports.trialPhoto = (req, res, next) => {
    req.set("Content-Type", req, trial.photo.contentType);
    return res.send(req.trial.photo.data)
}

exports.trialById = (req, res, next, id) => {
    Trial.findById(id)
        .exec((err, trial) => {
            if (err || !trial)
            return res.status(400).json({error: err})
            req.trial= trial;
            next();
            
    })
}