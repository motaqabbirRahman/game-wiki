import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";
import React from "react";

const GameCardSceleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="200px"></Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSceleton;
