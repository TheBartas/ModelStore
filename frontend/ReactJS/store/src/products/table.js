import ShowDetailsButton from "./buttons/show.details.button";
import DeleteButon from "./buttons/delete.button";
import './css/table.products.css';
import { useState } from "react";


const RenderTable = ({product, basicProdut, setProduct}) => {
    const [name, setName] = useState('');

    const filterName = (e) => {
        const word = e.target.value;

        if (word !== '') {
            const result = product.filter((product) => {
                return product.name.toLowerCase().startsWith(word.toLowerCase());
            });
            setProduct(result);
        } else {
            setProduct(basicProdut);
        }
        setName(word);
    }

   
    const TableRow = ({length}) => {
        if (length > 0) {
            return (
                <tr>
                    <th>Numer katalogowy</th>
                    <th>Nazwa produktu</th>
                    <th>Skala</th>
                    <th>Cena</th>
                    <th></th>
                    <th></th>
                </tr>
            )
        }
    }


    return (
        <div>
            <div>
                <input  className="Search-Input" type="search" value={name} onChange={filterName} placeholder="Nazwa produktu..."/>
            </div>
            <div>
                <table id="Product-Table">
                    <TableRow length = {product.length}/>
                    { product && product.length > 0 ? (
                        product.map((val, key) => (
                        <tr key = {key}>
                            <td>{val.prod_id}</td>
                            <td>{val.name}</td>
                            <td>{val.scale}</td>
                            <td>{val.price}</td>
                            <td>
                                <ShowDetailsButton obj = {val}/>
                            </td>
                            <td>
                                <DeleteButon val = {val._id}/>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <div>
                            <fieldset className="No-Product-Error">
                                <legend>Oops!</legend>
                                <h2>Coś poszło nie tak... Nie znaleziono produktu!</h2>
                            </fieldset>
                        </div>
                    )}
                </table>
            </div>
        </div>
    )
}
export default RenderTable;