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
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/services/firebase"
import ProfileBadge from "./ProfileBadge"

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>()
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
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
    /* TODO - go to about */
    void navigate("/", { state: { scrollTo: "about" } })
    handleClose()
  }

  const handleFAQs = () => {
    /* TODO - go to about */
    void navigate("/", { state: { scrollTo: "faqs" } })
    handleClose()
  }

  const handleToS = () => {
    void navigate("/terms-of-service")
  }

  const handleFeatures = () => {
    // TODO - go to Features
    void navigate("/", { state: { scrollTo: "features" } })
    handleClose()
  }

  const handlePP = () => {
    // TODO - go to Features
    void navigate("/privacy-policy")
  }
  const handleLoginfo = () => {
    void navigate("/login")
    handleClose()
  }
  const handleReg = () => {
    void navigate("/reigster")
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

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' color='inherit' onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleHome}>Home</MenuItem>
          <MenuItem onClick={handleAbout}>About</MenuItem>
          <MenuItem onClick={handleFeatures}>Features</MenuItem>
          <MenuItem onClick={handleFAQs}>FAQs</MenuItem>
          <MenuItem onClick={handleToS}>Terms of Service</MenuItem>
          <MenuItem onClick={handlePP}>Privacy Policy</MenuItem>
          <MenuItem onClick={handleLoginfo}>Login</MenuItem>
          <MenuItem onClick={handleReg}>Register</MenuItem>
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
