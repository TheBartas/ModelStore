import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  return <button type="button" onClick={handleClick}>Dodaj produkt</button>
}
export default Form;