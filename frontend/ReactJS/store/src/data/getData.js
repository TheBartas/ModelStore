import { useEffect, useState} from "react";
import axios from "axios";

function GetData() {
    const [date, setMessage] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/products")
        .then((response) => {
          setMessage(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    return (
      <div>
        { date }
      </div>
    );
}



export default GetData;