import { NavLink as NLink } from "react-router-dom";
import { Link, Box } from "@chakra-ui/react";
const NavLink = ({
  to,
  text,
  children,
  color,
  bg,
  activeBg,
  activeColor,
  ...rest
}) => {
  return (
    <Link
      as={NLink}
      to={to}
      color="black"
      exact
      display="flex"
      w="200px"
      paddingLeft="4"
      paddingRight="3"
      paddingTop="2"
      paddingBottom="2"
      fontSize="14px"
      fontWeight="normal"
      cursor="pointer"
      outline="none"
      alignItems="center"
      _focus={{ outline: "none" }}
      bg={bg}
      _hover={{
        bg: activeBg,
        transition: "box-shadow 0.2s ease-in-out",
        color: activeColor,
      }}
      _activeLink={{ bg: "orange", color: "white" }}
      {...rest}
    >
      <Box display="flex" justifyItems="flex-start">
        <Box marginRight="13px">{children}</Box>
        <Box fontSize="1em" width="100%" height="100%">
          {text}
        </Box>
      </Box>
    </Link>
  );
};

export { NavLink };
