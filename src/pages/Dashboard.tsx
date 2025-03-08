import SignOutButton from "@/components/auth/SignOutButton"
import { useNavigate } from "react-router-dom"
import { Button, Container, Typography, Stack, Box } from "@mui/material"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/core/api/firebase"
import RecentPollCard from "../components/dashboard/RecentPollCard"
//import { useAuthState } from 'react-firebase-hooks/auth';

export default function Dashboard() {
  const navigate = useNavigate()

  const handleCreatePoll = () => {
    console.debug("Adding doc...")

    const addPollToDB = async () => {
      // Nested async function to await addDoc
      const host = "J5aYAqwWUghq56Zf7GAfI8TEaMk1"
      const pollsCollection = collection(db, "poll")
      const pollDocRef = await addDoc(pollsCollection, {
        owner: host,
        questions: "",
      })
      void navigate(`/poll/${pollDocRef.id}/edit`)
      return pollDocRef
    }
    void addPollToDB()
  }

  const handleUserJoin = () => {
    void navigate("/poll/join")
  }

  return (
    <Container maxWidth='xs'>
      <Box mb={16}>
        <Typography>Dashboard Goes Here</Typography>
        <Typography variant='h4' gutterBottom>
          Different home page for logged in users
        </Typography>
        <Stack
          sx={{ m: 1 }} // margin for everything in the box
          spacing={3}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleUserJoin}
            fullWidth>
            Join Poll
          </Button>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleCreatePoll}>
            Create Poll
          </Button>
          <SignOutButton />
        </Stack>
        <Stack sx={{ m: 1 }} spacing={3}>
          <Typography variant='h6' align='left'>
            Recent Polls
          </Typography>
          <RecentPollCard pollTitle='Getting Stated' result='0/100' />
          <RecentPollCard pollTitle='Poll 2' result='90/100' />
          <RecentPollCard pollTitle="Baby's First Poll" result='100/100' />
        </Stack>
      </Box>
    </Container>
  )
}
