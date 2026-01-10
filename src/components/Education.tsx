"use client";

import { Box, Container, Typography, Chip, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import SVCollegeLogo from "../images/SVCollege.png";
import ORTHolonLogo from "../images/Ort Holon.png";

const MotionBox = motion.create(Box);

const education = [
  {
    degree: "Full Stack Development Course",
    institution: "SVCollege",
    period: "Aug 2023 - Apr 2024",
    logo: SVCollegeLogo,
    description: [
      "Completed a comprehensive Full Stack Development program covering core web development technologies with a strong emphasis on hands-on practice",
      "The course included front-end development using HTML, CSS, and JavaScript; server-side development with Node.js and Express.js; database design and data handling with MongoDB; and building dynamic, responsive user interfaces with React",
      "As part of the program, I developed two practical projects that applied the full development cycle of modern web applications",
    ],
    skills: [
      "MongoDB",
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "HTML",
      "CSS",
    ],
  },
  {
    degree: "Bagrut (Israeli High School Diploma)",
    institution: "ORT Holon",
    period: "Sep 2011 - Jun 2017",
    logo: ORTHolonLogo,
    description: [
      "Completed foundational education with a focus on technology and technical skills",
      "Developed strong analytical and problem-solving abilities through coursework",
    ],
  },
];

export default function Education() {
  return (
    <Box
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
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
            Education
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
              maxWidth: "900px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {education.map((edu, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                sx={{
                  p: 4,
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                  borderRadius: 2,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Box sx={{ display: "flex", gap: 3 }}>
                  {/* Logo */}
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      border: "2px solid",
                      borderColor: "primary.main",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                    />
                  </Avatar>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1,
                        fontWeight: 500,
                      }}
                    >
                      {edu.period}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: "primary.main",
                      }}
                    >
                      {edu.degree}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "text.secondary",
                        mb: 3,
                        fontSize: "1rem",
                      }}
                    >
                      {edu.institution}
                    </Typography>

                    <Box
                      component="ul"
                      sx={{
                        pl: 2.5,
                        mb: 3,
                        listStyleType: "disc",
                        "& li::marker": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {edu.description.map((item, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body1"
                          sx={{
                            color: "text.secondary",
                            mb: 1.5,
                            lineHeight: 1.7,
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {edu.skills?.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: "background.paper",
                            border: "1px solid",
                            borderColor: "divider",
                            color: "text.primary",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
