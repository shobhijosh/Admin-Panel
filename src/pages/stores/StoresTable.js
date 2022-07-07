import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StoresTable = ({ modalOpen }) => {
    const functio = () => {
        modalOpen()
    }
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>STORE NAME</td>
                    <td>STORE LOCATION</td>
                    <td>STORE CAPACITY</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='id'>#1</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#2</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#3</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#4</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#5</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#6</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#7</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#8</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#9</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td className='id'>#10</td>
                    <td>Monty General Store</td>
                    <td>Kala bazar</td>
                    <td>10000 items</td>
                    <td>
                        <div className="editIcon"><EditIcon onClick={() => functio(this)} /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>



            </tbody>
        </table>
    )
}

export default StoresTable