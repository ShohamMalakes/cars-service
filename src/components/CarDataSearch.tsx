import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  ScaleFade,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Car } from "../types/Car";
import { CarTechnicalInfo } from "../types/Car";
import { api } from "../utils/api";
import carPlateImg from "../images/car_plate1.png";
import { useInViewport } from "react-in-viewport";

function CarDataSearch() {
  const { mutateAsync: mutateCar } = api.car.get.useMutation();
  const { mutateAsync: mutateCarTechnicalInfo } =
    api.carTechnicalInfo.get.useMutation();
  const [carNumber, setCarNumber] = useState<string>();
  const [carData, setCarData] = useState<Car>();
  const [carId, setCarId] = useState<number>();
  // const ref = useRef();
  // const { inViewport } = useInViewport(
  //   ref,
  //   { rootMargin: "-100px" },
  //   { disconnectOnLeave: false },
  //   {}
  // );
  const handleSearch = async () => {
    await mutateCar(
      {
        license_plate: carNumber!,
      },
      {
        onSuccess(data) {
          console.log(data.data?.mispar_rechev);
          setCarData(data.data);
          setCarId(data.data?._id);
        },
      }
    );
  };
  const handleCarSearch = async () => {
    await mutateCarTechnicalInfo(
      {
        _id: 1723963,
      },
      {
        onSuccess(data) {
          console.log(data.data);
        },
      }
    );
  };
  const carNumberLenghth = carNumber?.length;
  return (
    <>
      {/* <Flex direction={"column"} bg={"pink"}> */}
      <Flex justify={"center"}>
        <Box
          boxSize={"sm"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Input
            w={"90%"}
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
            focusBorderColor={"none"}
            id={"carNumber"}
            onChange={(e) => setCarNumber(e.target.value)}
          ></Input>
          <Button
            // _focus={{ bg: "none" }}
            // _hover={{ bg: "none" }}
            isDisabled={
              !carNumber || carNumberLenghth! < 5 || carNumberLenghth! > 8
            }
            onClick={handleSearch}
          >
            ?????? ??????
          </Button>
          {(carNumberLenghth! < 5 || carNumberLenghth! > 8) && (
            <Text>???????? ?????? ???????? ?????????? ?????? 5-8 ??????????</Text>
          )}
          <Button isDisabled>???????? ???????????? ??????</Button>
        </Box>
      </Flex>
      <Flex
        // templateColumns="repeat(8, 1fr)"
        // templateRows="repeat(5,1fr)"
        h={"55%"}
        w={"100%"}
        // bg={"red"}
        border={"2px"}
        borderRadius={"4px"}
        dir={"rtl"}
        justifyContent={"space-around"}
        overflowX={"hidden"}
      >
        {/* <ScaleFade
          initialScale={0.9}
          in={inViewport}
          whileHover={{ scale: 1.1 }}
        > */}
        <HStack spacing={"6em"}>
          <Card boxSize={"md"} bg={"gray.500"} p={"5"}>
            <Heading textAlign={"center"}>???????? ???????? ????????????</Heading>
            <Grid
              p={"5"}
              h={"100%"}
              justifyContent={"center"}
              textAlign={"center"}
              templateRows="repeat(5,1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem>
                <Text>?????? ????????</Text>
                <Text>{carData?.degem_manoa}</Text>
              </GridItem>
              <GridItem>
                <Text>?????? ??????</Text>
                <Text>{carData?.sug_delek_nm}</Text>
              </GridItem>
              <GridItem>
                <Text>???????? ????????</Text>
                <Text>{carData?.zmig_kidmi}</Text>
              </GridItem>
              <GridItem>
                <Text>???????? ??????????</Text>
                <Text>{carData?.zmig_ahori}</Text>
              </GridItem>
            </Grid>
          </Card>
          <Card boxSize={"md"} bg={"gray.500"} p={"5"}>
            <Heading textAlign={"center"}> ???????? ????????</Heading>
            <Grid
              p={"5"}
              h={"100%"}
              justifyContent={"center"}
              textAlign={"center"}
              templateRows="repeat(5,1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem>
                <Text>????????</Text>
                <Text>{carData?.tozeret_nm}</Text>
              </GridItem>
              <GridItem>
                <Text>??????</Text>
                <Text>{carData?.kinuy_mishari}</Text>
              </GridItem>
              <GridItem>
                <Text>?????? ??????????</Text>
                <Text>{carData?.shnat_yitzur}</Text>
              </GridItem>
              <GridItem>
                <Text>?????? ??????????</Text>
                <Text>{carData?.ramat_gimur}</Text>
              </GridItem>
              <GridItem>
                <Text>?????????? ???????? ??????????</Text>
                <Text>{carData?.mivchan_acharon_dt}</Text>
              </GridItem>
              <GridItem>
                <Text>???????? ??????????</Text>
                <Text>{carData?.tokef_dt}</Text>
              </GridItem>
              <GridItem>
                <Text>??????????</Text>
                <Text>{carData?.baalut}</Text>
              </GridItem>
              <GridItem>
                <Text>???????? ????????</Text>
                <Text>{carData?.misgeret}</Text>
              </GridItem>
              <GridItem>
                <Text>???????? ??????</Text>
                <Text>{carData?.mispar_rechev}</Text>
              </GridItem>
              <GridItem>
                <Text>?????? ??????</Text>
                <Text>{carData?.degem_nm}</Text>
              </GridItem>
              <GridItem>
                <Text>?????? ???????? ??????????????</Text>
                <Text>{carData?.tozeret_cd}</Text>
              </GridItem>
            </Grid>
          </Card>
          <Card boxSize={"md"} bg={"green"}>
            3
          </Card>
        </HStack>
        {/* </ScaleFade> */}

        <GridItem>
          <Text></Text>
          <Text>{carData?.degem_cd}</Text>
        </GridItem>
        <GridItem>
          <Text></Text>
          <Text>{carData?.horaat_rishum}</Text>
        </GridItem>
        <GridItem>
          <Text>?????????? ??????????</Text>
          <Text>{carData?.kvutzat_zihum}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.moed_aliya_lakvish}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.ramat_eivzur_betihuty}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.rank}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.sug_degem}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.tzeva_cd}</Text>
        </GridItem>
        <GridItem>
          <Text>?????? ????????</Text>
          <Text>{carData?.tzeva_rechev}</Text>
        </GridItem>
      </Flex>
      {/* </Flex> */}
    </>
  );
}

export default CarDataSearch;
