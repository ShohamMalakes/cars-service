import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { api } from "../utils/api";

function CarDataSearch() {
  const { mutateAsync: mutateCar } = api.car.get.useMutation();
  const [carNumber, setCarNumber] = useState<string>();

  const handleSearch = async () => {
    await mutateCar(
      {
        license_plate: carNumber, // get from state
      },
      {
        onSuccess(data) {
          console.log(data);
          // const car = data;
        },
      }
    );
  };
  return (
    <Box
      boxSize={"sm"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"red.600"}
    >
      <Input
        w={"30%"}
        bg={"yellow"}
        color={"black"}
        value={carNumber}
        onChange={() => setCarNumber}
      ></Input>
      <Button
        onClick={() => {
          handleSearch;
          console.log(carNumber);
        }}
      ></Button>
      <Text>{carNumber}</Text>
    </Box>
  );
}

export default CarDataSearch;
