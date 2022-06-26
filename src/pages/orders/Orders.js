import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import OrdersTable from '../ordersTable/OrdersTable';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom';
import './Orders.css'

const Orders = () => {
	const modalOpen = () => {
		const modal = document.getElementById('modal');
		const container = document.getElementById('bigContainer');
		container.style.opacity = '0.3'
		modal.style.display = 'block'
		// if (modal.style.display = 'block') {
		// 	document.addEventListener('click', (e) => {
		// 		let clickInside = modal.contains(e.target)
		// 		if (!clickInside) {
		// 			container.style.opacity = '1'
		// 			modal.style.display = 'none'
		// 		}
		// 	})
		// }
	}
	return (
		<div className="main">
			<Sidebar />
			<div className="container" id='bigContainer'>
				<Navbar />
				<div className="ordersPage">
					<div className="sortAndActions">
						<h2>All Orders</h2>
						<div className="sortBox">
							<select name="sorting" id="sorting">
								<option value="sort">Sort By</option>
								<option value="desc">Desc</option>
								<option value="asc">Asc</option>
							</select>
						</div>
						<div className="NumOfItems">
							<select name="itemNum" id="itemNum">
								<option value="10">10</option>
								<option value="20">20</option>
								<option value="30">30</option>
								<option value="40">40</option>
							</select>
						</div>
						<div className="searchBox">
							<input type="text" name="filter" id="filter" />
							<SearchIcon />
						</div>
						<div className="actionBox">
							<input type="checkbox" name="action4" id="action4" />
							<label htmlFor="action4" className="drop">Action <ArrowDropDownIcon /></label>
							<div className="dropDown4">
								<ul className="dropUl4">
									<li>
										<a href="/">Action</a>
									</li>
									<li>
										<a href="/">Another Action</a>
									</li>
									<li>
										<a href="/">Something else here</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="allOrders">
						<OrdersTable modalOpen={modalOpen} />
					</div>
					<div className="pageNum">
						<KeyboardDoubleArrowLeftIcon />
						<NavLink to='#'>1</NavLink>
						<NavLink to='#'>2</NavLink>
						<NavLink to='#'>3</NavLink>
						<KeyboardDoubleArrowRightIcon />
					</div>
				</div>
			</div>
			<div id="modal"></div>
		</div>
	)
}

export default Orders