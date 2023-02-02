import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Car } from "../types/Car";
import { api } from "../utils/api";
import carPlateImg from "../images/car_plate.png";

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
      <Box
        boxSize={"sm"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"red.600"}
      >
        {/* <Image src={""}></Image> */}
        <Input
          w={"50%"}
          bg={"yellow"}
          min={5}
          max={8}
          color={"black"}
          value={carNumber}
          id={"carNumber"}
          name={"carNumber"}
          onChange={(e) => setCarNumber(e.target.value)}
        ></Input>
        <Button
          isDisabled={!carNumber}
          onClick={
            handleSearch
            // console.log(carNumber);
          }
        ></Button>
        {(carNumberLenghth! < 5 || carNumberLenghth! > 8) && (
          <Text>מספר רכב צריך להיות בין 5-8 תווים</Text>
        )}
      </Box>
      <Box>
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
      </Box>
    </>
  );
}

export default CarDataSearch;
