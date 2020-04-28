import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
function getUserList(){
	console.log(4)
	axios.get('/user').then(res=>{
		console.log(res)
	}).catch(err=>{
		console.log(5,err)
	})
}

function* fentchUser(action){
	try{
		
		let userList = yield call(getUserList)
		yield console.log(userList)
		yield put({type: 'FENTCH_USERLIST_SUCESS', userList})
	}catch(e){
		yield console.log('fentchUser error',e)
	}
}

function* sagafentchUser(){
	console.log(2)
	yield takeEvery('FENTCH_USERLIST',fentchUser)
}

export default sagafentchUser

