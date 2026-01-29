import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // Se estiveres a usar Angular 17/18+
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // Verifica se o nome é home.css ou home.component.css
})
export class HomeComponent { // Confirma se o nome da classe é HomeComponent

  saudar() {
    alert('Olá! O botão já funciona! 🎉');
  }
  
}