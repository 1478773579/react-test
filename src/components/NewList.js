import React from 'react'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'

function NewList(props){
	let {name} = useParams()
	console.log("props",props)
	let addCount = ()=>{
		props.add()
	}
	let getUser = ()=>{
		props.getUserList()
	}
	return(
		<div>这里是list 页面{name}
		
		<button onClick={addCount}>点击加1</button>
		<button onClick={getUser}>getUser1</button>
		<span>{props.count}</span>
		</div>
		
	)
}

let mapStateToProps = ({add})=>{
	return add
}
let mapDispatchToProps = (dispatch)=>{
	return {
		add: ()=>{
			dispatch({
				type: 'add'
			})
		},
		getUserList: ()=>{
			console.log(1)
			dispatch({
				type: 'FENTCH_USERLIST'
			})
		}
	}
}
 
export default connect(mapStateToProps,mapDispatchToProps)(NewList)