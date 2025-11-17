import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext"; // Correct import

const ProductList = () => {
  const MEN_URL = "https://fakestoreapi.com/products/category/men's%20clothing";
  const WOMEN_URL = "https://fakestoreapi.com/products/category/women's%20clothing";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const { addToCart } = useContext(CartContext); // Correct name

  const fetchProducts = async () => {
    try {
      const [menRes, womenRes] = await Promise.all([fetch(MEN_URL), fetch(WOMEN_URL)]);
      const [menData, womenData] = await Promise.all([menRes.json(), womenRes.json()]);
      setProducts([...menData, ...womenData]);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <h3 className="text-center my-5">Loading Products...</h3>;

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-center mb-4 text-decoration-underline">Latest Collections</h2>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control p-2"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 p-2 text-center">
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 style={{ height: "45px", overflow: "hidden" }}>{item.title}</h6>
                  <p className="fw-bold">${item.price}</p>
                  <button
                    className="btn btn-dark w-100 mb-3"
                    onClick={() => addToCart(item)} // Use context function
                  >
                    Add to Cart
                  </button>
                  <Link to={`/product/${item.id}`}>
                    <button className="btn btn-warning w-100">Show Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center text-danger">No products found!</h4>
        )}
      </div>
    </div>
  );
};

export default ProductList;
