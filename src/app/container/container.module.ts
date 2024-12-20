import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationModule } from '../notification/notification.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { OnlyTextDirective } from './directives/only-text.directive';



@NgModule({
  declarations: [
    ContainerComponent,
    MenuComponent,
    NavbarComponent,
    CategoryComponent,
  ],
  imports:[NotificationModule, FormsModule, CommonModule, OnlyTextDirective],
  exports:[
    ContainerComponent, NavbarComponent
  ]
})
export class ContainerModule { }
