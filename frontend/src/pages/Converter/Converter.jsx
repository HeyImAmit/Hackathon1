import React, { useState } from "react";
import axios from "axios";
import "./Converter.css";

const Converter = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = async () => {
    try {
      const response = await axios.post("http://localhost:5000/convert", {
        features: [inputText],
      });
      setResult(response.data.prediction[0]);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error processing request");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Convert Your Units Easily</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter your query"
            className="input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <p>
            *Note these are the measurements taken into consideration <br />1
            cup = 16 tbsp &nbsp; | &nbsp; 1 cup = 48 tsp &nbsp; | &nbsp; 1 cup =
            240 ml &nbsp; | &nbsp; 1 tbsp = 3 tsp &nbsp; | &nbsp; 1 tbsp = 15 ml
            &nbsp; | &nbsp; 1 tsp = 5 ml
          </p>
        </div>
        <button className="button" onClick={handleConvert}>
          Convert
        </button>
        {result && <p className="result">Result: {result}</p>}
      </div>
    </div>
  );
};

export default Converter;
