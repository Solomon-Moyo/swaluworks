import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'SwaluWorks';
}
