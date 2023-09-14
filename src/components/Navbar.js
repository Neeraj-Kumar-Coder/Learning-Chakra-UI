import {
    Button,
    Flex,
    HStack,
    Heading,
    Spacer,
    StackDivider,
    Text,
} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex as={"nav"} p={"1rem"} alignItems={"center"}>
            <Heading as={"h1"} color={"red"}>
                Knowledge
            </Heading>
            <Spacer />
            <HStack
                spacing={"2rem"}
                divider={<StackDivider borderColor={"red.300"} />}
            >
                <Text>Home</Text>
                <Text>Learn</Text>
                <Text>About</Text>
                <Text>Contact</Text>
            </HStack>
            <Button ml={"2rem"} colorScheme="red">
                Login / SignUp
            </Button>
        </Flex>
    );
};

export default Navbar;
