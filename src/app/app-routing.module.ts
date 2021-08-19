import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryReadComponent } from './components/view/category/category-read/category-read.component';
import { HomeComponent } from './components/view/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
