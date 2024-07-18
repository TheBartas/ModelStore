import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";



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
                const result = await axios.get(`http://localhost:3000/cart/products-in-cart?customer=${jvfbu}`, config);
                setData(result.data);
            } catch(error) {
                alert(error);
                navigate('/');
            }
        }
        fetchData();
    }, [navigate]);











    return (
        <div>Cart</div>
    )
}