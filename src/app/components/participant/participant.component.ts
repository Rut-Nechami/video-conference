import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/models/jobs';
import { Participants } from 'src/app/models/participants';
import { Users } from 'src/app/models/users';
import { ConferenceVideoService } from 'src/app/services/conferenceVideo.service';

//This component represents one square of a participant within the screen
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
})
export class ParticipantComponent implements OnInit {
 public currentParticipant: Participants;
  public disableMicrophoneButton: boolean = true;
  public user : Observable<Users>;
  //then put user into a variable of behaviourSubject to take the value
  constructor(
    private router: Router,
    private conferenceVideoService: ConferenceVideoService
  ) {}
  @Input() public set participant(participant: Participants)
  {
    this.currentParticipant = participant;
  }

  ngOnInit() {
    this.disableMicrophoneButton =
      this.router.params['userId'] === this.participant.userId ? false : true;

      this.user = this.conferenceVideoService.getUserDetails(this.participant.userId);
    //check if the user who tries to mute is this user itself

  }

  public changeMicrophoneMode() {
    this.conferenceVideoService.changeMicrophoneMode(this.router.queryParams['userId'],this.participant.isMute);
  }
}
