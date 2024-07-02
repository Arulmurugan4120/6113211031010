import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [p, setP] = useState(0);
  const [q, setQ] = useState(10000);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://20.244.56.144/test/companies/FLP/categories/Phone/products?top=n&minPrice=${parseInt(p)}&maxPrice=${parseInt(q)}`,
        {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTAwNTMzLCJpYXQiOjE3MTk5MDAyMzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI3NTIyY2IxLTViNWItNGJmOS1hN2I2LWFjZjViYzVkNTVlZSIsInN1YiI6ImFydWxtdXJ1Z2FuNTIyMDEyQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6Ik5BTSBDb21wYW55IiwiY2xpZW50SUQiOiIyNzUyMmNiMS01YjViLTRiZjktYTdiNi1hY2Y1YmM1ZDU1ZWUiLCJjbGllbnRTZWNyZXQiOiJOdWhQVEJlU3NlVWxjYWtkIiwib3duZXJOYW1lIjoiQXJ1bE11cnVnYW4iLCJvd25lckVtYWlsIjoic2ViZTJrMDRAZ21haWwuY29tIiwicm9sbE5vIjoiMTAifQ.jYHrnTylNiwVexEZd6VMARy7ODPG41sVm92axZqn8Hc",
          },
        }
      );
      setData(res.data.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="">
        <div className="">All Products</div>
        <div className="">
          You can see all the products through this section
        </div>
      </div>
      <div className="">
        <div className="">
          <h1 className="text-4xl font-bold ">Filter</h1>
        </div>
        <div className="">
          <label htmlFor="">MinLimit</label>
          <input type="text" onChange={(e) => setP(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="">MaxLimit</label>
          <input type="text" onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>
      <div className="">
        {data &&
          data.map((product) => (
            <div className="" key={product._id}>
              <div
                className="w-[200px] h-[300px] rounded-2xl"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <div className="">
                  <h1>{product.productName}</h1>
                </div>
                <div className="">
                  <h1>{product.price}</h1>
                </div>
                <div className="flex justify-center gap-3">
                  <h1>Rating</h1>
                  <h1>{product.rating}</h1>
                </div>
                <div className="">
                  <h1>{product.discount} %</h1>
                </div>
                <div
                  className={
                    product.availability === "yes"
                      ? "text-green-300"
                      : "text-red-600 line-through"
                  }
                >
                  <h1>Available</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
