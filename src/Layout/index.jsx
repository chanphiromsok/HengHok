import React from "react";
import { LeftResizable, Top, Fill as Content, ViewPort } from "react-spaces";
import { Header } from "./Header";
import { SideBar } from "./Sidebar";

export const Layout = ({ children, exact }) => {
  return (
    <ViewPort>
      <Top cone size="5%" centerContent={"horizontalVertical"}>
        <Header />
      </Top>

      <Content>
        <LeftResizable
          minimumSize={200}
          maximumSize={500}
          size="15%"
          style={{ backgroundColor: "gray" }}
        >
          <SideBar />
        </LeftResizable>

        <Content style={{ backgroundColor: "blue" }}>{children}</Content>
      </Content>
    </ViewPort>
  );
};
