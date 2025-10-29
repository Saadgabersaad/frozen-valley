'use client'
import React from 'react'
import SimpleSlider from "@/app/components/Slider";
import {Box} from "@mui/material";
import About from "@/app/components/About";
import ProductSection from "@/app/components/ProductSection";
import Quality from "@/app/components/Quality";

const Page = () => {
    return (

        <Box sx={{display:'flex',flexDirection:'column',gap:7}}>
            <SimpleSlider/>
            <About/>
            <ProductSection/>
            <Quality/>

        </Box>
    )
}
export default Page
