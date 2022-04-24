import { CSidebar, CSidebarBrand, CSidebarNav, CNavItem } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <CSidebar
      style={{ width: "20%", height: "100vh", position: "sticky", top: 0 }}
    >
      <CSidebarBrand>
        <div role="button" onClick={() => navigate("../", { replace: true })}>
          Impack Pratama Tbk
        </div>
      </CSidebarBrand>

      <CSidebarNav>
        <CNavItem
          href="#"
          onClick={() => navigate("../create", { replace: true })}
        >
          Add product
        </CNavItem>
        <CNavItem href="#" onClick={() => navigate("../", { replace: true })}>
          Product List
        </CNavItem>
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
