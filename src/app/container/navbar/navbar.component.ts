import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  client: { nombre: string } = { nombre:'' };

  clientName: string = '';

  addClient(): void {
    if (this.clientName.trim()) {
      this.client.nombre = this.clientName;
    }

    this.clientName = ''
  }
}
