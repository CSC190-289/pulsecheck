import React from "react"
import { Container, Typography } from "@mui/material"
import SignOut from "@/components/Authentication/SignOut"

export default function LoggedInUserHome() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant='h4' gutterBottom>
          Different home page for logged in users
        </Typography>
        <SignOut />
      </Container>
    </React.Fragment>
  )
}
