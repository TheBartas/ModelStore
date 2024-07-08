import './css/table.products.css';
import { useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShowNavBar from "../navbar/navbar.show.products";
import RenderTable from './table';
import FilterButtons from './buttons/filter.buttons';
import RadioButtons from './buttons/filter.radio.buttons';


function ProductsTable() {
    const [product, SetProduct] = useState([]);
    const [filterProd, SetFilterProd] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
      async function fetchData() {
        try{
          const result = await axios.get('http://localhost:3000/products');
          SetProduct(result.data);
          SetFilterProd(result.data);
        } catch {
          navigate('/');
        }
      }
      fetchData();
    }, [navigate]);







    const filtredData = (val) => {

        if (val.val1 !== -1 && val.val2 !== -1) {
            const newItem = product.filter((newVal) => {
                return newVal.price > val.val1 && newVal.price <= val.val2;
            });
            SetProduct(newItem);
        }
    }





    const [price, setPrice] = useState("---");

    const onOptionChange = (e) => {
        setPrice(e.target.value)
    }

    return (
        <div className="App-Show-Products"> 
            <div>
                <ShowNavBar />
            </div>
            <div>
                <FilterButtons 
                    filterFun = {filtredData} 
                    product = {filterProd} 
                    SetProduct = {SetProduct}
                    value = {price}/>
            </div>
            <div>
                <RadioButtons onOptionChange={onOptionChange} price={price}/>
            </div>             
            <div className="Product-Table-header">             
                <RenderTable product = {product}/>
            </div>
        </div>
    );
}


export default ProductsTable;