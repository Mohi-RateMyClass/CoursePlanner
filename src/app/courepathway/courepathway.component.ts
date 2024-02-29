import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectorRef } from '@angular/core';

type subjectThing = {
  name : string,
  pathway: string[][]
};

export const SUBJECTS: subjectThing[] = [
  {name: "Coding",pathway: [["Freshman","AP Computer Science Principles"],["Sophmore","AP Computer Science A"],["Junior","Coding Captsone"],["Senior","Slack Off"]]}
]

@Component({
  selector: 'app-courepathway',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courepathway.component.html',
  styleUrl: './courepathway.component.css'
})
export class CourepathwayComponent {
  
  table: HTMLTableElement;
  private thead;
  private tbody;

  subject = SUBJECTS;
  filteredSubject: subjectThing[] = this.subject;
  selectedSubject: subjectThing = {name: " ",pathway: [[],[]]};

  onSelect(currentSubject: subjectThing): void {
    var T = document.getElementById("selClass");
    T.style.display = "block";  
    var V = document.getElementById("list");
    V.style.display = "none";  
    
    this.selectedSubject = currentSubject;

    this.table = document.getElementById('table') as HTMLTableElement;
    this.tbody = this.table.createTBody();

    for(let i = 0; i < this.selectedSubject.pathway.length;i++){
      var row = this.tbody.insertRow();

      for(let j = 0; j < this.selectedSubject.pathway[0].length;j++){
        var cell = row.insertCell();
        cell.innerHTML = this.selectedSubject.pathway[i][j];  
      }
    }
    
  }
  
  resetPage() : void{
    window.location.reload();
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredSubject = this.subject;
      return;
    }
  
    this.filteredSubject = this.subject.filter(
      subjectThing => subjectThing?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}