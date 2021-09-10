import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { getDataAsync } from "../../Axios/HttpAxios";

export const ArticlePage = () => {
  const [posts, setPosts] = useState([]);
  const [inc, setInc] = useState(1);

  useEffect(
    () => {
      getDataAsync().then(({ data }) => setPosts(data));
      console.log("Component is mounting");
      return () => {
        console.log("Component is unmounted");
        setPosts([]);
      };
    },
    // watching inc if it change
    [inc]
  );

  console.log(posts);
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
        Recent Articles
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {posts.map((post) => (
          <div>
            <Box width="700px" key={post.id}>
              <Text as="h1" fontSize="25px" fontWeight="600">
                {post.title}
              </Text>
              <p>{post.body}</p>
            </Box>
            <Box
              borderTop="1px solid #DDDDDD"
              margin="32px 0px 32px 0px"
              width="700px"
            />
          </div>
        ))}
      </Box>
    </>
  );
};
