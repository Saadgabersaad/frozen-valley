'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button } from "@mui/material";
import { Card as ProductCardType } from "../core/consts/products";
import { useRouter } from "next/navigation";

interface SelectActionCardProps {
    products: readonly ProductCardType[];
}

function SelectActionCard({ products }: SelectActionCardProps) {
    const router = useRouter();

    const handleNavigate = (path: string | undefined) => {

        if (path != null) {
            router.push(path);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
            }}
        >
            {products.map((product) => (
                <MuiCard
                    key={product.id}
                    onClick={() => handleNavigate(product.link)}
                    sx={{
                        width: { xs: 200, sm: 250, md: 300, lg: 350 },
                        height: { xs: 200, sm: 250, md: 300, lg: 350 },
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                >
                    <CardActionArea
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            overflow: "hidden",
                            position: "relative",
                            "&:hover .overlay": {
                                transform: "scale(1)",
                                opacity: 1,
                                border: "solid rgba(24,146,197) 3px",
                            },
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.title}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />

                        {/* Overlay */}
                        <Box
                            className="overlay"
                            sx={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                backgroundColor: "rgb(9,44,14)",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "transform 0.4s ease, opacity 0.4s ease",
                                transform: "scale(0)",
                                transformOrigin: "center",
                                opacity: 0,
                            }}
                        >
                            <Typography variant="h6">{product.title}</Typography>
                        </Box>
                    </CardActionArea>
                </MuiCard>
            ))}

            <Button
                onClick={() => router.push('/products')}
                variant="contained"
                color="success"
                sx={{
                    width: "200px",
                    height: "50px",
                    fontWeight: "bold",
                    my: 2,
                    backgroundColor: "rgba(24,146,197)",
                }}
            >
                More Products
            </Button>
        </Box>
    );
}

export default SelectActionCard;
