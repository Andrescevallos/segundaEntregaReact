import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductos } from "../Utils";

const ItemDetailContainer = () => {
  const [array, setArray] = useState();

  const { id } = useParams();
    

    useEffect(() => {
      getProductos()
      .then((res) =>{
        setArray(res.find((item) => item.id === id));
      })
  }, [id]);

  return (
    <div>
        <>
          <ItemDetail {...array} />
        </>
    </div>
  );
};

export default ItemDetailContainer;
