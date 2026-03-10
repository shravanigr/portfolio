import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories = [
    {
      name: 'Languages',
      skills: ['HTML/CSS', 'TypeScript', 'JavaScript'],
    },
    {
      name: 'Frameworks & Technologies',
      skills: ['Angular 2+', 'Angular Material UI', 'NgRx', 'Tailwind CSS', 'Splunk', 'Agility'],
    },
    {
      name: 'Tools & Methodologies',
      skills: ['Agile (SCRUM)', 'GitHub', 'VSCode', 'Insomnia', 'GitHub Copilot', 'Cursor AI', 'Google Antigravity'],
    },
  ];
}
