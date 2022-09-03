import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Banner = () => {
    return (
        <Box>
            <Flex>
                <Box flex={"4"} display={"flex"} alignItems={"center"}>
                    <Box>
                        <Text fontSize={"6xl"} lineHeight={"4.2rem"}>Let us design your trip of a lifetime</Text>
                        <Divider color="#f95d25" w={"8px"} borderTop={"8px solid"} my={"18px"} />
                        <Text fontSize={"2xl"}>Boutique travel to Peru designed for you by local experts</Text>
                        <Image src="https://www.peruforless.com/content-files/uploads/v2/trustpilot-new-home.svg" />
                        <Box
                            color="inherit"
                            fontWeight="400"
                            cursor="pointer"
                            fontSize="1.7rem"
                            opacity="1"
                            transition=".5s"
                            marginTop="50px">
                            <Image src="https://www.peruforless.com/content-files/uploads/v2/watch-icon.svg" w={"45px"}/>
                            watch
                        </Box>
                    </Box>
                </Box>
                <Box flex={"8"}>
                    <Image src="https://www.peruforless.com/content-files/uploads/v2/top-new-home-2.jpg" />
                </Box>
            </Flex>
        </Box>
    )
}