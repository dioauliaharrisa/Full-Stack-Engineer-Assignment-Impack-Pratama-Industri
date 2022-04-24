import Sidebar from "../components/Sidebar";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CFormSelect,
} from "@coreui/react";
import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    price: 0,
    unit: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/products/" + id)
      .then((resp) => resp.json())
      .then(
        (data) =>
          setFormData({
            name: data.data.name,
            code: data.data.code,
            description: data.data.description,
            price: data.data.price,
            unit: data.data.unit,
          }),
        console.log(formData)
      );
  }, []);

  console.log(formData);

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
      await fetch("http://localhost:3000/products/" + id, {
        method: "PUT",
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
        <p style={{ margin: "30", fontSize: "xx-large" }}>Edit page</p>

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
            name="name"
            value={formData.name}
            className="inputBar"
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
            name="code"
            value={formData.code}
            className="inputBar"
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
            name="description"
            value={formData.description}
            className="inputBar"
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
            value={formData.price}
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
            value={formData.unit}
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
            style={{ marginTop: 20 }}
            type="submit"
            value="submit"
            color="primary"
          >
            Submit
          </CButton>
        </CForm>
      </div>
    </div>
  );
}
