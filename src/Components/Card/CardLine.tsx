import { Box, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const CardLine = () => {
    return (
        <Box my={"30px"}
            padding="30px 10px 50px 25px"
            background="url(https://www.peruforless.com/content-files/uploads/m-how-it-works.jpg)"
            backgroundSize="cover"
            color="white">
            <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500"> It's Simple</Text>
            <Box fontSize={{ base: "1", md: "1.15" }}>
                <Box paddingBottom="45px"
                    display="block"
                    marginBottom="15px"
                    background="url(https://www.peruforless.com/content-files/uploads/m-line-white.svg) no-repeat 25px 70px">
                    <ImageText img={"https://www.peruforless.com/content-files/themes/pfl-theme/images/v2/i-click.svg"} >
                        Send us your trip and hotel preferences <a href="">here</a>.
                    </ImageText>
                </Box>
                <Box paddingBottom="45px"
                    display="block"
                    marginBottom="15px"
                    background="url(https://www.peruforless.com/content-files/uploads/m-line-white.svg) no-repeat 25px 70px">
                    <ImageText img={"https://www.peruforless.com/content-files/themes/pfl-theme/images/v2/i-map.svg"} >
                        Customize an itinerary with your travel advisor.
                    </ImageText>
                </Box>
                <Box>
                    <ImageText img={"https://www.peruforless.com/content-files/themes/pfl-theme/images/v2/i-camera.svg"} >
                        Embark on the trip of a lifetime!
                    </ImageText>
                </Box>
            </Box>
        </Box >
    )
}
const ImageText = ({ img, children }: { img: string, children: ReactNode }) => {
    return (
        <>
            <Box
                width="50px"
                float="left" >
                <Image src={img} />
            </Box>
            <Box
                marginLeft="60px"
                fontSize="1.15rem"
                lineHeight="1.7rem">
                {children}
            </Box>
        </>
    )
}