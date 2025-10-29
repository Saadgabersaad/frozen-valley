'use client';

import React from 'react';
import { Box, Typography, Link } from "@mui/material";

const Page = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
            width={{ xs: "90%", md: "50%" }}
            margin="auto"
            py={10}
            color="darkslategray"
            fontWeight="bold"
            textAlign="center"
        >
            <Typography variant="subtitle1"  sx={{whiteSpace: "pre-line", wordSpacing:'2' }}>
                <span style={{fontWeight:'bolder' ,fontSize:'18px'}}>Frozen valley </span>
                Frozen Valley is a leading Egyptian company specialized in exporting premium frozen fruits and vegetables to international markets.
                With a commitment to freshness, safety, and quality, we combine modern IQF freezing technology with Egypt’s naturally rich agricultural resources.

                Our products include a wide range of frozen strawberries, mango, broccoli, okra, peas, green beans, and mixed vegetables, carefully processed and packed to meet global standards.

                We proudly hold ISO 22000 certification, ensuring full compliance with international food safety systems.
                Our products are available in bulk 10 kg cartons or under Private Label, tailored to meet the unique needs of our customers.

                At Frozen Valley, we believe in long-term partnerships, consistent quality, and reliability — delivering the true taste of Egyptian produce to customers around the world.
                <br/>
                according to our clients’ needs.
            </Typography>

            <Typography variant="h6" fontWeight="bolder">
                EMAIL ADDRESS
            </Typography>

            <Link
                href="https://mail.google.com/mail/?view=cm&to=export@frozen-valley.com"
                underline="hover"
                target="_blank"
                color="primary"
                sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
            >
                export@frozen-valley.com
            </Link>
        </Box>
    );
};

export default Page;
