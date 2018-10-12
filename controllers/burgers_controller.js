
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Routes when user goes to the main page
router.get('/', function (request, result) {
	result.redirect('/burgers');
});

router.get('/burgers', function (request, result) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		result.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (request, result) {
	burger.create(['burger_name', 'devoured'], [request.body.name, request.body.devoured], function () {
		result.redirect('/burgers');
	});
});


router.put('/burgers/update/:id', function (request, result) {
	var condition = 'id = ' + request.params.id;

	console.log('condition', condition);

	burger.update({ devoured: request.body.devoured }, condition, function () {
		result.redirect('/burgers');
	});
});


module.exports = router;