import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
import './addUser.css'

const AddUser = () => {
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="addUserContainer">
                    <div className="borderContainer">
                        <div className="addUserHead">
                            <Link to='/users'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add User</h2>
                        </div>
                        <div className="information">
                            <div className="fields1">
                                <div className="orgName">
                                    <label htmlFor="org"> Organization</label>
                                    <input type="text" name="org" id="org" placeholder="Ex-orgXYZ" />
                                </div>
                                <div className="personName">
                                    <label htmlFor="person_name">Contact Person</label>
                                    <input type="text" name="person_name" id="person_name" placeholder="Ex-Susan Bond" />
                                </div>
                                <div className="buyerAddress">
                                    <label htmlFor="address"> Address</label>
                                    <textarea name="address" id="address" rows='3' placeholder="Ex-Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512"></textarea>
                                </div>
                                <div className="buyerNumber">
                                    <label htmlFor="buyerPhoneNum"> Phone Number</label>
                                    <input type="text" name="buyerPhoneNum" id="buyerPhoneNum" placeholder="Ex - +251 398198287 " />
                                </div>
                                <div className="buyerAddiNumber">
                                    <label htmlFor="buyerAddiNum"> Additional Phone Number</label>
                                    <input type="text" name="buyerAddiNum" id="buyerAddiNum" placeholder="Ex - +251 398198287 " />
                                </div>
                                <div className="buyerEmail">
                                    <label htmlFor="buyerEmal">Email</label>
                                    <input type="email" name="buyerEmal" id="buyerEmal" placeholder='Ex-johndoes@example.com ' />
                                </div>
                                <div className="buyerCate">
                                    <label htmlFor="buyerCategory">Buyer Type</label>
                                    <select name="buyerCategory" id="buyerCategory">
                                        <option value="select">Select Category</option>
                                        <option value="Multi Farmer">Retailer</option>
                                        <option value="Producer">Supermarket</option>
                                        <option value="Importer">Unions</option>
                                        <option value="Distributor">Other groups</option>
                                    </select>
                                </div>
                                <div className="buyerCate">
                                    <label htmlFor="buyerCategory">Buyer Level</label>
                                    <select name="buyerCategory" id="buyerCategory">
                                        <option value="Level 1">Level 1</option>
                                        <option value="Level 2">Level 2</option>
                                        <option value="Level 3">Level 3</option>
                                    </select>
                                </div>
                                <div className="buyerTinNum">
                                    <label htmlFor="buyerTin">TIN</label>
                                    <input type="text" name="buyerTin" id="buyerTin" />
                                </div>
                            </div>
                        </div>
                        <div className="addUserButton">ADD USER</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser