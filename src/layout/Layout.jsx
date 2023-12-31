import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
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
  width: 100vw;
  min-height: 100vh;
  /* border: 2px solid green; */
`;

const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};

  padding: 0.1rem;
  min-width: 300px;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
  @media (min-width: 751px) and (max-width: 920px) {
    letter-spacing: ${({ theme }) => theme.largeLetterSpacing};
    /* border: 2px solid yellow; */
    width: 280px;
    font-size: ${({ theme }) => theme.large};
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const Content = styled.div`
  flex: 1;
  padding: 1rem;
  /* border: 2px solid black; */
`;
