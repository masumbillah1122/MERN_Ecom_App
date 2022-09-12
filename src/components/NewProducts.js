import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewProduct from './NewProduct';

const NewProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultProduct= await axios.get("/api/products/all");
      console.log(resultProduct.data);
      setProducts(resultProduct.data);
    };
    fetchData();
  }, []);

  return (
    <div className="npc-container">
      <div className="npc-row">
        <h2 className="npc-title">New Products</h2>
      </div>
      <div className="npc-row">
        {products.length === 0 ? (
          <h3 className="no-data">There are currently no products!</h3>
        ) : (
             <div className="npc-groups">
              {
                products.slice(-4).map((product) => (
              <NewProduct key={product._id} product={product}/>
            ))}
        </div>
        )}
      </div>
    </div>
  );
}

export default NewProducts