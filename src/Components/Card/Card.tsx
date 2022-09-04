import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import './Card.css'

export const CardLeft = ({ title, subtitle, description, price, img, play, more, color, white }: { title: string, subtitle?: string, description: string, price: string, img: string, play: boolean, more: boolean, color: string, white: boolean }) => {
    return (
        <>
            <Link color={"inherit"}>
                <Image
                    className="image-travel"
                    objectFit="cover"
                    src={img}
                    verticalAlign="middle" />
            </Link>
            <Box
                className="box-info-pricing" bg={"#" + color}>
                <Link href="https://www.peruforless.com/packages/machu-picchu-peru-6-day-tour/">
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500">
                        {title}
                    </Text>
                    <strong>
                        <Text fontSize={"1.2rem"} fontWeight="bold">
                            {subtitle}
                        </Text>
                    </strong>
                    {description}
                    <br />
                    <strong>{price}</strong>
                </Link>
                <Flex justifyContent={"end"}>
                    {play && <Image w={"45px"} mt="10px" cursor={"pointer"} src={white ? "https://www.peruforless.com/content-files/uploads/v2/watch-white-2.svg" : "https://www.peruforless.com/content-files/uploads/v2/watch-black-2.svg"} />}
                </Flex>
                {more &&
                    <>
                        <Box mt={"1rem"}>
                            <br />
                            <br />
                            <Link textDecor={"underline"}>Lear More</Link>
                        </Box>
                        <Box mt={"1rem"}>
                            <Link textDecor={"underline"}>Book</Link>
                        </Box>
                    </>
                }
            </Box>
        </>
    )
}

export const CardRight = ({ title, description, price, img, play, more, color, white }: { title: string, description: string, price: string, img: string, play: boolean, more: boolean, color: string, white: boolean }) => {
    return (
        <>
            <Link color={"inherit"}>
                <Image
                    className="image-travel"
                    objectFit="cover"
                    src={img}
                    verticalAlign="middle" />
            </Link>
            <Box
                className="box-info-pricing left" bg={"#" + color}>
                <Link href="https://www.peruforless.com/packages/machu-picchu-peru-6-day-tour/">
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500">
                        {title}
                    </Text>
                    {description}
                    <br />
                    <strong>{price}</strong>
                </Link>
                <Flex justifyContent={"start"}>
                    {play && <Image w={"45px"} mt="10px" cursor={"pointer"} src={white ? "https://www.peruforless.com/content-files/uploads/v2/watch-white-2.svg" : "https://www.peruforless.com/content-files/uploads/v2/watch-black-2.svg"} />}
                </Flex>
                {more && <Link>Lear More</Link>}
            </Box>
        </>
    )
}

export const CardCenter = ({ title, subtitle, description, price, img, play, more, color, white }: { title: string, subtitle?: string, description: string, price: string, img: string, play: boolean, more: boolean, color: string, white: boolean }) => {
    return (
        <>
            <Link color={"inherit"}>
                <Image
                    className="image-travel"
                    objectFit="cover"
                    src={img}
                    verticalAlign="middle" />
            </Link>
            <Box
                bg={"#" + color}
                className="box-info-bottom">
                <Link href="https://www.peruforless.com/packages/machu-picchu-peru-6-day-tour/">
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500">
                        {title}
                    </Text>
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500">
                        {subtitle}
                    </Text>
                    {description}
                    <br />
                    <strong>{price}</strong>
                    <Flex justifyContent={"start"}>
                        {play && <Image w={"45px"} mt="10px" cursor={"pointer"} src={white ? "https://www.peruforless.com/content-files/uploads/v2/watch-white-2.svg" : "https://www.peruforless.com/content-files/uploads/v2/watch-black-2.svg"} />}
                    </Flex>
                    {more && <Link>Lear More</Link>}
                </Link>
            </Box>
        </>
    )
}