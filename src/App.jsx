import React, { useState } from "react";
import { CssBaseline, Container, Box, Toolbar, Typography, Button, IconButton, useMediaQuery, createTheme, ThemeProvider } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import SavingsGroups from "./pages/SavingsGroups";
import CreateGroup from "./pages/CreateGroup";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Create your theme
const theme = createTheme();

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Now that ThemeProvider wraps the app, it will work

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>  {/* Wrap your app in ThemeProvider */}
      <Box>
        <CssBaseline />
        <Header toggleSidebar={toggleSidebar} />
        <Box sx={{ display: "flex" }}>
          <Sidebar open={!sidebarOpen} toggleSidebar={toggleSidebar} />
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: isMobile && sidebarOpen ? 240 : 0, // Move content when sidebar is open
              transition: "margin-left 0.3s ease-in-out",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/savings-groups" element={<SavingsGroups />} />
                <Route path="/create-group" element={<CreateGroup />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
