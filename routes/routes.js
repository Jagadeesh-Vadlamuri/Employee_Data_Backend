const express = require('express');
const router = express.Router();
const {getDetails, getDetail, createDetail, updateDetail, deleteDetail} = require('../controllers/datum')

router.route('/getDetails').get(getDetails);
router.route('/getDetail/:id').get(getDetail);
router.route('/createDetail').post(createDetail);
router.route('/updateDetail/:id').put(updateDetail);
router.route('/deleteDetail/:id').delete(deleteDetail);

module.exports = router;