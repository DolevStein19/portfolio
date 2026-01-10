"use client";

import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Rankboost",
    period: "2024 - 2025",
    description: [
      "Engineered and maintained full-stack features for a production SaaS marketing platform, delivering solutions used by active customers in real-world scenarios",
      "Architected and implemented scalable RESTful APIs using NestJS with enterprise-grade layered architecture, ensuring separation of concerns across controllers, services, and data models",
      "Built a comprehensive library of reusable and accessible UI components with Chakra UI, enhancing development velocity and establishing consistent design patterns across the platform",
      "Designed and optimized MongoDB schemas and integrated database models seamlessly into backend services, ensuring efficient data persistence and retrieval",
      "Shipped production-ready code through complete SDLC, actively participating in feature iterations, performance optimizations, and critical bug resolution",
    ],
    technologies: [
      "NestJS",
      "Node.js",
      "MongoDB",
      "Chakra UI",
      "React",
      "TypeScript",
      "RESTful APIs",
      "Postman",
    ],
  },
  {
    title: "Front-end Developer - Internship",
    company: "Mypiqs",
    period: "2024 - 2025",
    description: [
      "Developed reusable and responsive UI components using Next.js, React, TypeScript, and MUI,",
      "Implemented accessible, mobile-friendly layouts to support cross-device compatibility",
      "Integrated frontend components with Next.js server-side features",
      "Applied TypeScript best practices to improve code quality and maintainability",
      "Worked within an existing codebase, contributing to scalable frontend architecture",
    ],
    technologies: [
      "Node.js",
      "MUI",
      "React",
      "TypeScript",
      "RESTful APIs",
      "Postman",
      "express",
    ],
  },
  {
    title: "Sales Representative / Technical Support",
    company: "Memory Block, Australia",
    period: "2022 - 2023",
    description: [
      "Conducted face-to-face sales with customers in retail stores, advising on products and closing purchases directly",
      "Operated Photoshop and photo-printing software to prepare customer orders in real time",
      "Worked with professional printing equipment to produce customized products on the spot",
      "Provided technical support for photo-printing hardware and software used by customers and staff",
      "Delivered customer service for the company’s online store, resolving order and product issues",
    ],
    technologies: [
      "Adobe Photoshop",
      "Printing Software",
      "Technical Support",
      "Customer Support",
      "Problem Solving",
      "Attention to Detail",
    ],
  },
  {
    title: "Sales Representative",
    company: "Bezeq",
    period: "2022 - 2023",
    description: [
      "Provided sales and service to customers, identifying needs and offering tailored communication solutions",
      "Worked extensively with internal CRM systems to manage customer accounts, service requests, and sales workflows",
      "Performed customer retention, upselling, and issue resolution using structured, system-driven processes",
      "Maintained a high level of service quality while balancing sales goals and customer satisfaction",
    ],
    technologies: [
      "CRM Systems",
      "Excellent Verbal Communication",
      "Problem Solving",
      "Working Under Pressure",
      "Attention to Detail",
    ],
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
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
            Work Experience
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

          <Box sx={{ maxWidth: "900px", mx: "auto", position: "relative" }}>
            {/* Vertical timeline line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "20px", md: "40px" },
                top: "12px",
                bottom: "12px",
                width: "2px",
                background: "linear-gradient(180deg, #60a5fa 0%, #a78bfa 100%)",
              }}
            />

            {/* Timeline items */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {experiences.map((exp, index) => (
                <MotionBox
                  key={index}
                  sx={{
                    position: "relative",
                    pl: { xs: "60px", md: "100px" },
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: "12px", md: "32px" },
                      top: "4px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                      border: "3px solid",
                      borderColor: "background.default",
                      boxShadow: "0 0 0 3px rgba(96, 165, 250, 0.2)",
                      zIndex: 1,
                    }}
                  />

                  {/* Content */}
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: "text.primary",
                      }}
                    >
                      {exp.title}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "primary.main",
                        mb: 0.5,
                        fontSize: "1.1rem",
                      }}
                    >
                      {exp.company}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 2,
                        fontWeight: 500,
                      }}
                    >
                      {exp.period}
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
                      {exp.description.map((item, i) => (
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
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
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
                </MotionBox>
              ))}
            </Box>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
