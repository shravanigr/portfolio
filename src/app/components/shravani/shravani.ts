import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shravani',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './shravani.html',
  styleUrl: './shravani.css',
})
export class Shravani {}
