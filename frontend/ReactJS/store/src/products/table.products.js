import ShowDetailsButton from "./buttons/show.details.button";
import './css/table.products.css';
import { useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProductsTable() {
    const [product, SetProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
      async function fetchData() {
        try{
          const result  = await axios.get('http://localhost:3000/products');
          SetProduct(result.data);
        } catch {
          navigate('/');
        }
      }
      fetchData();
    }, [navigate]);

    return (
        <div className="App-Show-Products"> 
            <div className="Product-Table-header">
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
            </div>
        </div>
    );
}


export default ProductsTable;