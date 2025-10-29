'use client';

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-around",
                alignItems: "center",
                bgcolor: "rgba(0,0,0,0.85)",
                py: 5,
                px: 2,
                gap: { xs: 3, md: 0 },
            }}
        >
            {/* Left Side (Contact Info) */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="h6" fontWeight="bold" color="white">
                    Frozen valley Logistics
                </Typography>
                <Typography variant="body1" color="white">
                     Abn Khaldoun building Al Nasr Street , Floor No. 3 , Alexandria, Egypt
                </Typography>
                <Typography variant="body1" color="white">
                    Phone: +201 555 077 623
                </Typography>
                <Typography
                    variant="body1"
                    color="white"
                    sx={{ mt: 1, fontWeight: "bold" }}
                >
                    export@frozen-valley.com
                </Typography>
            </Box>

            {/* Center (Map) */}
            <Box sx={{ width: { xs: "100%", md: "600px" }, borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d524.983874998819!2d29.886336463813883!3d31.196682572068433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1760311703147!5m2!1sen!2seg"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>

            {/* Right Side (Copyright) */}
            <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                <Typography variant="body1" color="white">
                    © {new Date().getFullYear()} Frozen Valley Product. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
