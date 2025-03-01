import { Menu as MenuIcon } from "@mui/icons-material"
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/core/api/firebase"
import ProfileBadge from "./ProfileBadge"

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>()
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  /** closes the menu */
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleHome = () => {
    void navigate("/")
    handleClose()
  }

  const handleAbout = () => {
    void navigate("/", { state: { scrollTo: "about" } })
    handleClose()
  }

  const handleFAQs = () => {
    void navigate("/", { state: { scrollTo: "faqs" } })
    handleClose()
  }

  const handleToS = () => {
    void navigate("/terms-of-service")
    handleClose()
  }

  const handleFeatures = () => {
    void navigate("/", { state: { scrollTo: "features" } })
    handleClose()
  }

  const handlePP = () => {
    void navigate("/privacy-policy")
    handleClose()
  }
  const handleLoginfo = () => {
    void navigate("/login")
    handleClose()
  }
  const handleReg = () => {
    void navigate("/register")
    handleClose()
  }

  const handleDashboard = () => {
    void navigate("/dashboard")
    handleClose()
  }

  const handleJoinPoll = () => {
    void navigate("/poll/join")
    handleClose()
  }

  const handleResults = () => {
    void navigate("/poll/results")
    handleClose()
  }

  const handleProfile = () => {
    void navigate("/profile")
    handleClose()
  }

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.debug("user signed out!")
        void navigate("/get-started")
        handleClose()
      })
      .catch((err) => console.debug(err))
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' color='inherit' onClick={openMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {user && !user.isAnonymous ? (
            <Box>
              <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
              <MenuItem onClick={handleJoinPoll}>Join Poll</MenuItem>
              <MenuItem onClick={handleResults}>Results</MenuItem>
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Box>
          ) : (
            <Box>
              <MenuItem onClick={handleHome}>Home</MenuItem>
              <MenuItem onClick={handleAbout}>About</MenuItem>
              <MenuItem onClick={handleFeatures}>Features</MenuItem>
              <MenuItem onClick={handleFAQs}>FAQs</MenuItem>
              <MenuItem onClick={handleToS}>Terms of Service</MenuItem>
              <MenuItem onClick={handlePP}>Privacy Policy</MenuItem>
              <MenuItem onClick={handleLoginfo}>Login</MenuItem>
              <MenuItem onClick={handleReg}>Register</MenuItem>
            </Box>
          )}
        </Menu>
        <Typography
          variant='h6'
          component={"div"}
          onClick={handleHome}
          sx={{ cursor: "pointer" }}>
          PulseCheck
        </Typography>
        <Box flexGrow={1} />
        {user && <ProfileBadge />}
      </Toolbar>
    </AppBar>
  )
}
