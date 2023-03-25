import { Jobs, Sides } from './jobs';

export class Participants {
  constructor(
    public userId: number,
    public isCameraOn: boolean,
    public isMute:boolean,
    public side :Sides
  ) {}
}
