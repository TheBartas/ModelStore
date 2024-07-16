import axios from 'axios';
import './css/show.details.css';


function DeleteButon({val}) {
    const OnClickDelete = async () => {
        const token = localStorage.getItem('access_token');
        const config = {
            headers : {
                authorization : `Bearer ${token}`
            }
        }
        await axios.delete(`http://localhost:3000/products/delete/${val}`, config);
        window.location.reload(false);
    }
    return (
        <div>
            <button className='Button-Show-Details-Product' onClick={ OnClickDelete }>Usuń</button>
        </div>
    )
}


export default DeleteButon;