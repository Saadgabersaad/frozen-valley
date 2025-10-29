import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import Image from 'next/image';

const About = () => {
    return (
        <Box
            component={"section"}
            aria-label={"About"}
            sx={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                pt: 10,
            }}
        >
            <Typography variant="h3" color="green" fontWeight={'bold'}
                        sx={{ fontSize:{xs:'24px',md:'35px',lg:'48px',color: "rgb(24,146,197)",
                                textShadow: "0px 0px 4px rgba(24,146,197,0.6)",
                            } }}>
                Welcome To Frozen valley
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 4,
                    width: "80%",
                }}
            >
                {/* Left: Text */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "40%" }, // full width on mobile
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        alignItems: { xs: "center", md: "start" }, // center text on mobile
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography variant={"h5"} fontWeight={"bold"}
                                sx={{textShadow: "0px 0px 2px rgba(0,0,0,0.6)"}}>
                        Get to Know Us Better
                    </Typography>
                    <Typography variant={"body1"} color={"text.secondary"}>
                        <span style={{ fontWeight: "bold" }}>Frozen valley</span> Frozen Valley is a leading Egyptian company specialized in exporting premium frozen fruits and vegetables to international markets.
                        With a commitment to freshness, safety, and quality, we combine modern IQF freezing technology with Egypt’s naturally rich agricultural resources.

                        Our products include a wide range of frozen strawberries, mango, broccoli, okra, peas, green beans, and mixed vegetables, carefully processed and packed to meet global standards.


                    </Typography>
                    <Button
                        variant={"contained"}
                        sx={{ px: 3, py: 1, fontWeight: "bold",backgroundColor:"rgba(24,146,197)" }}
                        color={"primary"}
                    >
                        Contact Us
                    </Button>
                </Box>

                {/* Right: Image */}
                <Box sx={{ width: { xs: "100%", md: "40%" } }}>
                    <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                        <Image

                            src="./products/all products.jpg"
                            alt="tomato"
                            width={450}
                            height={400}
                            style={{ maxWidth: "100%", height: "auto",borderRadius:'10px' }} // responsive image
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
