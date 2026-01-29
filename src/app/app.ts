import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home'; // 1. Importa a classe aqui

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent], // 2. Adiciona o HomeComponent aqui!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'cuttoyou';
}