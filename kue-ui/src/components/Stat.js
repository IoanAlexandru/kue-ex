import React, { Component } from 'react'
import request from 'superagent'

export default class Stat extends Component {
	constructor(){
		super()
		this.jobsRequest = this.jobsRequest.bind(this)
	}

	jobsRequest(){
		let self = this
		let string = '/kue/jobs/' + this.props.stat.key + '/0...99999999'
		console.log('Accessing :' + string)
		request.get(string).then(function(err,res){
			// console.log(err)
			self.props.getJobs(err.body)
			self.props.changeCurrentJobType(self.props.stat.key)
		})		
	}

	render(){
		return <div onClick={this.jobsRequest}>
				{this.props.stat.key} - {this.props.stat.value}
		       </div>
	}
}