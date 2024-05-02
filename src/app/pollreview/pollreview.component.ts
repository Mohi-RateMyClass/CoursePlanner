import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-pollreview',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './pollreview.component.html',
  styleUrl: './pollreview.component.css'
})
export class PollreviewComponent {

}
