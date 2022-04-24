import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  CTableRow,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CTable,
  CTableDataCell,
  CButton,
} from "@coreui/react";

export default function HomePage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((data, index) => setProducts(data.data));
  }, []);

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
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {products &&
            products.map((e, i) => (
              <CTableRow>
                <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                <CTableDataCell>{e.name}</CTableDataCell>
                <CTableDataCell>{e.code}</CTableDataCell>
                <CTableDataCell>{e.description}</CTableDataCell>
                <CTableDataCell>{e.price}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="warning">Edit</CButton>
                  <CButton color="danger">Delete</CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  );
}
