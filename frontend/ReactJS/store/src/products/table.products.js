import exampleData from "../data/data";
import ShowDetailsButton from "./buttons/show.details.button";
import './css/table.products.css';


function ProductsTable() {
    return (
        <div className="Product-Table">
            <table id="Product-Table">
                <tr>
                    <th>Numer katalogowy</th>
                    <th>Nazwa produktu</th>
                    <th>Skala</th>
                    <th>Cena</th>
                    <th></th>
                </tr>
                { exampleData.map((val, key) => {
                    return (
                        <tr key = {key}>
                            <td>{val.prod_id}</td>
                            <td>{val.name}</td>
                            <td>{val.scale}</td>
                            <td>{val.price}</td>
                            <td>
                                <ShowDetailsButton/>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}


export default ProductsTable;