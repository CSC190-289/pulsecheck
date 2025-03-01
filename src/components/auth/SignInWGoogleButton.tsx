import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function SignInWGoogleButton() {
  const navigate = useNavigate()
  const auth = getAuth()

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.debug("res.user.uid", res.user.uid)
        void navigate("/loggedin-user-home")
      })
      .catch((error) => {
        console.debug(error)
      })
  }

  return (
    <Button
      variant='contained'
      color='primary'
      sx={{ mb: 1 }}
      onClick={signInWithGoogle}>
      SIGN UP WITH GOOGLE
    </Button>
  )
}
