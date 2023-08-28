import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  console.log("children", children);
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        {children}
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 250px;

  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 0.1rem;
  @media screen and (max-width: 768px) {
    display: none;
    font-size: 1.6rem;
  }
`;
const Content = styled.div`
  flex: 1;
  padding: 1rem;
`;
