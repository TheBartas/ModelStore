import './show.product.css';
import './delete-button.css';
import axios from 'axios';
import { useState } from 'react';

export function ShowProduct({key, prod_id, quantity, name}) {
    const [qty, setQty] = useState(quantity);

    const handleOnClickDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/cart/delete-product?prod_id=${prod_id}`);
            window.location.reload(false);
        } catch(error) {
            alert(error);
        }
    }

    const handleOnClickPlus = async () => {
        try {
            setQty(qty + 1);
            await axios.put(`http://localhost:3000/cart/add-product/quantity?prod_id=${prod_id}`);
        } catch(error) {
            alert(error);
        }
    }

    const handleOnClickMinus = async () => {
        try {
            setQty(qty - 1);
            await axios.put(`http://localhost:3000/cart/delete-quantity?prod_id=${prod_id}`);
        } catch(error) {
            alert(error);
        }
    }
    return (
        <div className='Show-Product-Area'>
            <div className='Show-Product'>
                <div id='Div-One'> 
                    <fieldset>
                        <legend>
                            Numer katalogowy
                        </legend>
                        {prod_id}
                    </fieldset>
                </div>   
                <div id='Div-Two'>
                    <fieldset>
                        <legend>
                            Nazwa produktu
                        </legend>
                        {name}
                    </fieldset>
                </div>      
                <div>
                    <fieldset>
                        <legend>
                            Ilość
                        </legend>
                        {qty}
                    </fieldset>
                </div>  
                <div class="button-container">
                    <button class="Plus-Button" onClick={handleOnClickPlus}>+</button>
                    <button class="Minus-Button" onClick={handleOnClickMinus}>-</button>
                </div>
                <button class="remove-button" aria-label="Usuń produkt" onClick={handleOnClickDelete}>
                    <span class="remove-icon">&times;</span>
                </button>
            </div>
        </div>
    )
}