import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [RouterOutlet,RouterModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  firstSlotData: any;

  
}
