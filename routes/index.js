var express = require('express');
var router = express.Router();
var kue = require('kue');

var jobs = kue.createQueue();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendmail', function(req, res, next){
	res.render('sendmail')
})

router.post('/sendmail', function(req, res, next){
	jobs.create('email', {
		title: req.body.title,
		to: req.body.to,
		body: req.body.message
	}).save()

	// jobs.process('email', function(job, done){
	// 	console.log(job.data)
	// 	done()
	// 	res.send('Email sent')
	// })
	res.send('Email sent')
})

router.get('/processjobs', function(req, res, next){
	jobs.process('email', function(job, done){
		done()
		res.send('Email with message ' + job.data.body + ' was sent')
	})
})

router.get('/kueinfo', function(req, res, next){
	console.log(kue)
	res.send('kue info')
})

module.exports = router;
