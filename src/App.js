import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import NewTable from './components/NewTable';
import NewList from './components/NewList';
import NewList1 from './components/NewList1';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends React.Component{
	constructor(props) {
		super(props)
		this.state={
			lists:[
			  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
			  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
			  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
			  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
			  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
			  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
			],
			classList: {},
			category: [],
			checked: false,
			value: ''
		}
		this.changeInput = this.changeInput.bind(this)
		this.changeRadio = this.changeRadio.bind(this)
		this.listSort = this.listSort.bind(this)
		this.comfirm = this.listSort.bind(this)
	}
	comfirm(){
	window.comfirm('niqueding')	
	}
	changeInput(event){
		// console.log(event)
	}
	changeRadio(){
		// console.log('radio')
	}
	listSort(){
		let categeoyList = new Set()
		let classList = {}
		this.state.lists.map((list)=>{
			 return categeoyList.add(list.category)
		})
		let categeoyListArr = Array.from(categeoyList)
		new Promise((resolve,reject)=>{
			for(let i=0;i<categeoyListArr.length;i++){
				var currentcategeoy = categeoyListArr[i]

				classList[currentcategeoy] = this.state.lists.filter((item)=>{
					return item.category === categeoyListArr[i]
				})
			}
			resolve(classList)
		}).then((classList)=>{
			this.setState({
				category: categeoyListArr,
				classList: classList
			})
		})
		
		
		
	}
	componentDidMount(){
		this.listSort()
	}
	render() {
		const {checked,value,category,classList} = this.state
		return (
		<BrowserRouter getUserComfirm={this.comfirm}>
			<div className="App">
				
				<button>
					<Link to='/'>index</Link>
				</button>
				<button>
					<Link to='/list'>List</Link>
				</button>
				<button>
					<Link to='/table'>Table</Link>
				</button>
				<button>
					<Link to='/list1/lee'>动态table</Link>
				</button>
			</div>
			<Switch>
				<Route exact path='/'>
					<Search checked={checked} value={value} changeInput={this.changeInput} changeRadio={this.changeRadio}/>
					<Table lists={classList} category={category}/>
				</Route>
				<Route path='/list'>
					<NewList/>
				</Route>
				<Route path='/table' component={NewTable}>
					
				</Route>
				<Route path='/list1/:name' component={NewList1} />
			</Switch>
		</BrowserRouter>
		);
	}
}

export default App;
