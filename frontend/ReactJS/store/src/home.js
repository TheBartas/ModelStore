import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/product/insert");
  }

  return <button type="button" onClick={handleClick}>Dodaj produkt</button>
}
export default Form;