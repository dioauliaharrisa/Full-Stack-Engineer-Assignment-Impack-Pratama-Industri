import Sidebar from "../components/Sidebar";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CToast,
  CToastBody,
  CToastClose,
  CFormSelect,
} from "@coreui/react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const navigate = useNavigate();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    price: 0,
    unit: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };

  const doSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.name) {
      setIsToastVisible(true);
    } else if (!formData.code) {
      setIsToastVisible(true);
    } else if (!formData.description) {
      setIsToastVisible(true);
    } else if (!formData.price) {
      setIsToastVisible(true);
    } else if (!formData.unit) {
      setIsToastVisible(true);
    } else {
      setIsToastVisible(false);
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => (console.log(response), response.json()))
        .then((data) => navigate("../"))
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <div
        className="flex-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Sidebar />
        <div
          style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <p style={{ display: "flex", fontSize: "xx-large", margin: "auto" }}>
            Create page
          </p>
          <CToast
            autohide={false}
            visible={isToastVisible}
            className="align-items-center"
          >
            <div className="d-flex">
              <CToastBody>{`${Object.keys(formData).join(
                ", "
              )} need/needs to be filled`}</CToastBody>
              <CToastClose className="me-2 m-auto" />
            </div>
          </CToast>
          <CForm onSubmit={doSubmit}>
            <CFormLabel
              style={{ display: "flex" }}
              className="label"
              htmlFor="nameInputBar"
            >
              Name
            </CFormLabel>
            <CFormInput
              onChange={formHandler}
              className="inputBar"
              name="name"
              type="text"
              id="nameInputBar"
              aria-describedby="exampleFormControlInputHelpInline"
            />

            <CFormLabel
              style={{ display: "flex" }}
              className="label"
              htmlFor="codeInputBar"
            >
              Code
            </CFormLabel>
            <CFormInput
              onChange={formHandler}
              className="inputBar"
              name="code"
              type="text"
              id="codeInputBar"
              aria-describedby="exampleFormControlInputHelpInline"
            />

            <CFormLabel
              style={{ display: "flex" }}
              className="label"
              htmlFor="descriptionInputBar"
            >
              Description
            </CFormLabel>
            <CFormInput
              onChange={formHandler}
              className="inputBar"
              name="description"
              type="text"
              id="descriptionInputBar"
              aria-describedby="exampleFormControlInputHelpInline"
            />

            <CFormLabel
              style={{ display: "flex" }}
              className="label"
              htmlFor="priceInputBar"
            >
              Price
            </CFormLabel>
            <CFormInput
              onChange={formHandler}
              className="inputBar"
              type="number"
              name="price"
              id="priceInputBar"
              aria-describedby="exampleFormControlInputHelpInline"
            />

            <CFormLabel
              style={{ display: "flex" }}
              className="label"
              htmlFor="priceInputBar"
            >
              Unit
            </CFormLabel>
            <CFormSelect
              aria-label="Default select example"
              onChange={formHandler}
              name="unit"
            >
              <option>Open this select menu</option>
              <option name="unit" value="sheet">
                Sheets
              </option>
              <option name="unit" value="roll">
                Rolls
              </option>
              <option name="unit" value="pcs">
                Pcs
              </option>
            </CFormSelect>

            <CButton
              style={{
                marginTop: 20,
              }}
              type="submit"
              value="submit"
              color="primary"
            >
              Submit
            </CButton>
          </CForm>
        </div>
      </div>
    </>
  );
}
