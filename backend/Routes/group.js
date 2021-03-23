const express = require('express'); 
const app=express();
const {createGroup,allGroups,getGroup,groupById}=require('../Controllers/group');
const Auth=require('../Controllers/auth');
const group = require('../Models/group');
const router= express.Router();
router.post('/group/new/',createGroup);
router.get('/allGroups',allGroups);
router.get('/groupBy/:groupId',getGroup);
router.param("groupId",groupById);
module.exports = router