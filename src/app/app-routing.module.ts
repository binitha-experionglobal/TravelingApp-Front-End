import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DelhiairportComponent } from './admin/delhiairport/delhiairport.component';
import { NameaComponent } from './admin/namea/namea.component';
import { TravelerlistComponent } from './admin/travelerlist/travelerlist.component';
import { LoginComponent } from './login/login.component';
import { FlightdataComponent } from './flightdata/flightdata.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'travelerlist',component:TravelerlistComponent},
  {path:'delhiairport',component:DelhiairportComponent},
  {path:'namea',component:NameaComponent},
  {path:'user',component:UserComponent},
  {path:'flightdata',component:FlightdataComponent},
  {path:'register',component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
