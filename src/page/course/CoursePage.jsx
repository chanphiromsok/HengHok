import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { Course } from "./Course";

export const CoursePage = () => {
  return (
    <>
      <Text
        textAlign="center"
        fontSize="44px"
        lineHeight="53px"
        fontWeight="700"
        a="h1"
        marginBottom="10px"
      >
        Course
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Course />
      </Box>
    </>
  );
};
