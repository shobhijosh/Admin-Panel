import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

const OrdersTable = ({ modalOpen }) => {
    const functio = () => {
        modalOpen()
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>DATE</td>
                    <td>TOTAL</td>
                    <td>STATUS</td>
                    <td>EDIT</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Cortie Gemson</td>
                    <td>May 23,2021</td>
                    <td>$2390</td>
                    <td className="processing">
                        <span>Processing</span>
                    </td>
                    <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Mathilde Tumilson</td>
                    <td>May 15,2021</td>
                    <td>$6550</td>
                    <td className="shipped">
                        <span>Shipped</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Audrye Heaford</td>
                    <td>Apr 24,2021</td>
                    <td>$10000</td>
                    <td className="completed">
                        <span>Completed</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Brantley Mell</td>
                    <td>Apr 10,2021</td>
                    <td>$19</td>
                    <td className="refunded">
                        <span>Refunded</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Dominique Enriques</td>
                    <td>March 5,2021</td>
                    <td>$15000</td>
                    <td className="cancelled">
                        <span>Cancelled</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Cortie Gemson</td>
                    <td>May 23,2021</td>
                    <td>$2390</td>
                    <td className="processing">
                        <span>Processing</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Mathilde Tumilson</td>
                    <td>May 15,2021</td>
                    <td>$6550</td>
                    <td className="shipped">
                        <span>Shipped</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Audrye Heaford</td>
                    <td>Apr 24,2021</td>
                    <td>$10000</td>
                    <td className="completed">
                        <span>Completed</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Brantley Mell</td>
                    <td>Apr 10,2021</td>
                    <td>$19</td>
                    <td className="refunded">
                        <span>Refunded</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3210</td>
                    <td>Dominique Enriques</td>
                    <td>March 5,2021</td>
                    <td>$15000</td>
                    <td className="cancelled">
                        <span>Cancelled</span>
                    </td>
                    <td>
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default OrdersTable