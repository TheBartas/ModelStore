import './css/radio.button.css';
// import { useState } from 'react';



const RadioButtons = ({price, onOptionChange, scale, onOptionChangeScale}) => {

    return (
        <div className='Area'>
            <div>
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
            <div>
                <h2 className='H2-Scale'>Skala:</h2>
                <label className="Label-Radio"> ---
                    <input type="radio" name="scale-radio" value="---" checked={scale === "---"} onChange={onOptionChangeScale}></input>
                    <span class="checkmark"></span>
                </label>
                <label className="Label-Radio"> 1/24
                    <input type="radio" name="scale-radio" value="1/24" checked={scale === "1/24"} onChange={onOptionChangeScale}></input>
                    <span class="checkmark"></span>
                </label>
                <label className="Label-Radio"> 1/35
                    <input type="radio" name="scale-radio" value="1/35" checked={scale === "1/35"} onChange={onOptionChangeScale}></input>
                    <span class="checkmark"></span>
                </label>
                <label className="Label-Radio"> 1/48
                    <input type="radio" name="scale-radio" value="1/48" checked={scale === "1/48"} onChange={onOptionChangeScale}></input>
                    <span class="checkmark"></span>
                </label>
                <label className="Label-Radio"> 1/72
                    <input type="radio" name="scale-radio" value="1/72" checked={scale === "1/72"} onChange={onOptionChangeScale}></input>
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
    )
}


export default RadioButtons;