import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchIcon from '@mui/icons-material/Search';
import UsersTable from './UsersTable';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink, Link } from 'react-router-dom';
import './Users.css'

const Users = () => {
	const modalOpen = () => {
		const modal = document.getElementById('modal1');
		const container = document.getElementById('bigContainer');
		container.style.opacity = '0.3'
		modal.style.display = 'flex'
	}
	const modalClose = () => {
		const modal = document.getElementById('modal1');
		const container = document.getElementById('bigContainer');
		container.style.opacity = '1'
		modal.style.display = 'none'
	}
	return (
		<div className="main">
			<Sidebar />
			<div className="container" id='bigContainer'>
				<Navbar />
				<div className="UsersPage">
					<div className="sortAndActions">
						<h2>Users List</h2>
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
						<div className="addUserBtn">
							<Link to='/users/addUser'>
								<span>Add User</span>
							</Link>
						</div>
					</div>
					<div className="allUsers">
						<UsersTable modalOpen={modalOpen} />
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
			<div id="modal1">
				<h2>Edit User Details</h2>
				<div className="editFields1">
					<div className="editBuyerOrgName">
						<label htmlFor="modalOrg"> Organization</label>
						<input type="text" name="modalOrg" id="modalOrg" placeholder="Ex-orgXYZ" />
					</div>
					<div className="editBuyerContact">
						<label htmlFor="modalPerson_name">Contact Person</label>
						<input type="text" name="modalPerson_name" id="modalPerson_name" placeholder="Ex-Susan Bond" />
					</div>
					<div className="editBuyerAddress">
						<label htmlFor="modalAddress"> Address</label>
						<textarea name="modalAddress" id="modalAddress" rows='3' placeholder="Ex-Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512"></textarea>
					</div>
					<div className="editBuyerPhoneNum">
						<label htmlFor="modalPhoneNum"> Phone Number</label>
						<input type="text" name="modalPhoneNum" id="modalPhoneNum" placeholder="Ex - +251 398198287 " />
					</div>
					<div className="editBuyerAddiNum">
						<label htmlFor="modalAddiNum"> Additional Phone Number</label>
						<input type="text" name="modalAddiNum" id="modalAddiNum" placeholder="Ex - +251 398198287 " />
					</div>
					<div className="editBuyerEmail">
						<label htmlFor="modalBuyerEmal">Email</label>
						<input type="email" name="modalBuyerEmal" id="modalBuyerEmal" placeholder='Ex-johndoes@example.com ' />
					</div>
					<div className="editBuyerCate">
						<label htmlFor="modalBuyerCategory">Buyer Type</label>
						<select name="modalBuyerCategory" id="modalBuyerCategory">
							<option value="select">Select Category</option>
							<option value="Multi Farmer">Retailer</option>
							<option value="Producer">Supermarket</option>
							<option value="Importer">Unions</option>
							<option value="Distributor">Other groups</option>
						</select>
					</div>
					<div className="editBuyerCate">
						<label htmlFor="modalBuyerCategory">Buyer Level</label>
						<select name="modalBuyerCategory" id="modalBuyerCategory">
							<option value="Level 1">Level 1</option>
							<option value="Level 2">Level 2</option>
							<option value="Level 3">Level 3</option>
						</select>
					</div>
					<div className="editBuyerTinNum">
						<label htmlFor="modalBuyerTin">TIN</label>
						<input type="text" name="modalBuyerTin" id="modalBuyerTin" />
					</div>
				</div>
				<div className="editAndCloseBtn">
					<div className="editBtn"><EditIcon /> Edit Details</div>
					<div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
				</div>
			</div>
		</div>
	)
}

export default Users