import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import styled from "styled-components";
import { Path } from "../../router/path";

const NavStyled = styled(NavLink).attrs({ activeClassName: "activeLink" })`
  padding: 15px;
  color: #27272a;
  text-align: left;
  text-decoration: none;
  font-size: 18px;
  &.activeLink {
    font-weight: bold;
  }
`;

const Div = styled.button``;

export const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="40px"
    >
      <NavStyled exact to={Path.Home}>
        Home
      </NavStyled>
      <NavStyled exact to={Path.Articles}>
        Article
      </NavStyled>
      <NavStyled exact to={Path.Courses}>
        Course
      </NavStyled>
      <NavStyled exact to={Path.AboutMe}>
        About Me
      </NavStyled>
    </Box>
  );
};
