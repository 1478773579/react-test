
import React from 'react'
import ListHead from './ListHead'
// import List from './List'
function Table(props){
	return(
		<div>
		{
			props.category.map((list)=>(
					<ListHead category={list} key={list} lists={props.lists}/>
			))
		}
		</div>
	)
}
export default Table