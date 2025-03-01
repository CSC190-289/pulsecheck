import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"

export default function SignOut() {
  const navigate = useNavigate()
  const auth = getAuth()

  const handleSignOut = () => {
    auth.signOut()
    navigate("/")
  }
  return (
    <Button
      variant='outlined'
      color='primary'
      sx={{ mb: 1 }}
      onClick={handleSignOut}>
      log out
    </Button>
  )
}
