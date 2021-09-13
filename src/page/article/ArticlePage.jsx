import React, { useState, useEffect, useMemo } from "react";
import { Text, Box } from "@chakra-ui/react";
import { getDataAsync } from "../../Axios/HttpAxios";
import { Article } from "./Article";
import { useHistory } from "react-router-dom";

export const ArticlePage = () => {
  const [posts, setPosts] = useState([]);
  const [inc, setInc] = useState(1);
  const history = useHistory();

  useEffect(() => {
    getDataAsync().then(({ data }) => setPosts(data));
  }, [inc]);

  const data = useMemo(() => posts, [posts]);

  const onNavigator = ({ id, title, body }) => {
    history.push(`/article/${id}?title=${title}&body=${body}`);
    // :topic?sort=popular
  };
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
        Articles
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {data.map((post) => (
          <Article
            isOne
            key={post.id}
            post={post}
            onClick={() => onNavigator(post)}
          />
        ))}
      </Box>
    </>
  );
};
