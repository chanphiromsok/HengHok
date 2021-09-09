import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import styled from "styled-components";

const NavStyled = styled(NavLink).attrs({ activeClassName: "activeLink" })`
  color: green;
  &.activeLink {
    background-color: red;
    padding: 10px;
    text-align: center;
    color: blue;
  }
`;

const Div = styled.button``;

export const Header = () => {
  return (
    <Box display="flex" flexDirection="row">
      <NavStyled exact to="/">
        Home
      </NavStyled>
      <NavStyled exact to="/contact">
        Contact
      </NavStyled>
    </Box>
  );
};
