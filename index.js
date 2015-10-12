"use strict"

import kue from 'kue'

let jobs = kue.createQueue()

function email(){
	let job = jobs.create('email', {
		title: 'Hello',
		to: 'tony',
		body: 'Hello tony'
	}).save()

	job.on('complete', function(){
		console.log('Job ' + job.id + ' completed')
	}).on('failed', function(){
		console.log('Job ' + job.id + ' failed')
	})	
}

// jobs.process('email', function(job, done){
// 	console.log('Email with title ' + job.data.title + ', to ' + job.data.to + ', with body ' + job.data.body + ' has been sent')
// 	done()
// })

// setInterval(email, 1000)

console.log(kue)


