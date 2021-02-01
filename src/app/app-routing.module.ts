import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path:'', redirectTo:'search-input', pathMatch: 'full'

  },
  {
    path:'users-list', component:UsersListComponent
  },
  {
    path:'search-input' , component:SearchInputComponent
  },
  {
    path:'**',redirectTo:'search-input', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
