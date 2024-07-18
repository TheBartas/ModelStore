import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ShowProduct } from "./show.product";
import { NoProducts } from "./no-products";
import './cart.css';

export function CartMain() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        const config = {
            headers : { authorization : `Bearer ${token}`}
        }
        async function fetchData() {
            try {
                const result = await axios.get('http://localhost:3000/cart/products-in-cart', config);
                setData(result.data);
            } catch(error) {
                alert(error);
                navigate('/');
            }
        }
        fetchData();
    }, [navigate]);


    const onHandleBackButton = () =>{
        navigate(-1);
    }

    const H2= ({length}) => {
        if (length > 0) {
            return (
                <div className="H2-Cart">
                    <h2>Twój koszyk:</h2>
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                <button className="Back-Button" onClick={onHandleBackButton}>Powrót</button>
            </div>
            <div>
                <H2 length={data.length}/>
            </div>
            <div>
                <div className="Cart-Main-Products">
                    {data && data.length > 0 ? 
                        (data.map((val, key) => (
                            <ShowProduct key={key} prod_id={val.prod_id} quantity={val.quantity} name={val.name}/>
                        ))): 
                        (
                            <NoProducts/>
                        )}
                </div>
            </div>
        </div>
    )
}