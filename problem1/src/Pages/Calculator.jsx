import axios from "axios";
import { useState } from "react";

const Calculator = () => {
  //const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  console.log(numbers)
  const [avg, setAvg] = useState(0);
  let tempAvg = 0;
  const handleInput = async (valtype) => {
    if (valtype === "prime") {
      try {
        const res = await axios.get("http://20.244.56.144/test/primes", {
          headers: {
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYwNDgyLCJpYXQiOjE3MTUxNjAxODIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU0NGQ3MzBmLTVhMDUtNGRjNS05Zjc5LTg4YjUxMzExODkxNiIsInN1YiI6InNlYmUyazA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdlbnJpbyIsImNsaWVudElEIjoiZTQ0ZDczMGYtNWEwNS00ZGM1LTlmNzktODhiNTEzMTE4OTE2IiwiY2xpZW50U2VjcmV0IjoiTkpMYWt0WlF4eUdhQVFQcSIsIm93bmVyTmFtZSI6InNlYmVzYXJhdmFuYW4iLCJvd25lckVtYWlsIjoic2ViZTJrMDRAZ21haWwuY29tIiwicm9sbE5vIjoiNzMyMTIxMTA0MDY4In0.WsWQAORAmWbKYULBS9dPWD7Ly8FDlvi3Ws-3WBS_Bzs"
          },
        });
        setNumbers(res.data);
        setWindowCurrState(res.data);
      } catch (error) {
        console.log(error);
      }
    } else if (valtype === "fibonacci") {
      try {
        const res = await axios.get("http://20.244.56.144/test/fibo", {
            headers: {
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYwNDgyLCJpYXQiOjE3MTUxNjAxODIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU0NGQ3MzBmLTVhMDUtNGRjNS05Zjc5LTg4YjUxMzExODkxNiIsInN1YiI6InNlYmUyazA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdlbnJpbyIsImNsaWVudElEIjoiZTQ0ZDczMGYtNWEwNS00ZGM1LTlmNzktODhiNTEzMTE4OTE2IiwiY2xpZW50U2VjcmV0IjoiTkpMYWt0WlF4eUdhQVFQcSIsIm93bmVyTmFtZSI6InNlYmVzYXJhdmFuYW4iLCJvd25lckVtYWlsIjoic2ViZTJrMDRAZ21haWwuY29tIiwicm9sbE5vIjoiNzMyMTIxMTA0MDY4In0.WsWQAORAmWbKYULBS9dPWD7Ly8FDlvi3Ws-3WBS_Bzs"
              },
        });
        setNumbers(res.data);
        setWindowCurrState(res.data);
      } catch (error) {
        console.log(error);
      }
    } else if (valtype === "even") {
      try {
        const res = await axios.get("http://20.244.56.144/test/even", {
            headers: {
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYwNDgyLCJpYXQiOjE3MTUxNjAxODIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU0NGQ3MzBmLTVhMDUtNGRjNS05Zjc5LTg4YjUxMzExODkxNiIsInN1YiI6InNlYmUyazA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdlbnJpbyIsImNsaWVudElEIjoiZTQ0ZDczMGYtNWEwNS00ZGM1LTlmNzktODhiNTEzMTE4OTE2IiwiY2xpZW50U2VjcmV0IjoiTkpMYWt0WlF4eUdhQVFQcSIsIm93bmVyTmFtZSI6InNlYmVzYXJhdmFuYW4iLCJvd25lckVtYWlsIjoic2ViZTJrMDRAZ21haWwuY29tIiwicm9sbE5vIjoiNzMyMTIxMTA0MDY4In0.WsWQAORAmWbKYULBS9dPWD7Ly8FDlvi3Ws-3WBS_Bzs"
              },
        });
        setNumbers(res.data);
        setWindowCurrState(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.get("http://20.244.56.144/test/rand", {
            headers: {
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYwNDgyLCJpYXQiOjE3MTUxNjAxODIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU0NGQ3MzBmLTVhMDUtNGRjNS05Zjc5LTg4YjUxMzExODkxNiIsInN1YiI6InNlYmUyazA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdlbnJpbyIsImNsaWVudElEIjoiZTQ0ZDczMGYtNWEwNS00ZGM1LTlmNzktODhiNTEzMTE4OTE2IiwiY2xpZW50U2VjcmV0IjoiTkpMYWt0WlF4eUdhQVFQcSIsIm93bmVyTmFtZSI6InNlYmVzYXJhdmFuYW4iLCJvd25lckVtYWlsIjoic2ViZTJrMDRAZ21haWwuY29tIiwicm9sbE5vIjoiNzMyMTIxMTA0MDY4In0.WsWQAORAmWbKYULBS9dPWD7Ly8FDlvi3Ws-3WBS_Bzs"
              },
        });
        setNumbers(res.data);
        setWindowCurrState(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCalculate = () => {
    for (var i = 0; i < numbers.length; i++) {
      tempAvg = tempAvg + numbers[i];
      if (i == numbers.legnth - 1) {
        setAvg(tempAvg / numbers.length);
      }
    }
  };
  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold">Average Calculator</h1>
      </div>
      <div className="mt-5">
        <select
          name="numtype"
          id="numtype"
          className="focus:outline-none border-b-2 border-black"
          onChange={(e) => handleInput(e.target.value)}
        >
          <option value="prime">Prime</option>
          <option value="fibonacci">Fibonacci</option>
          <option value="even">Even</option>
          <option value="random">Random</option>
        </select>
      </div>

      <div className="mt-5">
        <button
          onClick={handleCalculate}
          className="bg-black pl-5 pr-5 pt-2 pb-2 rounded-3xl text-white"
        >
          Calculate
        </button>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Average: {avg}</h1>
      </div>
    </div>
  );
};

export default Calculator;
