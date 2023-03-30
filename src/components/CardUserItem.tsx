import Image from "./Image";
import { Text, VStack } from "@chakra-ui/react";
import * as React from "react";
import { UserType } from "../interfaces/user.interface";

type Props = UserType & {
  isMobile?: boolean;
  onClickItem?: (id: number) => void;
  isRotate?: boolean;
};
const CardUserItem = ({
  id,
  isActive,
  name,
  description,
  avatar,
  isMobile,
  onClickItem = () => {},
  isRotate = false,
}: Props) => {
  return (
    <VStack
      spacing={4}
      onClick={() => onClickItem(id)}
      cursor="pointer"
      opacity={isActive ? "1" : "0.5"}
      transition="all .3s"
    >
      <Image
        src={avatar}
        borderRadius="full"
        pointerEvents="none"
        border="2px solid"
        isAnimation={isRotate}
        boxSize={{
          base: isMobile ? "50px" : isActive ? "200px" : "50px",
          sm: isMobile ? "50px" :isActive ? "100px" : "50px",
          md: isActive ? "150px" : "100px",
          lg: isActive ? "250px" : "150px",
        }}
        transition="all .3s"
      />
      {isActive && !isMobile && (
        <>
          <Text color="teal.500" fontSize={isActive ? "2xl" : "xl"}>
            {name}
          </Text>
          <Text maxW={"250px"} textAlign="center">
            {description}
          </Text>
        </>
      )}
    </VStack>
  );
};

export default CardUserItem;
