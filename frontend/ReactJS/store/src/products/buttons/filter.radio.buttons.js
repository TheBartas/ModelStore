import './css/radio.button.css';
// import { useState } from 'react';



const RadioButtons = ({price, onOptionChange}) => {

    return (
        <div className='Area'>
            <h2 className='H2-Price'>Zakres ceny:</h2>
            <label className="Label-Radio"> ---
                <input type="radio" name="price-radio" value="---" checked={price === "---"} onChange={onOptionChange}></input>
                <span class="checkmark"></span>
            </label>
            <label className="Label-Radio"> 0 - 50 
                <input type="radio" id='rd-1' name="price-radio" value="0-50" checked={price === "0-50"} onChange={onOptionChange}></input>
                <span class="checkmark"></span>
            </label>
            <label className="Label-Radio"> 50 - 100
                <input type="radio" name="price-radio" value="50-100" checked={price === "50-100"} onChange={onOptionChange}></input>
                <span class="checkmark"></span>
            </label>
            <label className="Label-Radio"> 100 - 150
                <input type="radio" name="price-radio" value="100-150" checked={price === "100-150"} onChange={onOptionChange}></input>
                <span class="checkmark"></span>
            </label>
            <label className="Label-Radio"> 150 - 200
                <input type="radio" name="price-radio" value="150-200" checked={price === "150-200"} onChange={onOptionChange}></input>
                <span class="checkmark"></span>
            </label>
            <label className="Label-Radio"> Od 200
                <input type="radio" name="price-radio" value="200" checked={price === "200"} onChange={onOptionChange}></input>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}


export default RadioButtons;