import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";
import React from "react";

const GameCardSceleton = () => {
  return (
    <>
      <Card width="300px" borderRadius={10} overflow="hidden">
        <Skeleton height="200px"></Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSceleton;
