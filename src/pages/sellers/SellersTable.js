import React from 'react'
import { Link } from 'react-router-dom'

const SellersTable = () => {
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
                    <td>EMAIL</td>
                    <td>NUMBER</td>
                    {/* <td>GENDER</td>
                    <td>AGE</td>
                    <td>REGION</td>
                    <td>ZONE</td> */}
                    <td>SELLER TYPE</td>
                    <td>SELLER LEVEL</td>
                    <td>STATUS</td>
                    <td>VIEW</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#1</td>
                    <td>Arlan Pond</td>
                    <td>apond0@nytimes.com</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>38</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Multi Farmer</td>
                    <td>Level1</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Billi Cicero</td>
                    <td>bcicerol@wiley.com</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>23</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Importer</td>
                    <td>Level1</td>
                    <td className="passive">
                        <span>Passive</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Thorpey Hawksley</td>
                    <td>thawksley2@senate.gov</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>59</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Distributor</td>
                    <td>Level1</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Horacio Versey</td>
                    <td>hversey3@illinois.edu</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>43</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Producer</td>
                    <td>Level1</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Raphael Dampney</td>
                    <td>rdampney4@reference</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>36</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Multi Farmer</td>
                    <td>Level2</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Arlan Pond</td>
                    <td>apond0@nytimes.com</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>16</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Distributor</td>
                    <td>Level2</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Billi Cicero</td>
                    <td>bcicerol@wiley.com</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>51</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Importer</td>
                    <td>Level2</td>
                    <td className="passive">
                        <span>Passive</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Thorpey Hawksley</td>
                    <td>thawksley2@senate.gov</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>36</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Multi Farmer</td>
                    <td>Level3</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Horacio Versey</td>
                    <td>hversey3@illinois.edu</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>36</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Multi Farmer</td>
                    <td>Level1</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
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
                    <td>Raphael Dampney</td>
                    <td>rdampney4@reference</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>36</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Multi Farmer</td>
                    <td>Level1</td>
                    <td className="activeSeller">
                        <span>Active</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>



            </tbody>
        </table>
    )
}

export default SellersTable