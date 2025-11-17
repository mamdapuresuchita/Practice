import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext";
import Cart from "../Pages/Cart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const{addToCart}=useContext(CartContext)

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <h3 className="text-center my-5">Loading Product...</h3>;
  if (!product) return <h3 className="text-center my-5">Product Not Found</h3>;

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-secondary mb-3">
        ⬅ Back
      </Link>

      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ height: "350px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <h4 className="text-success">${product.price}</h4>
          <p className="mt-3">{product.description}</p>
          <button className="btn btn-dark w-100" onClick={addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
