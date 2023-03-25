import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Participants } from '../models/participants';
import { map } from 'rxjs';
import { Permissions } from '../models/permissions';
import { Users } from '../models/users';

const baseUrl = `${environment.production}/caneraAndMicrophone`;

@Injectable({
  providedIn: 'root',
})
export class ConferenceVideoService {
  constructor(private http: HttpClient) {}

  public addParticipant(participant: Participants)
  {
    //when a user get in the room, it makes a new HttpPost to put in the details
  }
  public getIfJudgeUser(userId: number) {
    return this.http
      .get<{ value:Permissions }>(`${baseUrl}${userId}`)
      .pipe(map((res) => res.value));
  }

  public getallParticipants(roomId: number) {
    return this.http
      .get<{ value:Participants[] }>(`${baseUrl}${roomId}`)
      .pipe(map((res) => res.value));
  }

  public getUserDetails(userId: number) {
    return this.http
      .get<{ value:Users }>(`${baseUrl}${userId}`)
      .pipe(map((res) => res.value));
  }

  changeCameraMode(userId: number,off:boolean) {
    return this.http.patch (
      `${baseUrl}/changeCameraMode`,
      {userId,off}
    );
  }

  changeMicrophoneMode(userId: number, mute:boolean) {
    return this.http.patch(
      `${baseUrl}/changeMicrophoneMode`,
      {userId ,mute}
    );
  }

  muteAllParticipants(userId:number, conferenceId: number) {
    return this.http.patch(
      `${baseUrl}/muteAllParticipants`,
     {userId, conferenceId}
    );
  }
}
