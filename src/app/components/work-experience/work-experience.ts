import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience {
  experiences = [
    {
      role: 'Custom Software Engineering Analyst',
      company: 'Accenture Solutions Pvt. Ltd.',
      duration: 'Nov 2024 – Present',
      location: 'Bengaluru, India',
      description: [
        'Currently working on a logistics project - a comprehensive return management solution that improves the customer experience for e-commerce sellers.',
        'Developed and enhanced multiple UI features in alignment with evolving business requirements.',
        'Integrated RESTful APIs with front-end components to ensure seamless interaction with backend services.',
        'Delivered clean, maintainable, and testable code with 90% unit test coverage using Jasmine and Karma.',
        'Mentored and supported newly onboarded team members by guiding them through the application and assisting with development tasks.',
      ],
    },
    {
      role: 'Associate Software Engineer',
      company: 'Prodapt Solutions Pvt. Ltd.',
      duration: 'Aug 2022 – Oct 2024',
      location: 'Bengaluru, India',
      description: [
        'Collaborated with cross-functional teams to develop and improve Mosaic One Application.',
        'Engaged in full SDLC, from Requirement Analysis to Integration Testing, adhering to client specifications.',
        'Specialized in micro front-end development with Angular.',
        'Implemented custom and reusable angular components to enhance modularity and facilitate consistent UI design.',
        'Written karma unit testing for angular components with mock data for better code coverage.',
        'Written E2E testing using Protractor and Cypress.',
        'Conducted acceptance testing with Py-Test on Virtual Box (Ubuntu).',
      ],
    },
    {
      role: 'Intern',
      company: 'Prodapt Solutions Pvt. Ltd.',
      duration: 'Apr 2022 – Jul 2022',
      location: 'Bengaluru, India',
      description: [
        'Training was given for Java, MySQL and Angular. Later worked in a team of 4 for creating a web application that simulated telecommunications.',
        'Contributed to the development of the login and user registration pages, integrating them with the back-end using Spring framework and MySQL.',
        'Assisted team members with various front-end components related to the services offered on the telecommunications website.',
      ],
    },
  ];
}
