import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

export const Featured = () => {
    const imgs = [
        "https://www.peruforless.com/content-files/uploads/v2/i-cnn.svg",
        "https://www.peruforless.com/content-files/uploads/v2/i-nyt.svg",
        "https://www.peruforless.com/content-files/uploads/v2/i-bbc.svg",
        "https://www.peruforless.com/content-files/uploads/v2/i-usa-today.svg",
        "https://www.peruforless.com/content-files/uploads/v2/i-asta.svg",
        "https://www.peruforless.com/content-files/uploads/v2/i-bbb.svg",
    ]
    return (
        <Box mt={"1.8rem"} ml={"8.333333333333%"}>
            <Flex justifyContent={"space-around"} flexWrap={"wrap"} alignItems={"center"}>
                <Text>Featured in:</Text>
                {imgs.map((image, idx) => <>
                    <Link p={"0.5rem"}>
                        <Image height={"35px"} src={image} key={idx} />
                    </Link>
                </>)}
            </Flex>
        </Box>
    )
}

export const BookConfidence = () => {
    return (
        <Box
            marginTop="3rem"
            width="100%"
            maxWidth="1240px"
            mx="auto"
            px={"30"}>
            <a href="https://www.peruforless.com/book-with-confidence/" >
                <Box p={"15px"}
                    pl={"3rem"}
                    pr={"1.5rem"}
                    border="1px solid #eee"
                    color="#666"
                    backgroundImage="url(https://www.peruforless.com/content-files/uploads/v2/bg-banner-postpone-1.jpg)"
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="right">
                    <Flex>
                        <Flex alignItems={"center"}>
                            <Text fontSize={"1.75rem"} fontWeight={"500"} lineHeight="1.2" margin="0 30px 0 0" paddingRight="30px" borderRight="1px solid #eee">Book with Confidence</Text>
                        </Flex>
                        <Box>
                            <Text as="span"> We offer <Text as="span" textDecoration="underline" color="#ffc107" fontWeight="bold">the most flexible postponement terms in the industry.</Text></Text><br />
                            Trips that depart before Dec. 31, 2022 can be postponed up to 30 days prior with <strong>zero</strong> fees.
                        </Box>
                    </Flex>
                </Box>
            </a >
        </Box >
    )
}