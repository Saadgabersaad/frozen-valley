import React from 'react'
import {Box, Typography} from "@mui/material";

const Page = () => {
    return (
        <Box display={"flex"} flexDirection={'column'} alignItems={"center"} justifyContent={'center'} gap={4} width={"50%"} margin={"auto"} pt={5} color={'darkslategray'} fontWeight={'bold'}>
            <Typography variant={'h6'}>
                Frozen Valleye logistics department are on request, thanks to our experienced logistics team, facilities we are very pleased to deliver your goods whenever and wherever you want.
                Giving you a wide range of services with high quality to achieve our customer satisfaction.
            </Typography>
            <Typography variant={'h6'}>
                EMAIL ADDRESS
            </Typography>
            <Typography variant={'h6'}>
                export@Frozen Valleye-product.com

            </Typography>
        </Box>
    )
}
export default Page
