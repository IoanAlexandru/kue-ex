import React, { Component } from 'react'
import Stat from './Stat'

export default class Stats extends Component {
	constructor(){
		super()
	}

	render(){
		let stats = []
		for(let i in this.props.state){
			let index = i.indexOf('Count')
			let string = i.slice(0, index)
			let stat = {
				key: string,
				value: this.props.state[i]
			}

			stats.push(
				<Stat key={i} stat={stat} getJobs={this.props.getJobs} changeCurrentJobType={this.props.changeCurrentJobType}/>
			)
		}

		return <div>
				{stats}
		       </div>
	}
}