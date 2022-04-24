import { CSidebar, CSidebarBrand, CSidebarNav, CNavItem } from "@coreui/react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <CSidebar style={{ width: "20%", height: "100vh" }}>
      <CSidebarBrand>Impack Pratama Tbk</CSidebarBrand>
      <CSidebarNav>
        <Link to="form">
          <CNavItem>Add product</CNavItem>
        </Link>
        <Link to="/">
          <CNavItem>Product List</CNavItem>
        </Link>
      </CSidebarNav>
    </CSidebar>

    // <CNav
    //   variant="pills"
    //   layout="justified"
    //   style={{ width: "20%" }}
    //   className="align-start flex-column"
    // >
    //   <CSidebarBrand>Impack Pratama Tbk</CSidebarBrand>
    //   <CSidebarNav>
    //     <CNavItem>
    //       <CNavLink href="#" active>
    //         Active
    //       </CNavLink>
    //     </CNavItem>
    //     <CNavItem>
    //       <CNavLink href="#">Link</CNavLink>
    //     </CNavItem>
    //     <CNavItem>
    //       <CNavLink href="#">Link</CNavLink>
    //     </CNavItem>
    //     <CNavItem>
    //       <CNavLink href="#" disabled>
    //         Disabled
    //       </CNavLink>
    //     </CNavItem>
    //   </CSidebarNav>
    // </CNav>
  );
}
