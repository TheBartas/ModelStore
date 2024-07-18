
import { useNavigate } from 'react-router-dom';
import './no-products.css';
export function NoProducts() {

    const navigate = useNavigate();


    const onHandleBackButton = () => {
        navigate('/profile/products');
    }

    return (
        <div class="Empty-Cart">
            <div class="Empty-Cart-Content">
                <h2>Twój koszyk jest pusty</h2>
                <p>Dodaj produkty do koszyka, aby zobaczyć je tutaj.</p>
                <button class="Shop-Now-Button" onClick={onHandleBackButton}>Zobacz produkty</button>
            </div>
        </div>
    )
}