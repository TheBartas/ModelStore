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
        const token = localStorage.getItem('access_token');
        const config = {
            headers : { authorization : `Bearer ${token}`}
        }
        async function fetchData() {
            try{
                const result = await axios.get('http://localhost:3000/products', config);
                SetProduct(result.data);
                SetFilterProd(result.data);
            } catch(error) {
                alert(error);
                navigate('/'); // czy to na pewno jest dobry pomysł?
            }
        }
        fetchData();
    }, [navigate]);

    /////// Filtrowanie ceny

    const [price, setPrice] = useState("---");

    const onOptionChangePrice = (e) => {
        setPrice(e.target.value)
    }

    /////// Filtrowanie skali

    const [scale, setScale] = useState("---");

    const onOptionChangeScale = (e) => {
        setScale(e.target.value)
    }

    /////// Filtrowanie 

    const filtredData = (val, valScale) => {

        if ((val.val1 !== -2 && val.val2 !== -2) && valScale !== "---") {
            const newItem = product.filter((newVal) => {
                return newVal.price > val.val1 && newVal.price <= val.val2 && newVal.scale === valScale;
            });
            SetProduct(newItem);
        }
        if ((val.val1 !== -2 && val.val2 !== -2) && valScale === "---") {
            const newItem = product.filter((newVal) => {
                return newVal.price > val.val1 && newVal.price <= val.val2;
            });
            SetProduct(newItem);
        }
        if ((val.val1 === -2 && val.val2 === -2) && valScale !== "---") {
            const newItem = product.filter((newVal) => {
                return newVal.scale === valScale;
            });
            SetProduct(newItem);
        }

        if ((val.val1 < 0 && val.val2 < 0) && valScale === "---") {
            SetProduct(filterProd);
        }
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
                    value = {price}
                    valueScale={scale}/>
            </div>
            <div>
                <RadioButtons 
                    onOptionChange={onOptionChangePrice} 
                    onOptionChangeScale={onOptionChangeScale}
                    scale={scale}
                    price={price}
                    />
            </div>             
            <div className="Product-Table-header">             
                <RenderTable product = {product} setProduct={SetProduct} basicProdut={filterProd}/>
            </div>
        </div>
    );
}


export default ProductsTable;