import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { DepartmentComponent } from './pages/department/department.component';
import { CardsComponent } from './units/cards/cards.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"department",component:CardsComponent},
    {path:"contact",component:ContactComponent}
];

