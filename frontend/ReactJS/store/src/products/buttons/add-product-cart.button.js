import axios from 'axios';
import './css/add-product-cart.button.css';


export function AddProductToCart({prod_id, name, quantity}) {
    const handleOnClick = async () => {
        const value = {
            prod_id : prod_id, 
            name : name, 
            quantity : quantity};
        try {
            await axios.post('http://localhost:3000/cart/add-product', value);
        } catch(error) {
            const arr = error.response?.data?.statusCode === 300
            if (!arr){
                alert('Produkt znajduje się już w koszyku,');
            } else {
                alert(error);
            }
        }
    }
    return (
        <div>
            <button className="Button-Add-To-Cart" onClick={handleOnClick}>Dodaj do koszyka</button>
        </div>
    )
}