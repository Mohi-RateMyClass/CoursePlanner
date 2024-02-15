import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectorRef } from '@angular/core';

type subjectThing = {
  name : string,
  pathway: string[]
};

export const SUBJECTS: subjectThing[] = [
  {name: "Coding",pathway: ["AP Computer Science Principles","AP Computer Science A","Coding Capstone"]}
]

@Component({
  selector: 'app-courepathway',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courepathway.component.html',
  styleUrl: './courepathway.component.css'
})
export class CourepathwayComponent {

  subject = SUBJECTS;

  selectedSubject: subjectThing = {name: " ",pathway: ["."]};

  onSelect(currentSubject: subjectThing): void {
    var T = document.getElementById("selClass");
    T.style.display = "block";  
    var V = document.getElementById("list");
    V.style.display = "none";  
    
    this.selectedSubject = currentSubject;
  }
  resetPage() : void{
    window.location.reload();
  }
  
}
