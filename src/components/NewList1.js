import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
function NewList1(){
	let {name} = useParams()
	let history = useLocation()
	console.log(history)
	return(
		<div>这里是list1111页面{name}</div>
	)
}
export default NewList1