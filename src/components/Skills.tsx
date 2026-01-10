"use client";

import React, { useRef } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../app/slick-theme.css";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMui,
  SiChakraui,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const MotionBox = motion.create(Box);

// All skills with icons
const allSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Material-UI", icon: SiMui, color: "#007FFF" },
  { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "RESTful APIs", icon: FaServer, color: "#0088CC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export default function Skills() {
  const sliderRef = useRef<Slider>(null);

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
            }}
          >
            Skills & Technologies
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
              margin: "0 auto 4rem",
              borderRadius: 2,
            }}
          />

          <Box
            sx={{
              "& .slick-slide": {
                px: 1.5,
              },
              "& .slick-track": {
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <Slider ref={sliderRef} {...settings}>
              {allSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Box key={index} sx={{ px: 1 }}>
                    <Paper
                      elevation={0}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      sx={{
                        p: 2,
                        mt: 2,
                        textAlign: "center",
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        borderRadius: 2,
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        transition: "all 0.3s ease",
                        cursor: "default",
                        minHeight: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          borderColor: "rgba(96, 165, 250, 0.4)",
                          backgroundColor: "rgba(15, 23, 42, 0.95)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 4px 20px rgba(96, 165, 250, 0.2)",
                          "& .skill-icon": {
                            transform: "scale(1.1)",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <IconComponent
                          className="skill-icon"
                          style={{
                            fontSize: "2.25rem",
                            color: skill.color,
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Typography
                          variant="body2"
                          className="skill-name"
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.8rem",
                            whiteSpace: "nowrap",
                            color: "text.secondary",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
