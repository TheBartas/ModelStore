import InsertNavbar from '../navbar/navbar.insert';
import './css/input.insert.area.product.css';


function InputArea() {
    return (<div className="InputArea">
        <div className="Main-Panel">
            <InsertNavbar />
        </div>
        <div className="Input-Area">
            <fieldset className="Filedset-Insert">
                <legend>Dane produktu:</legend>
                    <form>
                        <label for="L_prod_id">Numer katalogowy:</label><br></br>
                        <input type="text" id="L_prod_id"></input><br></br>

                        <label for="L_name">Nazwa produktu:</label><br></br>
                        <input type="text" id="L_name"></input><br></br>

                        <label for="L_scale">Skala:</label><br></br>
                        <input type="text" id="L_prod_id"></input><br></br>

                        <label for="L_price">Cena:</label><br></br>
                        <input type="text" id="L_price"></input><br></br>

                        <button>Dodaj</button>
                    </form>
            </fieldset>
        </div>
    </div>);
}


export default InputArea;