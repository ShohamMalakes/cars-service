import { Box, Button, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Car } from "../types/Car";
import { api } from "../utils/api";
import carPlateImg from "../images/car_plate1.png";

function CarDataSearch() {
  const { mutateAsync: mutateCar } = api.car.get.useMutation();
  const [carNumber, setCarNumber] = useState<string>();
  const [carData, setCarData] = useState<Car>();
  const [error, setError] = useState();
  const handleSearch = async () => {
    await mutateCar(
      {
        license_plate: carNumber!,
      },
      {
        onSuccess(data) {
          console.log(data.data?.mispar_rechev);
          setCarData(data.data);
        },
      }
    );
  };
  const carNumberLenghth = carNumber?.length;
  return (
    <>
      {/* <Flex direction={"column"} bg={"pink"}> */}
      <Box
        // bg={"blue"}
        boxSize={"sm"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Input
          w={"89.5%"}
          h={"21.5%"}
          min={5}
          max={8}
          textColor={"black"}
          value={carNumber}
          textAlign={"center"}
          bgImage={carPlateImg.src}
          fontSize={"3xl"}
          placeholder={"12-345-67"}
          _placeholder={{ color: "black" }}
          fontWeight={"bold"}
          _focus={{ bg: carPlateImg.src }}
          _hover={{ bg: carPlateImg.src }}
          id={"carNumber"}
          onChange={(e) => setCarNumber(e.target.value)}
        ></Input>
        <Button
          isDisabled={
            !carNumber || carNumberLenghth! < 5 || carNumberLenghth! > 8
          }
          onClick={handleSearch}
        >
          אישור
        </Button>
        {(carNumberLenghth! < 5 || carNumberLenghth! > 8) && (
          <Text>מספר רכב צריך להיות בין 5-8 תווים</Text>
        )}
      </Box>
      <Grid
        templateColumns="repeat(8, 1fr)"
        templateRows="repeat(5,1fr)"
        h={"100%"}
        bg={"red"}
        dir={"rtl"}
      >
        <Text>{carData?.baalut}</Text>
        <Text>{carData?.degem_cd}</Text>
        <Text>{carData?.degem_manoa}</Text>
        <Text>{carData?.degem_nm}</Text>
        <Text>{carData?.horaat_rishum}</Text>
        <Text>{carData?.kinuy_mishari}</Text>
        <Text>{carData?.kvutzat_zihum}</Text>
        <Text>{carData?.misgeret}</Text>
        <Text>{carData?.mispar_rechev}</Text>
        <Text>{carData?.moed_aliya_lakvish}</Text>
        <Text>{carData?.ramat_eivzur_betihuty}</Text>
        <Text>{carData?.ramat_gimur}</Text>
        <Text>{carData?.rank}</Text>
        <Text>{carData?.shnat_yitzur}</Text>
        <Text>{carData?.sug_degem}</Text>
        <Text>{carData?.sug_delek_nm}</Text>
        <Text>{carData?.tokef_dt}</Text>
        <Text>{carData?.tozeret_cd}</Text>
        <Text>{carData?.tozeret_nm}</Text>
        <Text>{carData?.tzeva_cd}</Text>
        <Text>{carData?.tzeva_rechev}</Text>
        <Text>{carData?.zmig_ahori}</Text>
        <Text>{carData?.zmig_kidmi}</Text>
      </Grid>
      {/* </Flex> */}
    </>
  );
}

export default CarDataSearch;
