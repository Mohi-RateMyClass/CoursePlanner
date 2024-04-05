import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectorRef } from '@angular/core';
import data from "./coursepathways.json"
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

type subjectThing = {
  Name : string;
  Freshman: string[];
  Sophomore : string[];
  Junior : string[];
  Senior : string[];
};

@Component({
  selector: 'app-courepathway',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './courepathway.component.html',
  styleUrl: './courepathway.component.css'
})
export class CourepathwayComponent {
  

  table: HTMLTableElement;
  private thead;
  private tbody;

  classes = data.map(item => ({
    Name: item.Name,
    Freshman: item.Freshman.split(',').map(course => course.trim()),
    Sophomore: item.Sophomore.split(',').map(course => course.trim()),
    Junior: item.Junior.split(',').map(course => course.trim()),
    Senior: item.Senior.split(',').map(course => course.trim())
  }));

  subject :subjectThing[] = this.classes;

  
  

  
  filteredSubject: subjectThing[] = this.subject;
  selectedSubject: subjectThing = {Name: " ",Freshman : [""],Sophomore: [""], Junior: [" "], Senior: [" "]};

  onSelect(currentSubject: subjectThing): void {
    var T = document.getElementById("selClass");
    T.style.display = "block";  
    var V = document.getElementById("list");
    V.style.display = "none";  
    
    this.selectedSubject = currentSubject;

    this.table = document.getElementById('table') as HTMLTableElement;
    this.tbody = this.table.createTBody();

      var row = this.tbody.insertRow();
      var cell1 = row.insertCell();
      cell1.innerHTML = "Freshman";
      cell1 = row.insertCell();
      cell1.innerHTML = "Sophomore";
      cell1 = row.insertCell();
      cell1.innerHTML = "Junior";
      cell1 = row.insertCell();
      cell1.innerHTML = "Senior";
      for(let i = 0; i < 7; i ++){
        var row = this.tbody.insertRow();
          var cell = row.insertCell();
          cell.innerHTML = this.selectedSubject.Freshman[i];
          cell = row.insertCell();
          cell.innerHTML = this.selectedSubject.Sophomore[i];
          cell = row.insertCell();
          cell.innerHTML = this.selectedSubject.Junior[i];
          cell = row.insertCell();
          cell.innerHTML = this.selectedSubject.Senior[i];
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
      subjectThing => subjectThing?.Name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
