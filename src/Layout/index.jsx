import React from "react";
import { Top, Fill as Content, ViewPort } from "react-spaces";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <ViewPort>
      <Top size="8%" centerContent={"horizontalVertical"}>
        <Header />
      </Top>

      <Content>
        {/* <LeftResizable minimumSize={200} maximumSize={500} size="15%">
          <SideBar />
        </LeftResizable> */}
        <Content scrollable style={{ paddingTop: "40px" }}>
          {children}
        </Content>
      </Content>
    </ViewPort>
  );
};
