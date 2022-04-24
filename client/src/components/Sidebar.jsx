import { CSidebar, CSidebarBrand, CSidebarNav, CNavItem } from "@coreui/react";

export default function Sidebar() {
  return (
    <CSidebar style={{ width: "20%", height: "100vh" }}>
      <CSidebarBrand>Impack Pratama Tbk</CSidebarBrand>
      <CSidebarNav>
        <CNavItem href="#">Product List</CNavItem>
        <CNavItem href="#">Add product</CNavItem>
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
