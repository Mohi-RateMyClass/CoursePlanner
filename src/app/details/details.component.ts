import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectorRef } from '@angular/core';
import data from "./sheets_values.json"

type classContents = {
  Classname: string;
  Code: string;
  Credits: string;
  Length: string;
  Prereq : string;
  Subject : string;
};

export const CLASSES: classContents[] = [
  {Classname :"Calculus",Code :"1",Credits: "5",Length: "2",Prereq: "none",Subject: "math"},
  {Classname :"Calculus1",Code :"1",Credits: "5",Length: "2",Prereq: "none",Subject: "math"},
  {Classname :"Calculus2",Code :"1",Credits: "5",Length: "2",Prereq: "none",Subject: "math"},
];

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})


export class DetailsComponent{
 
  
  obj : classContents[] = data;

  classes = this.obj;

  filteredClass:classContents[] = this.classes;

  selectedClass : classContents  = {Classname: "No class selected",Code: 
"0",Credits: "0",Length: "0", Prereq: "none", Subject: "math"};
  

  onSelect(currentClass: classContents): void {
    var T = document.getElementById("Reviews");
    T.style.display = "block";  
    var V = document.getElementById("ClassList");
    V.style.display = "none";
    this.selectedClass = currentClass;
  }
  
  resetPage() : void{
    window.location.reload();
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredClass = this.classes;
      return;
    }
  
    this.filteredClass = this.classes.filter(
      classContents => classContents?.Classname.toLowerCase().includes(text.toLowerCase())
    );
  }
}

