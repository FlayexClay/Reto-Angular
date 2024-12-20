import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  
  productos = [
    {
      nombre: 'Perfume Rico',
      precio: 200.50
    },
    {
      nombre: 'Colonia',
      precio: 150.49
    },
    {
      nombre: 'Esmalte',
      precio: 60.35
    },
    {
      nombre: 'Shampoo',
      precio: 45.35
    }
  ]
}
