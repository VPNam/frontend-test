import * as React from "react";
import {
  ChakraProvider,
  theme,
  Flex,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useState } from "react";
import { UserType } from "./interfaces/user.interface";
import CardUserItem from "./components/CardUserItem";
import { initialData } from "./helpers/dataStatic";

export const App = () => {
  const [data, setData] = useState<UserType[]>(initialData);
  const [currentUser, setCurrentUser] = useState<UserType>(
    data.find((i) => i.isActive) as UserType
  );
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const handleActiveUser = (id: number | string, index: number) => {
    let newData = data.map((user) => {
      if (user.id === id) {
        return { ...user, isActive: true };
      }
      return { ...user, isActive: false };
    });

    const eleMiddleIndex = Math.ceil(newData.length / 2) - 1;
    const eleCrr = newData[index];
    newData[index] = newData[eleMiddleIndex];
    newData[eleMiddleIndex] = eleCrr;

    setCurrentUser(eleCrr);
    setData(newData);
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Flex w="full" justifyContent="center" alignItems="flex-start" h="90vh">
        <Box height="600px">
          <Flex gap={4} alignItems="center" mt={16}>
            {data.map((item, index) => (
              <CardUserItem
                {...item}
                isRotate={item.isActive}
                key={item.id}
                isMobile={isMobile}
                onClickItem={(id) => handleActiveUser(id, index)}
              />
            ))}
          </Flex>
          {currentUser && isMobile && (
            <Box mt={6}>
              <CardUserItem {...currentUser} isRotate={false} />
            </Box>
          )}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
