import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type classContents = {
  name: string;
  code: string;
  credits: number;
  length: number;
  prereq : string;
  subject : string;
};

export const CLASSES: classContents[] = [
  {name :"Calculus",code :"1",credits: 5,length: 2,prereq: "none",subject: "math"},
  {name :"Calculus1",code :"1",credits: 5,length: 2,prereq: "none",subject: "math"},
  {name :"Calculus2",code :"1",credits: 5,length: 2,prereq: "none",subject: "math"},
];


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})


export class DetailsComponent{
  
  
  classes = CLASSES;

  selectedClass : classContents;
  

  onSelect(currentClass: classContents): void {
    var T = document.getElementById("Reviews");
    T.style.display = "block";  
    this.selectedClass = currentClass;
  }
  
}

