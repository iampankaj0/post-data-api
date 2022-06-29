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
    name: "",
    school: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const Submit = (e) => {
    e.preventDefault();
    axios.post(url, {
      name: data.name,
      school: data.school,
    })
    .then(res=>{
      console.log(res.data);
    })
  };

  return (
    <MainContact>
      <Form onSubmit={(e) => Submit(e)}>
        <Input
          id="name"
          onChange={(e) => handle(e)}
          value={data.name}
          type="text"
          placeholder="Name"
        />
        <Input
          id="school"
          onChange={(e) => handle(e)}
          value={data.school}
          type="text"
          placeholder="School Name"
        />
        <Button>Submit data</Button>
      </Form>
    </MainContact>
  );
};

export default Contact;
