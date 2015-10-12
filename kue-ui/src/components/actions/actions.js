import { DELETE_JOB } from '../constants/constants'

function deleteJob(id){
	return {
		type: DELETE_JOB,
		id
	}
}

export default {
	deleteJob
}