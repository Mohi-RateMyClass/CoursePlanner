import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpClientModule} from '@angular/common/http';

type classContents = {
  name: string;
  code: string;
  credits: number;
  length: number;
  prereq : string;
  subject : string;
};



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit{
    response;
    constructor(private http: HttpClient){}

    ngOnInit(){
    

    this.http.get<any>("https://sheets.googleapis.com/v4/spreadsheets/1uP9MF0Jf2FhqxcEToxJ014O2GpBNNhk04paK_6n4n7k/values/A1:F186").subscribe(data => {
      this.response = data.total;
    })
    console.log(this.response)
    }
}

