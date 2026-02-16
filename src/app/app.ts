import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Shravani } from './components/shravani/shravani';
import { WorkExperience } from './components/work-experience/work-experience';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { BackToTop } from './components/back-to-top/back-to-top';

@Component({
  selector: 'app-root',
  imports: [Navbar, Shravani, WorkExperience, Projects, Footer, Education, Skills, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
