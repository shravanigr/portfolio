import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education = [
    {
      university: 'Dayananda Sagar University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      year: '2018 - 2022',
      grade: 'CGPA: 8.20/10 - First Class with Distinction',
    },
  ];
}
