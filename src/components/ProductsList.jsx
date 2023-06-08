/* 
END POINT: https://dummyjson.com/products
Rendereizar os campos: title, description, price, brand, thumbnail
Não esqueça de criar o botão para mostrar e sumir com a lista (como exemplo em aula)
*/
import { useState, useEffect } from "react";
import axios from "axios";
export default function Axios() {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response);
      setProducts(response.data.products);
    }
    fetchProducts();
  }, []);
  //  console.log(products);
  function handleProducts() {
    setShowProducts(!showProducts);
  }
  return (
    <div>
      <h2>Produtos</h2>
      <button onClick={handleProducts}>Mostrar Produtos</button>
      {showProducts === true && (
        <div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>{product.price},00</h3>
                <p>{product.brand}</p>
                <img src={product.thumbnail} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
