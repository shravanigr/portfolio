import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export const PROJECTS = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Angular and Material Design.',
    link: 'https://github.com/shravani/portfolio',
    live: 'https://shravani-portfolio.vercel.app/',
    tech: ['Angular', 'Material', 'TypeScript', 'SCSS'],
  },
  {
    title: 'Task Manager App',
    description: 'A productivity app for managing tasks and deadlines, featuring drag-and-drop UI.',
    link: 'https://github.com/shravani/task-manager',
    live: 'https://shravani-task-manager.vercel.app/',
    tech: ['React', 'Redux', 'JavaScript', 'CSS'],
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
