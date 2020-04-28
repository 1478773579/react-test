import {combineReducers, createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from '../saga'

const SagaMiddleware = createSagaMiddleware()
const initstate = {
	count: 0,
	userList: []
}
function add(state=initstate, action){
    if(action.type === 'add'){
		let myCount = state.count+1
		return {count: myCount}
	}
	return state
}
function userList(state=initstate, action){
	if(action.type === 'FENTCH_USERLIST_SUCESS'){
		console.log(6,action)
		return {userList: action.userList}
	}
	return state
}
const reducers = combineReducers({
	add,
	userList
})
let store = createStore(
	reducers,
	applyMiddleware(SagaMiddleware)
)
SagaMiddleware.run(saga)
export default store