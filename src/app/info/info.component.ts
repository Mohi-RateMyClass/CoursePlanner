import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  email = "mohiclasses@gmail.com"
}
