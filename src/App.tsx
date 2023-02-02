// import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CarDataSearch from "./components/CarDataSearch";

function App() {
  return (
    // <Box h={"100vh"}>
    <>
      <Box
        h={"8vh"}
        bg={"gray.700"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading>Car Service&Data</Heading>
      </Box>
      <Box
        h={"92vh"}
        display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        <CarDataSearch />
      </Box>
    </>
    // </Box>
  );
}

export default App;
