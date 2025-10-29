import { Typography, Box } from "@mui/material";
import SelectActionCard from "@/app/components/ProductCard";
import {products} from "@/app/core/consts/products";

export default function Heading() {
    return (
       <Box sx={{display: "flex", flexDirection: "column",gap:5}}>
           <Box sx={{ position: "relative", display: "inline-block" ,margin:'auto', padding:'1.75rem' }}>
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
                   Our Product
                   <Box
                       component="span"
                       sx={{
                           position: "absolute",
                           left: "50%",
                           bottom: "-35px",
                           transform: "translateX(-50%)",
                           width: "50px",
                           height: "50px",
                           backgroundImage: "url(/images/logo.png)",
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "contain",
                           backgroundColor: "white",
                           borderRadius: "50%",
                       }}
                   />
               </Typography>

           </Box>
           <Box>
               <SelectActionCard products={products}/>
           </Box>
       </Box>
    );
}
