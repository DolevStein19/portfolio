"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionPaper = motion.create(Paper);

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 10, md: 12 },
        pb: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 6,
            alignItems: "center",
          }}
        >
          <MotionBox
            sx={{ flex: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: "4rem",
                  display: "inline-block",
                  animation: "wave 2.5s ease-in-out infinite",
                  transformOrigin: "70% 70%",
                  "@keyframes wave": {
                    "0%": { transform: "rotate(0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10deg)" },
                    "60%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(0deg)" },
                  },
                }}
              >
                👋
              </Box>
              <Typography
                variant="h4"
                component="span"
                sx={{
                  fontSize: { xs: "3rem", md: "4rem" },
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                Hi, I'm
              </Typography>
            </Box>

            <Box
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                color: "text.secondary",
                mb: 3,
                minHeight: { xs: "60px", md: "80px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <TypingEffect
                texts={["Dolev Stein", "Fullstack Developer"]}
                pauseDurations={[3000, 2000]}
                typingSpeed={100}
                deletingSpeed={50}
                style={{ display: "inline-block" }}
              />
              <Box
                component="span"
                sx={{
                  width: "8px",
                  height: { xs: "1.5rem", sm: "1.75rem", md: "3rem" },
                  backgroundColor: "primary.main",
                  ml: 0.5,
                  animation: "blink 1s infinite",
                  "@keyframes blink": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                  },
                }}
              />
            </Box>

            <MotionTypography
              variant="body1"
              sx={{
                maxWidth: "650px",
                mb: 4,
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.8,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I craft performant web applications end-to-end, combining solid
              engineering fundamentals with an eye for detail. My work balances
              speed, stability, and clean user experience.
            </MotionTypography>

            <MotionBox
              sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  },
                }}
              >
                Resume
              </Button>

              <Button
                variant="outlined"
                size="large"
                component="a"
                href="https://github.com/DolevStein19"
                target="_blank"
                startIcon={<GitHubIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  borderColor: "divider",
                  color: "text.primary",
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "rgba(96, 165, 250, 0.1)",
                  },
                }}
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                size="large"
                component="a"
                href="https://www.linkedin.com/in/dolev-stein/"
                target="_blank"
                startIcon={<LinkedInIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  borderColor: "divider",
                  color: "text.primary",
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "rgba(96, 165, 250, 0.1)",
                  },
                }}
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                size="large"
                component="a"
                href="mailto:dolevstein@gmail.com"
                startIcon={<EmailIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  borderColor: "divider",
                  color: "text.primary",
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "rgba(96, 165, 250, 0.1)",
                  },
                }}
              >
                Email
              </Button>
            </MotionBox>
          </MotionBox>

          {/* Code snippet window - right side */}
          <MotionBox
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 auto",
              width: "480px",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "background.paper",
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              {/* Window header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  p: 1.5,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.default",
                }}
              >
                <Box sx={{ display: "flex", gap: 0.75 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#ef4444",
                    }}
                  />
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#f59e0b",
                    }}
                  />
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    ml: "auto",
                    mr: "auto",
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    fontFamily: "monospace",
                  }}
                >
                  developer.js
                </Typography>
              </Box>

              {/* Code content */}
              <Box
                sx={{
                  p: 3,
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                }}
              >
                <Box sx={{ color: "text.secondary", mb: 1 }}>
                  // Full Stack Developer
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Box component="span" sx={{ color: "#f97316" }}>
                    const
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#60a5fa" }}>
                    developer
                  </Box>{" "}
                  <Box component="span" sx={{ color: "text.primary" }}>
                    =
                  </Box>{" "}
                  <Box component="span" sx={{ color: "text.primary" }}>
                    {"{"}
                  </Box>
                </Box>
                <Box sx={{ pl: 3, mb: 0.5 }}>
                  <Box component="span" sx={{ color: "#a78bfa" }}>
                    name
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    :{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'Dolev Stein'
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    ,
                  </Box>
                </Box>
                <Box sx={{ pl: 3, mb: 0.5 }}>
                  <Box component="span" sx={{ color: "#a78bfa" }}>
                    skills
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    : [
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'React'
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    ,{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'Node.js'
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    ,{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'TypeScript'
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    ],
                  </Box>
                </Box>
                <Box sx={{ pl: 3, mb: 0.5 }}>
                  <Box component="span" sx={{ color: "#a78bfa" }}>
                    focuses
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    : [
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'Full-Stack'
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    ,{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'Backend'
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    ],
                  </Box>
                </Box>
                <Box sx={{ pl: 3, mb: 0.5 }}>
                  <Box component="span" sx={{ color: "#a78bfa" }}>
                    location
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    :{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'Israel'
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    ,
                  </Box>
                </Box>
                <Box sx={{ pl: 3, mb: 0.5 }}>
                  <Box component="span" sx={{ color: "#a78bfa" }}>
                    learning
                  </Box>
                  <Box component="span" sx={{ color: "text.primary" }}>
                    :{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#10b981" }}>
                    'Always'
                  </Box>
                </Box>
                <Box sx={{ color: "text.primary" }}>{"};"}</Box>
              </Box>
            </Paper>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
