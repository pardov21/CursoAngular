import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { MainDbzComponent } from './dbz/pages/main-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, HeroComponent, ListComponent, MainDbzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cursoAngular';
 
}
