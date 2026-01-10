'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          {/* Left column - Content */}
          <Box sx={{ flex: 2 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                About
              </Typography>

              <Box
                sx={{
                  width: 80,
                  height: 4,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                  mb: 4,
                  borderRadius: 2,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                I am a software engineer with 4+ years building web products. I focus on backend engineering,
                user experience and reliable APIs.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                I am experienced in designing and developing scalable, responsive, and secure web
                applications. Proven expertise in the full development life cycle, including architecture,
                backend/frontend development, API integrations, and client engagement. Recognized for
                delivering high-quality projects for top-tier client such as Aditya Birla Sun Life Insurance.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                Adept at working in collaborative environments with strong problem-solving and leadership
                skills. Seeking to contribute technical excellence and drive innovation in a growth-focused
                team.
              </Typography>
            </MotionBox>
          </Box>

          {/* Right column - Quick Info Card */}
          <Box sx={{ flex: 1 }}>
            <MotionPaper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'sticky',
                top: 100,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  textAlign: 'center',
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  letterSpacing: 1,
                }}
              >
                Quick Info
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    Based in
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                    }}
                  >
                    Israel
                  </Typography>
                </Box>

                <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    Work Status
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                    }}
                  >
                    Open to remote
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
