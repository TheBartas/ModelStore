import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";


// https://dev.to/jps27cse/performing-crud-operations-in-a-react-express-mongodb-application-45d4

function ModProduct() {
    const params = useParams();
    const navigate = useNavigate();

    const [obj, setObj] = useState([]);
    useEffect(()=> {
        async function fetchData() {
          try{
            const result = await axios.get(`http://localhost:3000/products/${params.id}`);
            setObj(result.data);

          } catch {
            navigate('/');
          }
        }
        fetchData();
    }, [navigate, params]);




    const [prod_id, setProd_id] = useState(0);
    const [name, setName] = useState('');
    const [scale, setScale] = useState('');
    const [price, setPrice] = useState(0.0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            prod_id: prod_id,
            name: name,
            scale: scale,
            price: price
        }

        await axios.put(`http://localhost:3000/products/edit/${params.id}`, product);
        e.target.reset();
    }

    return (<div className="InputArea">
        <div className="Main-Panel">
            {/* <InsertNavbar /> */}
            <button onClick={()=>navigate(-1)} >Powrót</button>
        </div>
            <div className="Input-Area">
                <fieldset className="Filedset-Insert">
                    <legend>
                        Dane produktu:
                    </legend>
                        <form onSubmit={handleSubmit}>
                            <label>Numer katalogowy:</label><br></br>
                            <input type="text" placeholder={obj.prod_id}  onChange={(e) => setProd_id(parseInt(e.target.value))}></input><br></br>

                            <label>Nazwa produktu:</label><br></br>
                            <input type="text" placeholder={obj.name} onChange={(e) => setName(e.target.value)}></input><br></br>

                            <label>Skala:</label><br></br>
                            <input type="text" placeholder={obj.scale}  onChange={(e) => setScale(e.target.value)}></input><br></br>

                            <label>Cena:</label><br></br>
                            <input type="text" placeholder={obj.price} onChange={(e) => setPrice(parseFloat(e.target.value))}></input><br></br>

                            <button type='submit'>Zmień</button>
                        </form>
                </fieldset>
            </div>
    </div>);
}

export default ModProduct;