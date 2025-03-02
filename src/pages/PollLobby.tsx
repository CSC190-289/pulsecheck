import { db } from "@/core/api/firebase"
import {
  Typography,
  Container,
  CircularProgress,
  Box,
  Grid2,
  Toolbar,
  Button,
} from "@mui/material"
import { doc, DocumentReference } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { useDocumentData } from "react-firebase-hooks/firestore"
import React from "react"
import { Lobby } from "@/core/types"
import LobbiestCard from "@/components/lobby/LobbiestCard"

export default function PollLobby() {
  const params = useParams()
  const lobbyId = params.id ?? "null"
  const ref = doc(db, "lobby", lobbyId) as DocumentReference<Lobby>
  const [lobby, loading, error] = useDocumentData<Lobby>(ref)

  console.debug("PollLobby.lobby", lobby)
  console.debug("PollLobby.loading", loading)
  console.debug("PollLobby.error", error)

  if (error) {
    return (
      <Container>
        <Typography>Error Error Error!</Typography>
      </Container>
    )
  }

  if (loading) {
    return (
      <Grid2
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "90vh" }}>
        <CircularProgress size={40} />
      </Grid2>
    )
  }

  if (!lobby) {
    return (
      <Container>
        <Typography>Failed to find lobby(${lobbyId})</Typography>
      </Container>
    )
  }

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          justifyContent: "center",
          boxShadow: "2px 2px rgba(0,0,0,0.1)",
        }}>
        <Box>
          <Typography variant='h6'>Poll Title Goes Here</Typography>
          <Typography>{plbl(lobby.users.length)}</Typography>
        </Box>
      </Toolbar>
      <Container sx={{ mt: 2 }}>
        <Grid2 container spacing={2}>
          {lobby.users.map((x) => (
            <Grid2 key={x} size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
              <LobbiestCard userId={x} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </React.Fragment>
  )
}

function plbl(size: number) {
  if (size > 1) {
    return `${size} Participants`
  }
  return `${size} Participant`
}
