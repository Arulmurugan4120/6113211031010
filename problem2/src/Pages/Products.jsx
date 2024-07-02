import { useEffect, useState } from "react";
import { axios } from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [p, setP] = useState(0);
  const [q, setQ] = useState(10000);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://20.244.56.144/test/companies/FLP/categories/Phone/products?top=n&minPrice=${p}&maxPrice=${q}`,
        {
          Authoriztion: {
            token_type: "Bearer",
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYwNDgyLCJpYXQiOjE3MTUxNjAxODIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU0NGQ3MzBmLTVhMDUtNGRjNS05Zjc5LTg4YjUxMzExODkxNiIsInN1YiI6InNlYmUyazA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdlbnJpbyIsImNsaWVudElEIjoiZTQ0ZDczMGYtNWEwNS00ZGM1LTlmNzktODhiNTEzMTE4OTE2IiwiY2xpZW50U2VjcmV0IjoiTkpMYWt0WlF4eUdhQVFQcSIsIm93bmVyTmFtZSI6InNlYmVzYXJhdmFuYW4iLCJvd25lckVtYWlsIjoic2ViZTJrMDRAZ21haWwuY29tIiwicm9sbE5vIjoiNzMyMTIxMTA0MDY4In0.WsWQAORAmWbKYULBS9dPWD7Ly8FDlvi3Ws-3WBS_Bzs",
            expires_in: 1715160482,
          },
        }
      );
      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="">
        <div className="">All Products</div>
        <div className="">
          You can able to see all the products through this section
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
          data.map((product) => {
            return (
              <div className="" key={product._id}>
                <div
                  className="w-[200px] h-[300px] rounded-2xl"
                  onClick={navigate(`/product/${product._id}`)}
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
                      product.availabilty === "yes"
                        ? "text-green-300"
                        : "text-red-600 line-through"
                    }
                  >
                    <h1>Available</h1>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
