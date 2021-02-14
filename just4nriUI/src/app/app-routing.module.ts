import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmodelComponent } from './adminmodel/adminmodel.component';
import { UsermodelComponent } from './usermodel/usermodel.component';

const routes: Routes = [
  {path: 'usermodel', component: UsermodelComponent},
  {path: 'admin', component: AdminmodelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
