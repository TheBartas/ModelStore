import './css/show.details.css';
import { useNavigate } from 'react-router-dom';

const ShowDetailsButton = ({obj}) => {
    const navigate = useNavigate();
    
    const OnClickUpdate = () => {
        navigate(`/profile/product/update/${obj._id}`);
    }
    return (
        <div>
            <button className="Button-Show-Details-Product" onClick={OnClickUpdate }>Modyfikuj dane</button>
        </div>
    );
}

export default ShowDetailsButton;