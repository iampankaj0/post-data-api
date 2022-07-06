import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const MainContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 94px);
`;
const Form = styled.form``;

const Input = styled.input`
  border: 2px solid #d8d8d8;
  margin: 10px 0 !important;
  display: block;
  font-size: 20px;
  border-radius: 5px;

  &:hover {
    border: 2px solid #d8d8d8;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  color: white;
  background-color: black;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 7px;
`;

const Contact = () => {
  const url = "https://fakestoreapi.com/products";

  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: "",
  });

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        title: data.title,
        category: data.category,
        description: data.description,
        image: data.image,
        price: data.price,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <MainContact>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          onChange={(e) => handleInput(e)}
          value={data.title}
          name="title"
          id="title"
          type="text"
          placeholder="title"
        />
        <Input
          onChange={(e) => handleInput(e)}
          value={data.category}
          name="category"
          id="category"
          type="text"
          placeholder="category title"
        />
        <Input
          onChange={(e) => handleInput(e)}
          value={data.description}
          name="description"
          id="description"
          type="text"
          placeholder="description title"
        />
        <Input
          onChange={(e) => handleInput(e)}
          value={data.image}
          name="image"
          id="image"
          type="file"
          placeholder="image"
        />
        <Input
          onChange={(e) => handleInput(e)}
          value={data.price}
          name="price"
          id="price"
          type="text"
          placeholder="price"
        />
        <Button>Submit Data</Button>
      </Form>
    </MainContact>
  );
};

export default Contact;
