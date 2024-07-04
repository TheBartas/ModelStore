
function InputArea() {
    return (<div className="Iput-Area">
            <form>
                <label for="L_prod_id">Numer katalogowy:   </label>
                <input type="text" id="L_prod_id"></input><br></br>

                <label for="L_name">Nazwa produktu:   </label>
                <input type="text" id="L_name"></input><br></br>

                <label for="L_scale">Skala:   </label>
                <input type="text" id="L_prod_id"></input><br></br>

                <label for="L_price">Cena:   </label>
                <input type="text" id="L_price"></input><br></br>
            </form>
        </div>);
}


export default InputArea;