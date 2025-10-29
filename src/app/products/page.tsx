'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';
import { cards as defaultCards } from "@/app/core/consts/products";

export default function ProductsPage() {
    const router = useRouter();
    const cards = defaultCards;

    const handleNavigate = (link?: string) => {
        if (!link) return router.push('/');
        router.push(link.startsWith('/') ? link : `/${link}`);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, mt: 6 }}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                {cards.map((card) => (
                    <Box
                        key={card.id}
                        sx={{
                            width: { xs: "95%", sm: "45%", md: "20%" },
                            height: 250,
                            perspective: "1000px",
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
                                        objectFit: "cover",
                                    }}
                                />
                            </CardActionArea>

                            {/* Back Side (clickable overlay) */}
                            <Box
                                onClick={() => handleNavigate(card.link)}
                                className="overlay"
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    bgcolor: "rgb(46,125,50)",
                                    color: "white",
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
                                    textDecoration: "none",
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
                                    {card.description}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="success"
                                    sx={{ background: "white", mt: 2, fontWeight: "bold" }}
                                >
                                    Read More
                                </Button>
                            </Box>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
