import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Box, useMediaQuery } from "@mui/material";
import { Home, Dashboard, MonetizationOn, Group, PersonAdd, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

function sSidebar({ open, toggleSidebar }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Checks if the screen size is small

  return (
    <Box>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"} // Temporary on small screens, permanent on larger screens
        open={open}
        onClose={toggleSidebar}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/loans">
            <ListItemIcon>
              <MonetizationOn />
            </ListItemIcon>
            <ListItemText primary="Loans" />
          </ListItemButton>
          <ListItemButton component={Link} to="/savings-groups">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Savings Groups" />
          </ListItemButton>
          <ListItemButton component={Link} to="/register">
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}

export default sSidebar;
