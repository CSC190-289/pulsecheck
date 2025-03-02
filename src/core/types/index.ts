export interface User {
  displayName: string
  createdAt: Date
}

export interface Poll {
  questions: [Question]
}

export interface Question {
  choices: [string]
}

export interface Lobby {
  id: string
  host: string
  users: string[]
}
