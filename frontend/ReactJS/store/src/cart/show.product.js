import './show.product.css';
import './delete-button.css';

export function ShowProduct({key, prod_id, quantity, name}) {
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
                        {quantity}
                    </fieldset>
                </div>  
                <div class="button-container">
                    <button class="Plus-Button">+</button>
                    <button class="Minus-Button">-</button>
                </div>
                <button class="remove-button" aria-label="Usuń produkt">
                    <span class="remove-icon">&times;</span>
                </button>
            </div>
        </div>
    )
}