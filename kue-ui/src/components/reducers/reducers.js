import { DELETE_JOB } from '../constants/constants'
import request from 'superagent'

let initialState = {
	stats: {},
	jobs: []
}

request
	.get('localhost:3000/kue/stats')
	.end(function(err,res){
		let stats = Object.assign({}, res.body)
		delete stats.workTime

		initialState.stats = stats
	})

function kueApp(state= initialState, action){
	switch(action.type){
		case DELETE_JOB:
			
	}
}

