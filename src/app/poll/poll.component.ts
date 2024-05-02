import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import data from "./poll.json"

import { CommonModule } from '@angular/common';
type pollcontainer = {
Question : string;
Option1 : string;
Option2 : string;
ResponseAmt : string;
Response1Amt : string;
Response2Amt : string;
}

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent {

data1 :pollcontainer[] = data;

// Inside your component class
calculateProgressWidth(responseAmt: string, response1Amt: string): string {
  return ((+response1Amt / +responseAmt) * 100) + '%';
}

}
