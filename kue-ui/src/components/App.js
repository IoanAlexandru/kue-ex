import React, { Component } from 'react'
import request from 'superagent'
import 'babel-core/polyfill'
import JobList from './JobList'
import Stats from './Stats'


export default class App extends Component {
	constructor(){
		super()
		this.componentDidMount = this.componentDidMount.bind(this)
		this.getJobs = this.getJobs.bind(this)
		this.deleteJob = this.deleteJob.bind(this)
		this.changeCurrentJobType = this.changeCurrentJobType.bind(this)
		this.componentDidUpdate = this.componentDidUpdate.bind(this)
		this.state = {
			kueState: {},
			jobs: [],
			currentJobType: ''
		}
	}

	componentDidMount(state= 'active'){
		let self = this
		let string = '/kue/jobs/' + state + '/1...99999999'
		console.log('Accessing :' + string)

		request.get(string).then(function(err,res){
			self.setState({
				jobs: err.body
			})
		})

		this.changeCurrentJobType(state)

		request
			.get('/kue/stats')
			.then(function(err, res){
				self.setState({
					kueState: err.body
				})
			})
	}

	componentDidUpdate(){

	}

	deleteJob(id){
		let self = this

		request
			.del('/kue/job/' + id)
			.end(function(err, res){
				console.log(err, res)	
			})

		request
			.get('/kue/stats')
			.then(function(err, res){
				self.setState({
					kueState: err.body
				})
			})

		let index;
		for(let i in this.state.jobs){
			if(this.state.jobs[i].id == id){
				index = i
			}
		}

		let newJobs = this.state.jobs
		newJobs.splice(index, 1)
		this.setState({
			jobs: newJobs
		})
	}

	getJobs(jobs){	
		this.setState({
			jobs: jobs
		})
	}

	changeCurrentJobType(type){
		this.setState({
			currentJobType: type
		})
	}

	render(){

		let newKueState = Object.assign({}, this.state.kueState)
		delete(newKueState.workTime)

		return <div className="container-fluid">
				<div className="row">
					<div className="col-sm-3">
					 <Stats state={newKueState} 
					        getJobs={this.getJobs} 
					        changeCurrentJobType={this.changeCurrentJobType} />
					</div>
					<div className="col-sm-9">
					 <JobList jobList={this.state.jobs} 
					          deleteJob={this.deleteJob} 
					          currentJobType={this.state.currentJobType} />
					</div>				
				</div>
		       </div>
	}
}
