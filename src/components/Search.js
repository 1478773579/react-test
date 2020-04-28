import React from 'react'
function Search(props){
	return(
		<div>
			<input value={props.vale} onChange={props.changeInput}/>
			<input type='radio' checked={props.selected} onChange={props.changeRadio}/>
			<label>是不是选择好了?</label>
		</div>
		)
}
export default Search