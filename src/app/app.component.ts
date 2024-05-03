import { Component ,OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'CoursePlanner';
  l1 : string = "1"
  l2 : string = "2"
  
  timer: any;
  currentDay : string;
  days : string[];
  timeCurrent : string;
  timeRemaining : any;
  currentClass : string;
  Lunch1 : boolean;
  ngOnInit() {
    // Call updateTime initially to display the time immediately
    this.updateTime();

    // Set up a recursive setTimeout to call updateTime every second
    this.timer = setTimeout(() => {
      this.updateTime();
      this.timer = setTimeout(() => this.updateTime(), 1000);
    }, 1000);
  }
  ngOnDestroy() {
    // Clear the timer when the component is destroyed
    clearTimeout(this.timer);
  }
  changeLunch(Lunch:string){
    if(Lunch = "1"){
      this.Lunch1 = true;
    }else{
      this.Lunch1 = false;
    }
  }
  updateTime() {
    const now: Date = new Date();
    const day: number = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hour: number = now.getHours();
    const minute: number = now.getMinutes();
    const seconds: number = now.getSeconds();
    const currentTime: number = hour * 60 + minute; // Convert time to minutes

    let currentClass: string = "No class currently";
    
    // Class schedule for each day
    const classSchedule: { [key: number]: { name: string, start: number, end: number }[] } = {
        1: [ // Monday
            { name: "1st Period", start: 515, end: 567 },
            { name: "2nd Period", start: 572, end: 624 },
            { name: "3rd Period", start: 629, end: 687 },
            { name: "4th Period/Lunch", start: 692, end: 784 }, // add 20 from here on out???
            { name: "5th Period", start: 789, end: 841 },
            { name: "6th Period", start: 846, end: 898 },
            { name: "7th Period", start: 903, end: 955 }
        ],
        2: [ // Tuesday
        { name: "1st Period", start: 515, end: 567 },
        { name: "2nd Period", start: 572, end: 624 },
        { name: "3rd Period", start: 629, end: 687 },
        { name: "4th Period/Lunch", start: 692, end: 784 }, // add 20 from here on out???
        { name: "5th Period", start: 789, end: 841 },
        { name: "6th Period", start: 846, end: 898 },
        { name: "7th Period", start: 903, end: 955 }
        ],
        3: [ // Wednesday
            { name: "2nd Period", start: 635, end: 725 },
            { name: "4th Period/Lunch", start: 730, end: 860 },
            { name: "6th Period", start: 865, end: 955 }
        ],
        4: [ // Thursday
            { name: "1st Period", start: 515, end: 605 },
            { name: "Access", start: 610, end: 630 },
            { name: "3rd Period", start: 635, end: 725 },
            { name: "5th Period/Lunch", start: 730, end: 860 },
            { name: "7th Period", start: 865, end: 955 }
        ],
        5: [ // Friday
        { name: "1st Period", start: 515, end: 567 },
        { name: "2nd Period", start: 572, end: 624 },
        { name: "3rd Period", start: 629, end: 687 },
        { name: "4th Period/Lunch", start: 692, end: 784 }, // add 20 from here on out???
        { name: "5th Period", start: 789, end: 841 },
        { name: "6th Period", start: 846, end: 898 },
        { name: "7th Period", start: 903, end: 955 }
        ],
        6: [], // Saturday - No classes
        0: []  // Sunday - No classes
    };

    // Check if today is a school day (Monday to Friday)
    if (day >= 1 && day <= 5 && classSchedule[day]) {
        const classes = classSchedule[day];
        for (let i = 0; i < classes.length; i++) {
            const classTime = classes[i];
            if (currentTime >= classTime.start && currentTime <= classTime.end) {
                this.currentClass = classTime.name;
                const timeRemainingMinutes = classTime.end - currentTime;
                const timeRemainingSeconds = (classTime.end - currentTime) % 60;
                this.timeRemaining = `${timeRemainingMinutes} minutes and ${59 -seconds } seconds`;

                break;
            }
        }
    }
    const noww: Date = new Date();

    // Update current time
    this.timeCurrent = noww.toLocaleTimeString();

    // Update current day
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.currentDay = days[now.getDay()];

    // Set up the next timeout to call updateTime after 1 second
    this.timer = setTimeout(() => {
      this.updateTime();
    }, 1000);
  }
  

}
