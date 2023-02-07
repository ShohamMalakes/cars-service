// import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CarDataSearch from "./components/CarDataSearch";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
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
      <Box h={"92vh"}>
        <CarDataSearch />
      </Box>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
