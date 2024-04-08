import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectorRef } from '@angular/core';
import data from "./sheets_values.json"
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

type classContents = {
  Name: string;
  Code: string;
  Weighted: string;
  Credits: string;
  Semesters : string;
  Prerequisites : string;
  Summary : string;
  Enjoyment : string;
  Difficulty : string;
  Workload : string;
};


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterOutlet,RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})


export class DetailsComponent{
  classes : classContents[] = data;

  filteredClass:classContents[] = this.classes;

  selectedClass : classContents  = {Name: "No class selected",Code: 
"0",Weighted: "No", Credits: "0",Semesters: "0", Prerequisites: "none", Summary: "no",Enjoyment : " ", Difficulty : " ", Workload : " "};
  

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
      classContents => classContents?.Name.toLowerCase().includes(text.toLowerCase())
    );
  }
}

