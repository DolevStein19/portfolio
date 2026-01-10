'use client';

import { Box, Container, Typography, Paper, Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

const projects = [
  {
    title: '[Project Name - Placeholder]',
    description:
      '[Brief description of the project, what problem it solves, and your role in building it - Placeholder]',
    technologies: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: '[Another Project - Placeholder]',
    description:
      '[Another project description highlighting key features and technologies used - Placeholder]',
    technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: '[Third Project - Placeholder]',
    description:
      '[Description of your third project, focusing on impact and technical achievements - Placeholder]',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Chakra UI'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              margin: '0 auto 4rem',
              borderRadius: 2,
            }}
          />

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
            {projects.map((project, index) => (
              <Box key={index}>
                <MotionPaper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.default',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 8px 24px rgba(96, 165, 250, 0.15)',
                    },
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'background.paper',
                          border: '1px solid',
                          borderColor: 'divider',
                          color: 'text.primary',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.primary',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(96, 165, 250, 0.1)',
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>

                    <IconButton
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.primary',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(96, 165, 250, 0.1)',
                        },
                      }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </Box>
                </MotionPaper>
              </Box>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
