import React from 'react'
function ListHead(props){
	const currentcategory = props.category
	return(
		<div>
			<h2>{props.category}</h2>
			
			{
			props.lists[currentcategory].map((list)=>(
			       <div key={list.name}>
				   <span>{list.name}</span>
				    <span>{list.price}</span>
				  </div>)
			)
			}
			
		</div>
	)
}

export default ListHead