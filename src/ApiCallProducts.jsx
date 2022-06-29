import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pankaj.css";
import "./App.css";

const Pankaj = () => {
  const [first, setfirst] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setfirst(response.data);
    console.log(response.data).catch((err) => {
      console.log("Error", err);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="all-cards">
      {first.map((data, id) => {
        const { title, image, category } = data;
        return (
          <div className="card" key={id}>
            <img src={image} alt={title} />
            <h1 className="card-title">{title}</h1>
            <p> {category} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Pankaj;
