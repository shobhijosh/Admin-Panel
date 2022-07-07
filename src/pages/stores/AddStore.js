import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
import './stores.css'

const AddStore = () => {
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="addStoreContainer">
                    <div className="borderContainer">
                        <div className="addStoreHead" style={{ alignSelf: 'center' }}>
                            <Link to='/stores'><ArrowBackIcon className="arrowBack" /></Link>
                            <h2>Add Store</h2>
                        </div>
                        <div className="information">
                            <div className="fields1" style={{ justifyContent: 'center' }}>
                                <div className="addStore">
                                    <label> Store Name</label>
                                    <input type="text" placeholder="Ex-JBM supermall" />
                                </div>
                                <div className="addStore">
                                    <label> Store Location</label>
                                    <input type="text" placeholder="Ex-street 13 near sun's hotel" />
                                </div>
                                <div className="addStore">
                                    <label> Store Capacity</label>
                                    <input type="text" placeholder="Ex-10000 items" />
                                </div>
                            </div>
                        </div>
                        <div className="addStoreButton">ADD STORE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStore