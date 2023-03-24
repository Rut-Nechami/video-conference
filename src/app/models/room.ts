import { Participant } from "./participant";

export class Room {
    constructor(
      public user: Participant,
      public participants: Participant[],
      public camera: boolean,
      public microphone: boolean
    ) {}
  }
  