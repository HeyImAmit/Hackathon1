// import React, { useState } from "react";
// import axios from "axios";
// import "./Converter.css";

// const Converter = () => {
//   const [inputText, setInputText] = useState("");
//   const [result, setResult] = useState("");

//   const handleConvert = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/convert", {
//         features: [inputText],
//       });
//       setResult(response.data.prediction[0]);
//     } catch (error) {
//       console.error("Error:", error);
//       setResult("Error processing request");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1 className="title">Convert Your Units Easily</h1>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter your query"
//             className="input"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//           />
//           <p>
//             *Note these are the measurements taken into consideration <br />1
//             cup = 16 tbsp &nbsp; | &nbsp; 1 cup = 48 tsp &nbsp; | &nbsp; 1 cup =
//             240 ml &nbsp; | &nbsp; 1 tbsp = 3 tsp &nbsp; | &nbsp; 1 tbsp = 15 ml
//             &nbsp; | &nbsp; 1 tsp = 5 ml
//           </p>
//         </div>
//         <button className="button" onClick={handleConvert}>
//           Convert
//         </button>
//         {result && <p className="result">Result: {result}</p>}
//       </div>
//     </div>
//   );
// };

// export default Converter;

import React, { useState } from "react";
import axios from "axios";
import { Bot, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import "./Converter.css";

function Converter() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleConvert = async () => {
    setIsLoading(true);
    setTimeout(async ()=> {
      try {
        
        const response = await axios.post("http://localhost:5000/convert", {
          features: [inputText],
        });
        console.log("Backend Response:", response.data); 
        setResult(response.data.prediction[0]); 
      } catch (error) {
        console.error("Error:", error);
        setResult("Error processing request");
      } finally {
        setIsLoading(false);
      }
    },2000)
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    await handleConvert(); 
  };

  return (
    <div className="chat-container">
      <div className="chat-content">
        {/* Header */}
        <div className="chat-header">
          <Bot className="header-icon" />
          <h1>Gramify</h1>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          {response && (
            <div className="response-message">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          )}
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-content">
                <div className="spinner-container">
                  <div className="spinner"></div>
                  <Sparkles className="sparkle-icon" />
                </div>
                <p>Generating response...</p>
              </div>
            </div>
          )}
          {result && <p className="prediction-result">{result}</p>}{" "}
        </div>
        <div className="formula-note">
          <p>
            *Note these are the measurements taken into consideration <br />1
            cup = 16 tbsp &nbsp; | &nbsp; 1 cup = 48 tsp &nbsp; | &nbsp; 1 cup =
            240 ml &nbsp; | &nbsp; 1 tbsp = 3 tsp &nbsp; | &nbsp; 1 tbsp = 15 ml
            &nbsp; | &nbsp; 1 tsp = 5 ml
          </p>
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your prompt here..."
            className="prompt-input"
            value={inputText}
          />
          <button type="submit" disabled={isLoading} className="submit-button">
            <Sparkles />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Converter;
