import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Jobs, Sides } from 'src/app/models/jobs';
import { Participant } from 'src/app/models/participant';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  public participants: Participant[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.participants = [
      {
        name: 'Yulya',
        email: 'Yulya@gmail.com',
        job: Jobs.Judge,
        side: Sides.Speaker,
        userId: 12,
      },
      {
        name: 'Chaim',
        email: 'ch@gmail.com',
        job: Jobs.Lawyer,
        side: Sides.Claimant,
        userId: 1234,
      },
      {
        name: 'Avi',
        email: 'abcc@gmail.com',
        job: Jobs.Lawyer,
        side: Sides.Respond,
        userId: 12345,
      },
    ];
  }
}
