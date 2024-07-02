import React, { useState } from "react";
import axios from "axios";

const Calculator = () => {
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);
  let tempAvg = 0;

  const handleInput = async (valtype) => {
    try {
      let endpoint = "";
      switch (valtype) {
        case "prime":
          endpoint = "http://20.244.56.144/test/primes";
          break;
        case "fibonacci":
          endpoint = "http://20.244.56.144/test/fibo";
          break;
        case "even":
          endpoint = "http://20.244.56.144/test/even";
          break;
        case "random":
          endpoint = "http://20.244.56.144/test/rand";
          break;
        default:
          break;
      }

      const res = await axios.get(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTAwNTMzLCJpYXQiOjE3MTk5MDAyMzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI3NTIyY2IxLTViNWItNGJmOS1hN2I2LWFjZjViYzVkNTVlZSIsInN1YiI6ImFydWxtdXJ1Z2FuNTIyMDEyQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6Ik5BTSBDb21wYW55IiwiY2xpZW50SUQiOiIyNzUyMmNiMS01YjViLTRiZjktYTdiNi1hY2Y1YmM1ZDU1ZWUiLCJjbGllbnRTZWNyZXQiOiJOdWhQVEJlU3NlVWxjYWtkIiwib3duZXJOYW1lIjoiQXJ1bE11cnVnYW4iLCJvd25lckVtYWlsIjoiYXJ1bG11cnVnYW41MjIwMTJAZ21haWwuY29tIiwicm9sbE5vIjoiMTAifQ.jYHrnTylNiwVexEZd6VMARy7ODPG41sVm92axZqn8Hc",
        },
      });

      setNumbers(res.data);
      setWindowCurrState(res.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleCalculate = () => {
    for (let i = 0; i < numbers.length; i++) {
      tempAvg += numbers[i];
    }
    if (numbers.length > 0) {
      setAvg(tempAvg / numbers.length);
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
