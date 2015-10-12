import React, { Component } from 'react'
import request from 'superagent'

export default class Job extends Component {
	constructor(){
		super()
	}

	render(){
		let self = this
		let data = this.props.jobInfo.data
		let jobData = []

		for(let i in data){
			jobData.push(<li key={i}>{i} - {data[i]}</li>)
		}
		return <div>
				<p><b>Id</b>: {this.props.jobInfo.id}</p>
				<p><b>Type</b>: {this.props.jobInfo.type}</p>
				<p><b>State</b>: {this.props.jobInfo.state}</p>
				<p><b>Attempts made</b>: {this.props.jobInfo.attempts.made}</p>
				<p><b>Created at</b>: {this.props.jobInfo.created_at}</p>
				<p><b>Started at</b>: {this.props.jobInfo.started_at}</p>
				<p><b>Duration</b>: {this.props.jobInfo.duration}</p>
				<div>
				  <p><b>Job data</b></p>
				  <ul>
				    {jobData}				  
				  </ul>
				</div>
				<button onClick={ () => {
					this.props.deleteJob(this.props.jobInfo.id)
				}
				}>Delete job</button> 				
		       </div>
	}
}
