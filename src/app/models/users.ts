import { Jobs } from './jobs';

export class Users {
  constructor(
    public userId: number,
    public name: string,
    public email: string,
    public job: Jobs
  ) {}
}
