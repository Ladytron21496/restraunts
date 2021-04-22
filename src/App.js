import { useState } from "react";
import axios from "axios";

export default function App() {
  const [texti, setText] = useState("");

  let handleChange = (e) => {
    setText(e.target.value);
  };

  let postData = async () => {
    let headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    let url = "http://127.0.0.1:8000/recommend_restaurant/";
    let data = {
      restaurant_name: texti,
    };
    axios
      .post(url, data, {
        headers,
      })
      .then(function (response) {
        console.log(response);
      });
  };

  let handleSubmit = () => {
    postData();
    setText("");
  };

  return (
    <div className="App">
      <input value={texti} onChange={handleChange} type="text" />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        {" "}
        Go!!{" "}
      </button>
    </div>
  );
}
