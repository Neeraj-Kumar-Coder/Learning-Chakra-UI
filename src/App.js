import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
    const gridBoxes = [];
    for (let i = 0; i < 12; ++i)
        gridBoxes.push(
            <Box
                key={i}
                h={"150px"}
                bg={"white"}
                border={"1px solid black"}
            ></Box>
        );

    return (
        <Grid templateColumns={"repeat(6, 1fr)"}>
            <GridItem colSpan={{ base: 6, lg: 2, xl: 1 }}>
                <Box bg={"orange.50"} minH={{ lg: "100vh" }}>
                    Aside
                </Box>
            </GridItem>

            <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }}>
                <Navbar />
                <SimpleGrid
                    as={"main"}
                    bg={"gray.100"}
                    minChildWidth={"300px"}
                    spacing={10}
                    p={10}
                >
                    {gridBoxes}
                </SimpleGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
