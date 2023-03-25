import { Participants } from './participants';

export class Conferences {
  constructor(
    public conferenceId: number,
    public participants: Participants[],
    public conferenceDate: Date,
    public ConferenceDuration: number
  ) {}
}
