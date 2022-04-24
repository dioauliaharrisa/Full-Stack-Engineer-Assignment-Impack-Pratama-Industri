import Sidebar from "../components/Sidebar";
import { CForm, CFormInput, CFormLabel, CButton } from "@coreui/react";
import "../App.css";
import { useState, useEffect } from "react";


export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    price: 0,
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };

  const doSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => (console.log(response), response.json()))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="flex-container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Sidebar />
      <CForm onSubmit={doSubmit}>
        <CFormLabel htmlFor="nameInputBar">Name</CFormLabel>
        <CFormInput
          onChange={formHandler}
          className="inputBar"
          name="name"
          type="text"
          id="nameInputBar"
          aria-describedby="exampleFormControlInputHelpInline"
        />

        <CFormLabel htmlFor="codeInputBar">Code</CFormLabel>
        <CFormInput
          onChange={formHandler}
          className="inputBar"
          name="code"
          type="text"
          id="codeInputBar"
          aria-describedby="exampleFormControlInputHelpInline"
        />

        <CFormLabel htmlFor="descriptionInputBar">Description</CFormLabel>
        <CFormInput
          onChange={formHandler}
          className="inputBar"
          name="description"
          type="text"
          id="descriptionInputBar"
          aria-describedby="exampleFormControlInputHelpInline"
        />

        <CFormLabel htmlFor="priceInputBar">Price</CFormLabel>
        <CFormInput
          onChange={formHandler}
          className="inputBar"
          type="number"
          name="price"
          id="priceInputBar"
          aria-describedby="exampleFormControlInputHelpInline"
        />

        <CButton type="submit" value="submit" color="primary">
          Submit
        </CButton>
      </CForm>
    </div>
  );
}
