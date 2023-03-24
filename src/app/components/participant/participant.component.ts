import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/models/jobs';
import { Participant } from 'src/app/models/participant';
import { Room } from 'src/app/models/room';
import { ConferenceVideoService } from 'src/app/services/conferenceVideo.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
})
export class ParticipantComponent implements OnInit {
  public user: Participant;
  public disableMicrophoneButton: boolean = true;
public participantRoom:Room[]; 
  constructor(
    private router: Router,
    private conferenceVideoService: ConferenceVideoService
  ) {}
  @Input() public set participant(participant: Participant) {
    this.user = participant;
  }

  ngOnInit() {
    this.disableMicrophoneButton =
      this.router.params['userId'] === this.participant.userId ? false : true;
    //check if the user who tries to mute is this user itself
    this.participantRoom = 
    //bring from DB all the rooms in this roomId-
  //means all the details of each participant about this conference.
  //the microphone, video... 
//from it take the specific room of the userId from the route 
  }
  public changeMicrophoneMode() {
    this.conferenceVideoService.changeMicrophoneMode(this.router.params['userId'],this.participantRoom.microphone);
  }
}
