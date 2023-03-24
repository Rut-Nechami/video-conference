import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Participant } from '../models/participant';
import { map } from 'rxjs';

const baseUrl = `${environment.production}/conference-video`;

@Injectable({
  providedIn: 'root',
})
export class ConferenceVideoService {
  constructor(private http: HttpClient) {}

  public addParticipant()
  {
    //when a user get in the room, it makes a new HttpPost to put in the details
  }
  public getIfJudgeUser(userId: number) {
    return this.http
      .get<{ value: Participant }>(`${baseUrl}${userId}`)
      .pipe(map((res) => res.value));
  }
  changeCameraMode(userId: number,off:boolean) {
    return this.http.patch (
      `${baseUrl}/changeCameraMode`,
      {userId,off}
    );
  }

  changeMicrophoneMode(userId: number, clickerId:number, mute:boolean) {
    return this.http.patch(
      `${baseUrl}/changeMicrophoneMode`,
      {userId,clickerId,mute}
    );
  }

  muteAllParticipants(userIds: number[],clickerId:number ) {
    return this.http.patch(
      `${baseUrl}/muteAllParticipants`,
     {clickerId, userIds}
    );
  }
}
