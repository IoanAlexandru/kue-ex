import React, { Component } from 'react'
import Job from './Job'

export default class JobList extends Component {
	constructor(){
		super()
	}

	render(){
		let self = this
		let jobList = this.props.jobList.map(function(job){
			return <Job key={job.id} jobInfo={job} deleteJob={self.props.deleteJob} />
		})
		return <div>
				<h1>{this.props.currentJobType}</h1>
				{jobList}
		       </div>
	}
}
