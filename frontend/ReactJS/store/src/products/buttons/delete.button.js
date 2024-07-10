import axios from 'axios';
import './css/show.details.css';


function DeleteButon({val}) {
    const OnClickDelete = async () => {
        await axios.delete(`http://localhost:3000/products/delete/${val}`);
        window.location.reload(false);
    }



    return (
        <div>
            <button className='Button-Show-Details-Product' onClick={ OnClickDelete }>Usuń</button>
        </div>
    )
}


export default DeleteButon;