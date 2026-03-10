import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export const PROJECTS = [
  {
    title: 'Paper & Tea App',
    description: 'One place to find your favourite books',
    link: 'https://github.com/shravanigr/paper-and-tea',
    live: 'https://paper-and-tea.vercel.app',
    tech: ['Angular', 'NgRx', 'TypeScript', 'Tailwind CSS'],
  },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;
}
