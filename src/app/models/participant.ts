import { Jobs, Sides } from './jobs';

export class Participant {
  constructor(
    public userId: number,
    public name: string,
    public email: string,
    public job: Jobs,
    public side: Sides
  ) {}
}
