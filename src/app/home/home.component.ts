import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../API/google-sheets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstSlotData: any;

  constructor(private googleSheetsService: GoogleSheetsService) { }

  ngOnInit(): void {
    this.googleSheetsService.getFirstSlotData().subscribe((data: any) => {
      // Assuming the data structure is an array of values
      // You may need to modify this based on your actual data structure
      this.firstSlotData = data.values[0][0];
    });
  }
}
