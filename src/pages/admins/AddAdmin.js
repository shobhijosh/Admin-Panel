import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
import './admins.css'

const AddAdmin = () => {
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="addAdminContainer">
                    <div className="borderContainer">
                        <div className="addAdminHead">
                            <Link to='/admins'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add Admin</h2>
                        </div>
                        <div className="information">
                            <div className="fields1">
                                <div className="admin">
                                    <label >Name</label>
                                    <input type="text" placeholder="Ex-Steve Smith" />
                                </div>
                                <div className="admin">
                                    <label>User Name</label>
                                    <input type="text" placeholder="Ex-steve_Smith" />
                                </div>
                                <div className="admin">
                                    <label>Password</label>
                                    <input type="text" placeholder="Ex-#strongpPassword" />
                                </div>
                                <div className="admin">
                                    <label>Access</label>
                                    <div className="checkBoxes">
                                        <div className="check1">
                                            <h3>Add Product</h3>
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                        <div className="check2">
                                            <h3>Add Seller</h3>
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                        <div className="check3">
                                            <h3>Add Buyer</h3>
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addAdminButton">ADD ADMIN</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin