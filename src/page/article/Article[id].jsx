import React from "react";
import { useRouter } from "../../hook/useRouter";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Article } from "./Article";
export const OneArticle = () => {
  const router = useRouter();
  const hist = useHistory();

  // fetchByID

  return (
    <div>
      <Button onClick={() => hist.goBack()}> Back </Button>
      <Article isOne={false} post={router.query} />
    </div>
  );
};
