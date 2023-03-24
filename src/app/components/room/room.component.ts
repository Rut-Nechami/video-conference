import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Jobs } from 'src/app/models/jobs';
import { Participant } from 'src/app/models/participant';
import { Room } from 'src/app/models/room';
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
  public isJudge: Observable<boolean>;
  public participant: Observable<Participant>;
  public userId: BehaviorSubject<number>;
  public room: Room;
  constructor(
    private router: Router,
    private conferenceVideoService: ConferenceVideoService
  ) {}

  ngOnInit() {
    this.participant = this.conferenceVideoService
      .getIfJudgeUser(this.router.params['userId'])
      .pipe(
        map((participant: Participant) => {
          return participant;
        })
      );

    this.isJudge = this.participant.pipe(
      map((p) => (p.job === Jobs.Judge ? true : false))
    );
    //var participants= bring from DB all the participant in this room
    this.room = new Room(this.participant, participants, true, true);
    //create a new room details for a specific participant.

    this.userId.next(this.participant.pipe(map((p) => p.userId)));
  }
  public CameraClicked() {
    this.conferenceVideoService.changeCameraMode(
      this.userId.value,
      !this.room.camera
    );
  }

  public MicrophoneClicked() {
    this.conferenceVideoService.changeMicrophoneMode(
      this.userId.value,
      !this.room.microphone
    );
  }

  public MuteAllParticipants() {
    this.conferenceVideoService.muteAllParticipants([1, 2, 3]);
    //run on all the participants and send their ids
  }
}
