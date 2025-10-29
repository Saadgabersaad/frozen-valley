'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { cards as defaultCards } from "@/app/core/consts/products";

import Image from 'next/image';

function ProductCard({ cards = defaultCards }) {


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, mt: {md:6} }}>
            <Box
                sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                    gap: {xs:1,md:3},
                    alignItems: "stretch",
                    gridAutoFlow: "dens", // 🧩 fills vertical gaps nicely

                }}
            >
                {cards.map((card, index) => (
                    <Box
                        key={card.id}
                        sx={{
                            height: index === 1 ? 550 : 250,
                            perspective: "1000px",
                            gridRow: index === 1 ? "span 2" : "auto",

                        }}
                    >
                        <Card
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                "&:hover .card-img": {
                                    transform: "rotateY(90deg)",
                                    opacity: 0,
                                },
                                "&:hover .overlay": {
                                    transform: "rotateY(0deg)",
                                    opacity: 1,
                                },
                            }}
                        >
                            {/* Front Side */}
                            <CardActionArea
                                className="card-img"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    transition: "all 0.9s ease",
                                    transformOrigin: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={card.image}
                                    alt={card.title}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: 'cover',
                                    }}
                                />
                            </CardActionArea>

                            {/* Back Side (Overlay) */}
                            <Box
                                className="overlay"
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor:'rgba(3,239,36,0.4)',
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    opacity: 0,
                                    transform: "rotateY(90deg)",
                                    transformOrigin: "center",
                                    transition: "all 0.9s ease",
                                    p: 2,
                                    cursor: "pointer",

                                }}
                            >
                                <Image
                                    src="/images/logo-i.png"
                                    width={120}
                                    height={80}
                                    alt="Logo"
                                    style={{ marginBottom: 8 }}
                                />
                                <Typography variant="h4" fontWeight="bolder" color="white" sx={{textShadow: "0px 2px 4px rgba(0,0,0,.8)"}}>
                                    {card.title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ mt: 1, textAlign: "center",textShadow: "0px 2px 4px rgba(0,0,0,.8)" }} fontWeight={'bold'} color="white">
                                    {card.description}
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                ))}
            </Box>



</Box>
    );
}

export default ProductCard;
