import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export const Course = ({ course }) => {
  return (
    <Box w="700px" h="252px" bg="white">
      <Text
        as="h3"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
        as="h1"
        fontSize="25px"
        fontWeight="600"
      >
        React UseContext
      </Text>
      <Box display="flex" flexDir="row">
        <Box w="200px" h="200px" bg="red" cursor="pointer">
          <Image w="100%" h="100%" />
        </Box>
        <Box boxSizing="border-box">
          <Text w="468px">
            Paragraph
            ParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraph
          </Text>
          <Text
            marginTop="10px"
            fontWeight="500"
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Watch Course ...
          </Text>{" "}
        </Box>
      </Box>
    </Box>
  );
};
