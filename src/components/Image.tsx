import * as React from "react";
import { chakra, keyframes, ImageProps, } from "@chakra-ui/react";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = (props: ImageProps & { isAnimation: boolean }) => {
  const animation = props.isAnimation
    ? `${spin} infinite 20s linear`
    : undefined;

  return <chakra.img animation={animation} {...props} />;
};

export default Image;
