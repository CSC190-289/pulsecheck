import SignOutButton from "@/components/auth/SignOutButton"
import { useNavigate } from "react-router-dom"
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
      <SignOutButton />
    </Container>
  )
}
