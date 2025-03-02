import { Lobby } from "../types"
import { db } from "./firebase"
import {
  collection,
  query,
  getDocs,
  where,
  updateDoc,
  arrayUnion,
  doc,
  setDoc,
} from "firebase/firestore"

export function createLobby() {
  /* TODO - create lobby */
}

export async function findLobbyWithCode(code: string): Promise<Lobby> {
  const ref = collection(db, "lobby")
  const q = query(ref, where("room_code", "==", code))
  const ss = await getDocs(q)
  if (!ss.empty) {
    /* we found one */
    const fdoc = ss.docs[0]
    const obj = fdoc.data() as Lobby
    return {
      id: fdoc.id,
      host: obj.host,
      users: obj.users,
    }
  }
  throw new Error(`Invalid room code '${code}'`)
}

export async function createUser(uid: string, displayName: string) {
  const ref = doc(db, "users", uid)
  await setDoc(
    ref,
    {
      displayName: displayName,
      createdAt: new Date(),
    },
    { merge: true }
  )
}

export async function joinLobby(lobbyId: string, userId: string) {
  const ref = doc(db, "lobby", lobbyId)

  await updateDoc(ref, {
    users: arrayUnion(userId),
  })
}
