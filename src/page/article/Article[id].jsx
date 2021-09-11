import React from "react";
import { useRouter } from "../../hook/useRouter";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Article } from "./Article";
export const OneArticle = () => {
  const router = useRouter();
  const hist = useHistory();
  console.log(router.query);

  return (
    <div>
      <Button onClick={() => hist.goBack()}> Back </Button>
      <Article post={router.query} />
    </div>
  );
};
