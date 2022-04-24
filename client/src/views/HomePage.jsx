import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  CTableRow,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CTable,
  CTableDataCell,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
} from "@coreui/react";

export default function HomePage() {
  const [products, setProducts] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((data, index) => setProducts(data.data));
  }, []);

  const deleteHandler = (id) => {
    fetch("http://localhost:3000/products/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => setVisible(!visible))
      .then(() =>
        fetch("http://localhost:3000/products")
          .then((res) => res.json())
          .then((res) => setProducts(res.data))
      );
  };

  console.log(products, "🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆");

  return (
    <div
      className="flex-container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Sidebar></Sidebar>
      <CTable style={{ width: "80%" }} hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">No.</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Code</CTableHeaderCell>
            <CTableHeaderCell style={{ width: "25%" }} scope="col">
              Description
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {products &&
            products.map((e, i) => (
              <CTableRow key={i}>
                <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                <CTableDataCell>{e.name}</CTableDataCell>
                <CTableDataCell>{e.code}</CTableDataCell>
                <CTableDataCell>{e.description}</CTableDataCell>
                <CTableDataCell>{e.price}</CTableDataCell>
                <CTableDataCell>
                  <Link to={`edit/${e.id}`}>
                    <CButton color="warning">Edit</CButton>
                  </Link>
                  <CButton onClick={() => setVisible(!visible)} color="danger">
                    Delete
                  </CButton>
                  <CModal visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader onClose={() => setVisible(false)}>
                      <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>Are you sure?</CModalBody>
                    <CModalFooter>
                      <CButton
                        color="secondary"
                        onClick={() => setVisible(false)}
                      >
                        Close
                      </CButton>
                      <CButton
                        onClick={() => deleteHandler(e.id)}
                        color="primary"
                      >
                        Yes, I'm sure.
                      </CButton>
                    </CModalFooter>
                  </CModal>
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  );
}