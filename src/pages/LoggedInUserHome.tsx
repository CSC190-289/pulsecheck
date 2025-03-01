import React from "react"
import { Container, Typography } from "@mui/material"
import SignOutButton from "@/components/auth/SignOutButton"

export default function LoggedInUserHome() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant='h4' gutterBottom>
          Different home page for logged in users
        </Typography>
        <SignOutButton />
      </Container>
    </React.Fragment>
  )
}
