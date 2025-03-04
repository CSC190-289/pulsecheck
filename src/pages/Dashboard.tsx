import SignOutButton from "@/components/auth/SignOutButton"
import { useNavigate } from "react-router-dom"
import {Button, Container, Typography, Stack } from "@mui/material"

export default function Dashboard() {

  const navigate = useNavigate();

  const handleCreatePoll = () => {
    
    void navigate("/poll/:id/edit");
  }
  const handleUserJoin = () => {
    void navigate("/poll/join")
  }

  return (
    <Container maxWidth="xs">
      <Typography>Dashboard Goes Here</Typography>
      <Typography variant='h4' gutterBottom>
        Different home page for logged in users
      </Typography>
      <Stack
              component='form'
              sx={{ m: 1 }} // margin for everything in the box
              spacing={3}
              noValidate
              autoComplete='off'>
      <Button
          variant='contained'
          color='primary'
          onClick={handleUserJoin}
          fullWidth
          >
          Join Poll
        </Button>
      <Button variant='contained'
      color='primary' 
      fullWidth 
      onClick={handleCreatePoll}
      > 
            Create Poll
      </Button>
      <SignOutButton />
      </Stack>
    </Container>
  )
}