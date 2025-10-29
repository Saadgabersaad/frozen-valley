'use client';
import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import TourIcon from '@mui/icons-material/Tour';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Quality = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={{ xs: 6, md: 10 }}
            sx={{ px: {  md: 0 } }}
        >
            {/* Section Title */}
            <Typography
                variant="h3"
                sx={{
                    fontSize: { xs: "24px", md: "35px", lg: "48px" },
                    textShadow: "0px 0px 4px rgba(24,146,197,0.6)",
                    color: "rgb(24,146,197)",
                    fontWeight: "bold",
                    position: "relative",
                    display: "inline-block",
                    pb: 1,
                    "&::before, &::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -10,
                        height: "2px",
                        backgroundColor: "black",
                        width: "45%",
                    },
                    "&::before": {
                        left: -15,
                    },
                    "&::after": {
                        right: -15,
                    },
                }}
            >
                Quality
                <Box
                    component="span"
                    sx={{
                        position: "absolute",
                        left: "50%",
                        bottom: "-35px",
                        transform: "translateX(-50%)",
                        width: { xs: "40px", md: "50px" },
                        height: { xs: "40px", md: "50px" },
                        backgroundImage: "url(/images/logo.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundColor: "white",
                        borderRadius: "50%",
                    }}
                />
            </Typography>

            {/* Quality Sections */}
            <Box
                bgcolor="rgb(6,88,102)"
                color="white"
                fontWeight="bolder"
                display="flex"
                flexDirection="column"
                py={{ xs: 6, md: 8 }}
                width="100%"
            >
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={{ xs: 6, md: 8 }}
                    width={{ xs: "90%", md: "80%" }}
                    marginX="auto"
                    alignItems="center"
                >
                    {/* 1️⃣ Quality Standards */}
                    <Box
                        flex={1}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        gap={2}
                        textAlign="center"
                    >
                        <StarIcon sx={{ fontSize: { xs: "60px", md: "80px" } }} color="inherit" />
                        <Typography fontWeight="bolder" variant="h5" fontSize={{ xs: "20px", md: "24px" }}>
                            Our Quality Standards:
                        </Typography>
                        <Typography sx={{ wordSpacing: "0.15em", fontSize: { xs: "14px", md: "16px" } }}>
                            Frozen valley prides itself on working with the best growers to deliver the finest product.
                            We are committed to achieving the highest standards in our manufacturing facilities.
                            Our focus is to ensure the best quality & packaging (Bulk & Retail), according to our clients’ needs.
                        </Typography>
                        <Button variant="outlined" color="inherit" sx={{ mt: 1 }}>
                            Read More
                        </Button>
                    </Box>

                    {/* 2️⃣ Logistical Fleet */}
                    <Box
                        flex={1}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        gap={2}
                        textAlign="center"
                    >
                        <LocalShippingIcon color="inherit" sx={{ fontSize: { xs: "60px", md: "80px" } }} />
                        <Typography fontWeight="bolder" variant="h5" fontSize={{ xs: "20px", md: "24px" }}>
                            Our Logistical Fleet:
                        </Typography>
                        <Typography sx={{ wordSpacing: "0.15em", fontSize: { xs: "14px", md: "16px" } }}>
                            Frozen valley is always ready to deliver your goods whenever and wherever you want,
                            thanks to our experienced logistics team and facilities. We offer a wide range of
                            services with the highest quality.
                        </Typography>
                        <Button variant="outlined" color="inherit" sx={{ mt: 1 }}>
                            Read More
                        </Button>
                    </Box>

                    {/* 3️⃣ Visit Frozen valley */}
                    <Box
                        flex={1}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        gap={2}
                        textAlign="center"
                    >
                        <TourIcon sx={{ fontSize: { xs: "60px", md: "80px" } }} color="inherit" />
                        <Typography fontWeight="bolder" variant="h5" fontSize={{ xs: "20px", md: "24px" }}>
                            Visit Frozen valley
                        </Typography>
                        <Typography sx={{ wordSpacing: "0.15em", fontSize: { xs: "14px", md: "16px" } }}>
                            Frozen valley was established to fulfill the market’s need for high-quality frozen food products.
                        </Typography>
                        <Button variant="outlined" color="inherit" sx={{ mt: 1 }}>
                            Contact Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Quality;
