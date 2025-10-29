import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { keyframes } from "@emotion/react";

const slideIn = keyframes`
  from {
    opacity: 0;
    //transform: translate(0%, 0%);
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -282, 0, 1);

  }
  to {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`;

const slides = [
    {
        src: "./images/main slider/intro (2).jpg",
        alt: "Green Beans Slide 1",
        caption: " ",
    },
    {
        src: "./products/all products.jpg",
        alt: "IQF Fruits ",
        caption:""
    }, {
        src: "./images/main slider/fresh-strawberries-.jpg",
        alt: "IQF Fruits ",
        caption: "IQF Fruits  \nIQF fruits are processed within hours\n of harvest to maintain maximum freshness. \n The are sorted and graded by hand to ensure \n  uniformity and quality. Vitamins, minerals,\n  and fibres are naturally preserved in the  frozen fruits,\n  including original taste, flavour and colour",
    },
    {
        src: "./images/main slider/broccoli.jpg",
        alt: "Green Beans Slide 3",
        caption: "IQF vegetables \nIQF vegetables are the preferred choices \nNaturally Fresh\nof many owing to their various qualities \n and benefits. They are quick to cook and \nreadily available to prepare a wide range\nof dishes. ",
    },
];

export default function AutoPlay() {
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        dots: true,
        infinite: true,
        fade: true,
        waitForAnimate: true,
        arrows: false,
        // vertical: true,
        swipeToSlide: true,

        beforeChange: (oldIndex:number, newIndex:number) => setActiveSlide(newIndex),
    };

    return (
        <Box sx={{ width: "100%", height: "85vh", position: "relative",marginX:'auto',mt:2}}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "85vh",
                            overflow: "hidden",
                        }}
                    >
                        {/* Slide Image */}
                        <Box
                            component="img"
                            src={slide.src}
                            alt={slide.alt}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "object-fit",
                            }}
                        />

                        {/* Caption Animation on Active Slide */}
                        {index === activeSlide && (
                            <Box
                                key={`caption-${activeSlide}`}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor:
                                        index === 2 ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)", // only 2nd slide
                                    color: index === 2 ? "rgb(0,0,0)" : "rgb(255,255,255)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "24px",
                                    transition: "background-color 1s ease",
                                    animation: `${slideIn} 1.5s ease`,
                                }}
                            >
                                <Box sx={{ textAlign: "start", maxWidth: "70%"  }}>
                                    {/* First line (big heading) */}
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: "bold",
                                            color: "rgb(255,255,255)",
                                            mb: 2,
                                        }}
                                    >

                                        {slide.caption.split("\n")[0]}
                                    </Typography>

                                    {/* Rest of caption */}
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: "bold",
                                            whiteSpace: "pre-line",
                                            lineHeight: 1.6,
                                            color:  "rgb(255,255,255)",
                                            textShadow: "0px 2px 4px rgba(0,0,0,.8)",
                                        }}
                                    >
                                        {slide.caption.split("\n").slice(1).join("\n")}
                                    </Typography>
                                </Box>
                            </Box>
                        )}


                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
