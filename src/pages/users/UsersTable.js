import React from 'react'
import { Link } from 'react-router-dom'

const UsersTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td>ID</td>
                    <td>ORGANISATION</td>
                    <td>CONTACT PERSON</td>
                    {/* <td>ADDRESS</td> */}
                    <td>CONTACT NUMBER</td>
                    <td>CUSTOMER TYPE</td>
                    <td>CUSTOMER LEVEL</td>
                    {/* <td>TIN</td> */}
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
                    <td className='id'>#1</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Retailers</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#2</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Union</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Supar Market</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#4</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Other Groups</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="passiveUser">
                        <span>Passive</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#5</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Retailers</td>
                    <td>Level2</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#6</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Retailers</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#7</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Union</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#8</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Supar Market</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="passiveUser">
                        <span>Passive</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#9</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Other Groups</td>
                    <td>Level1</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#10</td>
                    <td>orgXYZ</td>
                    <td>Arlan Pond</td>
                    {/* <td>Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512</td> */}
                    <td>+251 398198287</td>
                    <td>Retailers</td>
                    <td>Levels</td>
                    {/* <td>NNN-NN-NNNN</td> */}
                    <td className="activeUser">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewUser'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>



            </tbody>
        </table>
    )
}

export default UsersTable