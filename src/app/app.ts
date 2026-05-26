import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './layout/app-header/app-header';
import { AppSidebar } from './layout/app-sidebar/app-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, AppSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
