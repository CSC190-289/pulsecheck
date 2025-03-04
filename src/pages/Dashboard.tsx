import SignOutButton from "@/components/auth/SignOutButton"
import { useNavigate } from "react-router-dom"
<<<<<<< HEAD
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
=======
import { Button, Container, Stack, TextField, Typography } from "@mui/material"



export default function Dashboard() {
  const navigate = useNavigate() 
  const handleUserJoin = () => {
    void navigate("/poll/join")
  }
  return (
    <Container
      maxWidth= 'xs'// need data for box
    >
        <Button
          variant='contained'
          color='primary'
          onClick={handleUserJoin}
          fullWidth>
          Join Poll
        </Button>
>>>>>>> 3346708da2d1f3f0052df13c72180ce749ce85c4
      <SignOutButton />
    </Container>
  )
}
