import { Component, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Jobs, Sides } from 'src/app/models/jobs';
import { Participants } from 'src/app/models/participants';
import { ConferenceVideoService } from 'src/app/services/conferenceVideo.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  public participants: Participants[] = [];
public roomId: number;
  constructor(private router: Router, private conferenceVideoService: ConferenceVideoService) {}

  ngOnInit(): void {
    this.roomId = this.router.queryParams['roomId']
    this.participants = this.conferenceVideoService.getallParticipants(this.roomId)
    // this.participants = [
    //   {
    //     name: 'Yulya',
    //     email: 'Yulya@gmail.com',
    //     job: Jobs.Judge,
    //     side: Sides.Speaker,
    //     userId: 12,
    //   },
    //   {
    //     name: 'Chaim',
    //     email: 'ch@gmail.com',
    //     job: Jobs.Lawyer,
    //     side: Sides.Claimant,
    //     userId: 1234,
    //   },
    //   {
    //     name: 'Avi',
    //     email: 'abcc@gmail.com',
    //     job: Jobs.Lawyer,
    //     side: Sides.Respond,
    //     userId: 12345,
    //   },
    // ];
  }
}
