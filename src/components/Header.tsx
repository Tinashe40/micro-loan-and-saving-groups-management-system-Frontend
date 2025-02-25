import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { Home, Dashboard, MonetizationOn, Group, PersonAdd, AccountCircle } from "@mui/icons-material"; // Import icons
import { Link } from "react-router-dom";
import { Theme } from "@mui/material/styles"; // Import Theme type

// // Define the type for the props
// interface HeaderProps {
//   // toggleSidebar is no longer needed
// }

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State for the profile menu
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  // Handle menu opening and closing
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ padding: "0 16px", fontWeight: 600 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Microloan & Savings
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/dashboard" startIcon={<Dashboard />}>
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/loans" startIcon={<MonetizationOn />}>
              Loans
            </Button>
            <Button color="inherit" component={Link} to="/savings-groups" startIcon={<Group />}>
              Savings Groups
            </Button>
            <Button color="inherit" component={Link} to="/register" startIcon={<PersonAdd />}>
              Register
            </Button>
          </>
        )}

        {/* User Profile Avatar with Dropdown */}
        <IconButton onClick={handleMenuClick} color="inherit">
          <Avatar sx={{ width: 32, height: 32 }}>
            <AccountCircle />
          </Avatar>
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
