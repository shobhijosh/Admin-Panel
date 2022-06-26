import React from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductsTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check5" id="check5" />
                        <label htmlFor="check5"></label>
                    </td>
                    <td>ID</td>
                    <td>PHOTO</td>
                    <td>NAME</td>
                    <td>STOCK</td>
                    <td>PRICE</td>
                    <td>CREATED AT</td>
                    <td>EDIT</td>
                    <td>REMOVE</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" name="check6" id="check6" />
                        <label htmlFor="check6"></label>
                    </td>
                    <td className='id'>#1</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>02/03/2021</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check7" id="check7" />
                        <label htmlFor="check7"></label>
                    </td>
                    <td className='id'>#2</td>
                    <td>
                        <img src={headPhone} alt="headphone" />
                    </td>
                    <td>Headphone</td>
                    <td className="StockOut">Out of Stock</td>
                    <td>$8700</td>
                    <td>24/04/2022</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check8" id="check8" />
                        <label htmlFor="check8"></label>
                    </td>
                    <td className='id'>#3</td>
                    <td>
                        <img src={glass} alt="glass" />
                    </td>
                    <td>glass</td>
                    <td className="StockIn">In Stock</td>
                    <td>$7020</td>
                    <td>12/08/2022</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check9" id="check9" />
                        <label htmlFor="check9"></label>
                    </td>
                    <td className='id'>#4</td>
                    <td>
                        <img src={perfume} alt="perfume" />
                    </td>
                    <td>perfume</td>
                    <td className="StockIn">In Stock</td>
                    <td>$9302</td>
                    <td>9/12/2022</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check10" id="check10" />
                        <label htmlFor="check10"></label>
                    </td>
                    <td className='id'>#5</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>02/03/2021</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check10" id="check10" />
                        <label htmlFor="check10"></label>
                    </td>
                    <td className='id'>#6</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>02/03/2021</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check10" id="check10" />
                        <label htmlFor="check10"></label>
                    </td>
                    <td className='id'>#7</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>02/03/2021</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check10" id="check10" />
                        <label htmlFor="check10"></label>
                    </td>
                    <td className='id'>#8</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>02/03/2021</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check10" id="check10" />
                        <label htmlFor="check10"></label>
                    </td>
                    <td className='id'>#9</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>02/03/2021</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check10" id="check10" />
                        <label htmlFor="check10"></label>
                    </td>
                    <td className='id'>#10</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>cookie</td>
                    <td className="StockIn">In Stock</td>
                    <td>$4990</td>
                    <td>02/03/2021</td>
                    <td>
                        <div className="editIcon"><EditIcon /></div>
                    </td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductsTable