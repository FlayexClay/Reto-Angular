import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categorys = [
    {
      name: "Esmaltes"
    },
    {
      name: "Perfumes"
    },
    {
      name:"Maquillaje"
    }
  ]
}
