import SignOutButton from "@/components/auth/SignOutButton"
import { Container, Typography } from "@mui/material"

export default function Dashboard() {
  return (
    <Container>
      <Typography>Dashboard Goes Here</Typography>
      <Typography variant='h4' gutterBottom>
        Different home page for logged in users
      </Typography>
      <SignOutButton />
    </Container>
  )
}
