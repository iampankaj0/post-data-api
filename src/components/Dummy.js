import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";

const Dummy = () => {
  const [myTitle, setMyTitle] = useState("");
  const [data, setData] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/todos";

  const fetchData = async () => {
    const resp = await axios.get(API);
    try {
      setData(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInput = (e) => {
    // e.preventDefault()
    // const newData = myTitle;
    // newData(e.target.name) = e.target.value;
    // setMyTitle(newData);
    setMyTitle(e.target.value);
    console.log("newData " + JSON.stringify(myTitle));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Data");
    console.log("form submitted ✅");
    setMyTitle("");
  };

  return (
    <div className="container">
      <h3 className="my-3 text-center bold border-bottom">PUT/PATCH API</h3>

      <div className="row mt-5">
        <input
          className="form-control"
          name="title"
          // value={myTitle}
          onChange={handleInput}
          type="text"
          placeholder="Enter Title"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-warning mt-3 text-white"
        >
          Submit
        </button>
      </div>

      <div className="row mt-5 gy-3 justify-content-center">
        {data.map((item, id) => {
          return (
            <div className="col-md-4" key={id}>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">{item.id}</p>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Completed: {item.completed}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dummy;
