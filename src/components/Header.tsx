"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Avatar,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import ProfilePic from "@/images/Profile Picture.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleImageModalOpen = () => {
    setImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setImageModalOpen(false);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      sx={{ width: 250, height: "100%", backgroundColor: "background.paper" }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{ py: 2 }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    fontSize: "1.125rem",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-evenly",
            py: 1.5,
            px: { xs: 2, md: 4 },
            maxWidth: "1400px",
            mx: "auto",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              onClick={handleImageModalOpen}
              sx={{
                width: 40,
                height: 40,
                border: "2px solid",
                borderColor: "primary.main",
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Image
                src={ProfilePic}
                alt="Dolev Stein"
                width={40}
                height={40}
                style={{ objectFit: "cover" }}
              />
            </Avatar>
            <Typography
              component="a"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "text.primary",
                display: { xs: "none", md: "block" },
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Dolev Stein
            </Typography>
          </Box>

          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness3Icon />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: "text.secondary",
                    fontSize: "1rem",
                    fontWeight: 500,
                    px: 2,
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness3Icon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      <Modal
        open={imageModalOpen}
        onClose={handleImageModalClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={imageModalOpen}>
          <Box
            onClick={handleImageModalClose}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "80vw", sm: "60vw", md: "500px" },
                height: { xs: "80vw", sm: "60vw", md: "500px" },
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid",
                borderColor: "primary.main",
                boxShadow: "0 0 40px rgba(96, 165, 250, 0.5)",
              }}
            >
              <Image
                src={ProfilePic}
                alt="Dolev Stein"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
