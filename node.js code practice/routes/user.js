const express = require('express');
const router = express.Router();
const userController = require('../controller/user');


router.post('/', (req, res) => {
	userController.createEmail(req.body).then(resultFromController => res.send(resultFromController));
})











module.exports = router;