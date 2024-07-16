import { useState } from 'react';
import InsertNavbar from '../navbar/navbar.insert';
import './css/input.insert.area.product.css';
import axios from 'axios';


function InputArea() {

    const [prod_id, setProd_id] = useState(0);
    const [name, setName] = useState('');
    const [scale, setScale] = useState('');
    const [price, setPrice] = useState(0.0);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const token = localStorage.getItem('access_token');
        const config = {
            headers : {
                authorization : `Bearer ${token}`
            }
        }

        const product = {
            prod_id: prod_id,
            name: name,
            scale: scale,
            price: price
        }

        await axios.post("http://localhost:3000/product/insert", product, config);
        e.target.reset();
    }

    return (<div className="InputArea">
        <div className="Main-Panel">
            <InsertNavbar />
        </div>
            <div className="Input-Area">
                <fieldset className="Filedset-Insert">
                    <legend>
                        Dane produktu:
                    </legend>
                        <form onSubmit={handleSubmit}>
                            <label>Numer katalogowy:</label><br></br>
                            <input type="text" placeholder='Nr.' onChange={(e) => setProd_id(parseInt(e.target.value))}></input><br></br>

                            <label>Nazwa produktu:</label><br></br>
                            <input type="text"  placeholder='Nazwa' onChange={(e) => setName(e.target.value)}></input><br></br>

                            <label>Skala:</label><br></br>
                            <input type="text" placeholder='Skala' onChange={(e) => setScale(e.target.value)}></input><br></br>

                            <label>Cena:</label><br></br>
                            <input type="text" placeholder='Cena'  onChange={(e) => setPrice(parseFloat(e.target.value))}></input><br></br>

                            <button type='submit'>Dodaj</button>
                        </form>
                </fieldset>
            </div>
    </div>);
}


export default InputArea;