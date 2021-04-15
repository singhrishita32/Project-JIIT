const express = require('express'); 
const app=express();
const {groupReport,createGroup,allGroups,getGroup,groupById,updateGroup}=require('../Controllers/group');
const Auth=require('../Controllers/auth');
const group = require('../Models/group');
const router= express.Router();
router.post('/group/new/',createGroup);
router.get('/allGroups', allGroups);
router.put('/update/group/:groupId', updateGroup);
router.get('/groupBy/:groupId', getGroup);
router.get('/group/report/:groupId',groupReport)
router.param("groupId",groupById);
module.exports = router