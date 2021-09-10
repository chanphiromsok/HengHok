import React, { useState, useEffect } from "react";
import { Text, Button } from "@chakra-ui/react";
import { getDataAsync } from "../../Axios/HttpAxios";

export const HomePage = () => {
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
      >
        Recent Articles
      </Text>
      <Button onClick={() => setInc((prevState) => prevState)}></Button>
    </>
  );
};
