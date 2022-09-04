import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const CardBox = ({ children, padding, box }: { children: ReactNode, padding: string, box: string }) => {
    return (<>
        {(box == "second") ?
            <Box border="1px solid #e3e3e3" padding={padding} width="30%" fontSize=".9rem" lineHeight="1.4rem">
                {children}
            </Box > :
            <Box border="1px solid #e3e3e3" padding={padding} >
                {children}
            </Box >}
    </>
    )
}