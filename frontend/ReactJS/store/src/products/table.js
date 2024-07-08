import ShowDetailsButton from "./buttons/show.details.button";
import './css/table.products.css';


const RenderTable = ({product}) => {
    return (
        <table id="Product-Table">
            <tr>
                <th>Numer katalogowy</th>
                <th>Nazwa produktu</th>
                <th>Skala</th>
                <th>Cena</th>
                <th></th>
            </tr>
            { product.map((val, key) => {
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
    );
}

export default RenderTable;