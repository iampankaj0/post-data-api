import React, { useState } from "react";

const About = () => {
  const [products, setProducts] = useState([{}]);
  const [inputval, setInputval] = useState({
    quantity: "",
    name: "",
    image: "",
  });

  const handleInput = (e) => {
    const newInputval = { ...inputval };
    newInputval[e.target.name] = e.target.value;
    setInputval(newInputval);
    console.log(newInputval);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProd) => [
      ...prevProd,
      {
        inputval,
      },
    ]);
  };

  return (
    <div className="about">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleInput(e)}
          value={inputval.quantity}
          name="quantity"
          type="text"
          placeholder="Product Quantity"
        />
        <input
          onChange={(e) => handleInput(e)}
          value={inputval.name}
          name="name"
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => handleInput(e)}
          value={inputval.image}
          name="image"
          type="file"
          placeholder="Product Image"
        />
        <button>Send Data</button>
      </form>

      <div>
        <table className="border">
          <tr>
            <th>Product Quantity</th>
            <th>Product Name</th>
            <th>Product Image</th>
          </tr>
          {products.map((data, id) => {
            return (
              <tr key={id}>
                <td> {data.quantity} </td>
                <td> {data.name} </td>
                <td> {data.image} </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default About;
