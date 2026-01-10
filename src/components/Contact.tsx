'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a placeholder - form functionality will be implemented.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact"
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
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
            }}
          >
            Get In Touch
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              margin: '0 auto 2rem',
              borderRadius: 2,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 6,
              fontSize: '1.125rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
            <Box sx={{ flex: 1 }}>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Let's Talk
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    lineHeight: 1.8,
                  }}
                >
                  Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
                  I'll get back to you as soon as possible!
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    Email
                  </Typography>
                  <Typography
                    variant="h6"
                    component="a"
                    href="mailto:dolevstein@gmail.com"
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    dolevstein@gmail.com
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    Connect with me
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      component="a"
                      href="https://github.com/DolevStein19"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.primary',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          transform: 'translateY(-4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <GitHubIcon sx={{ fontSize: 28 }} />
                    </IconButton>

                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/dolev-stein/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.primary',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          transform: 'translateY(-4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LinkedInIcon sx={{ fontSize: 28 }} />
                    </IconButton>

                    <IconButton
                      component="a"
                      href="mailto:dolevstein@gmail.com"
                      sx={{
                        color: 'text.primary',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          transform: 'translateY(-4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <EmailIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                  </Stack>
                </Box>
              </MotionBox>
            </Box>

            <Box sx={{ flex: 1 }}>
              <MotionPaper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      fontSize: '1.125rem',
                      background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </MotionPaper>
            </Box>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
