import { Box } from "@chakra-ui/react";
import { BookConfidence, Featured } from "../../Components/Featured/Featured";

export const Book = () => {
    return (
        <Box width="100%" maxWidth="1240px" marginLeft="auto" marginRight="auto" paddingLeft="30px" paddingRight="30px" >
            <BookConfidence />
            <Featured />
        </Box >
    )
}
