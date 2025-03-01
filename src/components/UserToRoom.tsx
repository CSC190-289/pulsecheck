import { setDoc, doc } from "firebase/firestore"
import { db } from "@/core/api/firebase"

export function AddingUserToRoom(
  displayName: string,
  roomCode: string,
  callback: () => void
) {
  const Rooms = doc(db, "poll/P7m8QPNrZzi5v29BpjJm")

  async function writeUserToRoom() {
    const docData = {
      DisplayName: displayName,
      RoomCode: roomCode,
      points: 15,
      Email: null,
      ID: 1101,
    }
    try {
      await setDoc(Rooms, docData)
      callback()
    } catch (error) {
      console.debug(error)
    }
  }
  void writeUserToRoom()
}

/*
what a user needs 
            DisplayName: "John",
            RoomCode: '123456'
            points:
            Email:
            ID:
                try{
        const RoomDoc = await addDoc(collection(db, "rooms"), {
            DisplayName: "John",
            RoomCode: '123456',
            points: 15
        });
        console.log("Document written with ID: ", RoomDoc.id);
    } catch (e){
        console.log("Error adding document", e);
    }

*/
