import { Box, Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { CardCenter, CardLeft, CardRight } from "../../Components/Card/Card";
import { CardBox } from "../../Components/Card/CardBox";
import { CardLine } from "../../Components/Card/CardLine";
import './Package.css'

export const Package = () => {
    return (
        <Box width="100%" mt={"95px"} mb={"20px"} maxWidth="1240px" mx="auto" px="30px">
            <Box
                textTransform="uppercase"
                letterSpacing=".4px"
                marginBottom="5px"
                fontWeight="bold"
                fontSize={"1.4rem"}>
                <Text as={"span"}
                    width="30px"
                    height="6px"
                    display="inline-block"
                    padding-bottom="5px"
                    margin-right="5px"
                    bg={"#e76125d6"}></Text> Packages
            </Box>
            <Grid
                /* templateRows='repeat(5, 1fr)' */
                templateColumns='repeat(12, 1fr)'
                gap={"30px"}
            >
                {/* @ts-ignore */}
                <GridItem rowSpan={2} colSpan={{ base: "12", md: "5", lg: "4" }} >
                    <CardBox padding="15px 25px" box={"primary"}>
                        Passport to Peru: Free Lecture Series: <br />
                        <Link color={"#f25e29"} fontWeight={"bold"}> Join us here →</Link>
                    </CardBox>
                    <CardLine />
                    <Flex justifyContent={"space-between"} textAlign="center">
                        <CardBox padding="10px" box={"second"}>
                            <Text fontSize=".9rem"
                                lineHeight="1.4rem">
                                24/7 In-Trip Assistance
                            </Text>
                        </CardBox>
                        <CardBox padding="10px" box={"second"}>
                            Top <br />
                            Hotels
                        </CardBox>
                        <CardBox padding="10px" box={"second"}>
                            Small Groups
                        </CardBox>
                    </Flex>
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block"} colSpan={{ base: "12", md: "7", lg: "8" }}>
                    <CardLeft
                        title="Cusco & Machu Picchu"
                        description="The perfect introduction to the heartland of the Incas."
                        price="from $1189 / 6 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/bi-machu-picchu-1.jpg"
                        color="eea020e3"
                        more={false}
                        play={true}
                        white={true} />
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block"} colSpan={{ base: "12", md: "7", lg: "8" }} >
                    <CardRight
                        title="Cusco and Classic Inca Trail"
                        description="Take part in a once in a lifetime journey along the Inca Trail to Machu Picchu."
                        price="from $1759 / 9 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/bi-2.jpg"
                        color="7fb069e8"
                        more={false}
                        play={true}
                        white={true} />
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block center"} color={"#212529"} colSpan={{ base: "12", md: "5", lg: "4" }} >
                    <CardCenter
                        title="Machu Picchu & Great Galapagos"
                        description="Two of South America's most treasured attractions to cross off your bucket list!"
                        price="from $5989 / 11 days"
                        img=" https://www.peruforless.com/content-files/uploads/v2/me-2.jpg"
                        color="c0d8b6de"
                        more={false}
                        play={true}
                        white={false} />
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block center"} color={"#212529"} colSpan={{ base: "12", md: "5", lg: "4" }}>
                    <CardCenter
                        title="Machu Picchu Express"
                        description="Explore the ancient Inca-built citadel in all its glory on this streamlined journey."
                        price="from $939 / 4 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/me-1a.jpg"
                        color="d6d6b1eb"
                        more={false}
                        play={true}
                        white={false} />

                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block"} color={"#212529"} colSpan={{ base: "12", md: "7", lg: "8" }}>
                    <CardLeft
                        title="Discover Peru"
                        description="Roam across the ancient mountain ruins, coastal wildlife, desert mysteries, and vibrant rainforest on this complete journey of Peru."
                        price="from $3609 / 16 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/bi-6.jpg"
                        color="f1f4e1e0"
                        more={false}
                        play={true}
                        white={false} />
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block"} colSpan={{ base: "12", md: "7", lg: "8" }}>
                    <CardRight
                        title="Amazon River Cruise & Machu Picchu"
                        description="Visit the Lost City of Machu Picchu, then experience an unforgettable wildlife adventure with an all-inclusive Amazon cruise."
                        price="from $3629 / 9 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/bi-amazon-cruise-1.jpg"
                        color="eea020e3"
                        more={false}
                        play={false}
                        white={true} />
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block center"} colSpan={{ base: "12", md: "5", lg: "4" }}>
                    <CardCenter
                        title="Rainbow Mountain & short Inca Trail"
                        description="Walk the path of the Ancient Incas to Machu Picchu, then experience the breathtaking Rainbow Mountain."
                        price="from $1579 / 6 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/me-rainbow-mountain-2.jpg"
                        color="7fb069e8"
                        more={false}
                        play={false}
                        white={false} />
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block center"} color={"#212529"} colSpan={{ base: "12", md: "5", lg: "4" }}>
                    <CardCenter
                        title="Machu Picchu & Lake Titicaca"
                        description="Journey through the magnificent natural and man-made wonders from lakeshores to mountaintop fortresses."
                        price="from $1869 / 8 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/me-machu-picchu-5.jpg"
                        color="c0d8b6de"
                        more={false}
                        play={true}
                        white={false} />
                </GridItem>
                {/* @ts-ignore */}
                <GridItem rowSpan={2} className={"big-block"} color={"#212529"} colSpan={{ base: "12", md: "7", lg: "8" }}>
                    <CardLeft
                        title="Foodie Highlights"
                        subtitle="Effortlessly combine top-rated restaurants to any itinerary."
                        description="The perfect introduction to the heartland of the Incas."
                        price="from $1189 / 6 days"
                        img="https://www.peruforless.com/content-files/uploads/v2/p-mil.jpg"
                        color="d6d6b1eb"
                        more={true}
                        play={false}
                        white={true} />
                </GridItem>
            </Grid>
        </Box >
    )
}