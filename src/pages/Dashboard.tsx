import SignOutButton from "@/components/auth/SignOutButton"
import { useNavigate } from "react-router-dom"
import {Button, Container, Typography } from "@mui/material"

export default function Dashboard() {

  const navigate = useNavigate();

  const handleCreatePoll = () => {
    
    void navigate("/poll/:id/edit");
  }

  return (
    <Container maxWidth="xs">
      <Typography>Dashboard Goes Here</Typography>
      <Typography variant='h4' gutterBottom>
        Different home page for logged in users
      </Typography>
      <Button variant='contained'color='primary' fullWidth onClick={handleCreatePoll}> 
            Create Poll
      </Button>
      <SignOutButton />
    </Container>
  )
}
