import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { InfoSectionData } from "@/app/core/consts/info";

interface InfoSectionProps {
    data: InfoSectionData;
    bgColor?: string;
}

export default function InfoSection({
                                        data,
                                        bgColor = "rgb(9,44,14)",
                                    }: InfoSectionProps) {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: bgColor,
                color: "white",
                py: { xs: 4, md: 5 }, // smaller padding on mobile
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: { xs: "60px", md: "90px" }, // smaller curve on mobile
                    backgroundColor: "white",
                    borderBottomLeftRadius: "100% 50px",
                    borderBottomRightRadius: "100% 50px",
                    transform: "translateY(-50%)",
                },
            }}
        >
            {/* Floating Icon */}
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: 35, md: 45 }, // tighter placement on mobile
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: bgColor,
                    borderRadius: "50%",
                    width: { xs: 55, md: 70 },
                    height: { xs: 55, md: 70 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
            >
                <DescriptionIcon sx={{ fontSize: { xs: 30, md: 40 }, color: "white" }} />
            </Box>

            {/* Desktop layout */}
            <Box
                sx={{
                    display: { xs: "none", md: "grid" },
                    gridTemplateColumns: `repeat(${data.columns.length}, 1fr)`,
                    gap: 4,
                    textAlign: "start",
                    width: "80%",
                    mt: 6,
                }}
            >
                {data.columns.map((col, idx) => (
                    <Typography key={idx} variant="h6" fontWeight="bold">
                        {col.title}
                    </Typography>
                ))}
            </Box>

            <Box
                sx={{
                    display: { xs: "none", md: "grid" },
                    gridTemplateColumns: `repeat(${data.columns.length}, 1fr)`,
                    gap: 4,
                    textAlign: "start",
                    width: "80%",
                    mt: 3,
                }}
            >
                {data.columns.map((col, idx) => (
                    <Box key={idx}>
                        {col.items.map((item, i) => (
                            <Typography key={i} variant="body1">
                                {item}
                            </Typography>
                        ))}
                    </Box>
                ))}
            </Box>

            {/* Mobile layout */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    flexDirection: "column",
                    width: "92%",
                    mt: { xs: 4, sm: 6 },
                    gap: { xs: 3, sm: 4 },
                }}
            >
                {data.columns.map((col, idx) => (
                    <Box key={idx}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            mb={0.5}
                            sx={{
                                fontSize: { xs: "16px", sm: "18px" },
                                textAlign: "left",
                            }}
                        >
                            {col.title}:
                        </Typography>
                        {col.items.map((item, i) => (
                            <Typography
                                key={i}
                                variant="body2"
                                sx={{
                                    ml: 2,
                                    fontSize: { xs: "14px", sm: "15px" },
                                    lineHeight: 1.6,
                                }}
                            >
                                • {item}
                            </Typography>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
