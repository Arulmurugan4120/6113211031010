import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { axios } from 'axios';
import { useState } from 'react';

const SingleProduct = () => {
    const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://20.244.56.144/test/companies/FLP/categories/Phone/products/${id}`,
        {
            headers: {
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYwNDgyLCJpYXQiOjE3MTUxNjAxODIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU0NGQ3MzBmLTVhMDUtNGRjNS05Zjc5LTg4YjUxMzExODkxNiIsInN1YiI6InNlYmUyazA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdlbnJpbyIsImNsaWVudElEIjoiZTQ0ZDczMGYtNWEwNS00ZGM1LTlmNzktODhiNTEzMTE4OTE2IiwiY2xpZW50U2VjcmV0IjoiTkpMYWt0WlF4eUdhQVFQcSIsIm93bmVyTmFtZSI6InNlYmVzYXJhdmFuYW4iLCJvd25lckVtYWlsIjoic2ViZTJrMDRAZ21haWwuY29tIiwicm9sbE5vIjoiNzMyMTIxMTA0MDY4In0.WsWQAORAmWbKYULBS9dPWD7Ly8FDlvi3Ws-3WBS_Bzs"
              },
        }
      );
      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  return <div>
    <div className="">
        <h1 className="text-4xl text-center ">Product</h1>
    </div>
  </div>;
};

export default SingleProduct;
