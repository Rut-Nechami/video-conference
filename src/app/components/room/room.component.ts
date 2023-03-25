import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Jobs, Sides } from 'src/app/models/jobs';
import { Participants } from 'src/app/models/participants';
import { ConferenceVideoService } from 'src/app/services/conferenceVideo.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
//the idea of this component is that in the same room there few participants,
// so for each user the route is different : room/../user/...
//this is a room screen of one participant
export class RoomComponent implements OnInit {
  public participant: Participants;
  public isJudge: boolean = false;

  constructor(
    private router: Router,
    private conferenceVideoService: ConferenceVideoService
  ) {
    this.participant = new Participants(
      this.router.queryParams['userId'],
      true,
      true,
      Sides.Claimant
    );
    //when a user enters the conference he can define which side he is on.
  }

  ngOnInit() {
    this.conferenceVideoService.addParticipant(this.participant);
    var participant = this.conferenceVideoService.getIfJudgeUser(this.participant.userId);
    participant? this.isJudge = true: false;
  }

  public CameraClicked() {
    this.conferenceVideoService.changeCameraMode(
      this.participant.userId,
      !this.participant.isCameraOn
    );
  }

  public MicrophoneClicked() {
    this.conferenceVideoService.changeMicrophoneMode(
      this.participant.userId,
      !this.participant.isCameraOn
    );
  }

  public MuteAllParticipants() {
    this.conferenceVideoService.muteAllParticipants(this.participant.userId, this.router.queryParams['roomId']);
  }
}
