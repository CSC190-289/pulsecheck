import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container } from "@mui/material"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function SigninWGoogle() {
  const navigate = useNavigate()
  const auth = getAuth()
  const [authings, setAuthing] = useState(false)

  const signUpWithGoogle = async () => {
    setAuthing(true)

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid)
        navigate("/loggedin-user-home")
      })
      .catch((error) => {
        console.log(error)
        setAuthing(false)
      })
  }

  return (
    <Container>
      <Button
        variant='contained'
        color='primary'
        sx={{ mb: 1 }}
        onClick={signUpWithGoogle}>
        SIGN UP WITH GOOGLE
      </Button>
    </Container>
  )
}
