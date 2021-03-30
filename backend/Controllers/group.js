const { Result } = require('express-validator');
const Group = require('../Models/group')
const Student=require('../Models/student')
const formidable = require('formidable')
const fs = require('fs')
const _ = require("lodash")

exports.createGroup = (req, res) => {
    //console.log(req);
    const group = new Group(req.body);
    group.save()
        .then(result => {
            console.log(req.body.students[2].name);
            for (var i = 0; i < req.body.students.length; i++)
            {
                Student.update(
                    {email: req.body.students[i].email}, 
                    {$set: {'group': group._id}}, 
                    { new: true }
                    
                )
                    .then(success => {
                console.log("Student updated")
            })
            }
            
        res.json({
            group: result
        });
    });
};

exports.allGroups = (req,res) => {
    Group.find( (err,groups)=>{
        if(err)
            return res.status(400).json({error: err});
        res.json(groups)
    }).select("id mentor students supervisors");
}
exports.groupById = (req, res, next, id) => {
    Group.findById(id)
        .exec((err, group) => {
            if (err || !group)
                return res.status(400).json({ "Error": "Group not found!" })
            req.groupDetails = group;
            next();
    })
}

exports.getGroup = (req, res) => {
    return res.json(req.groupDetails)
}

exports.updateGroup = (req, res) => {
    // let form = new formidable.IncomingForm()
    // form.parse(req, (err, fields) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error:"Error Occured!"
    //         })
    //     }
        let group = req.groupDetails
        //console.log(group);
        //console.log(req.body)
        group = _.extend(group,req.body)
        group.save((err, success) => {
            if(err){ 
                return res.status(400).json
                    ({ error: err })
            }
            res.json(group);
        })

    // })
};
