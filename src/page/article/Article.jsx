import React, { useCallback, memo } from "react";
import { Text, Box } from "@chakra-ui/react";

export const Article = memo(({ post, onClick, isOne }) => {
  return (
    <>
      <Box width="700px">
        <Text
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
          as="h1"
          fontSize="25px"
          fontWeight="600"
        >
          {post.title}
        </Text>
        <Text as="p">{post.body}</Text>
        {isOne && (
          <Text
            marginTop="10px"
            fontWeight="500"
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => onClick()}
          >
            Read More...
          </Text>
        )}
      </Box>
      <Box
        borderTop="1px solid #DDDDDD"
        margin="32px 0px 32px 0px"
        width="700px"
      />
    </>
  );
});

// HOC is function that take another function as an argument
// props rarely change
// only render when props change
