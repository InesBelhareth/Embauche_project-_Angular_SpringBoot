import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvMaster/cv/cv.component';
import { LoginComponent } from './login/login.component';
import { ErrorsComponent } from './errors/errors.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ConsulterComponent } from './consulter/consulter.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:CvComponent},
  {path:"login",component:LoginComponent},
  {path:"personnel",component:PersonnelComponent,children:
[
  {path:"ajouter",component:AjouterComponent},
  {path:"consulter",component:ConsulterComponent}]
},

  {path:"**",component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
