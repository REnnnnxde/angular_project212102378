import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { LupapasswordComponent } from './lupapassword/lupapassword.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';


// Variabel ini digunakan untuk mendefinisikan rute (routes) dalam aplikasi Angular Anda. Rute-rute ini mengatur bagaimana komponen-komponen Angular akan ditampilkan pada URL tertentu.
const routes: Routes = [

{
  path: 'dashboard', component: DashboardComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'register', component: RegisterComponent
},
{
 path: 'password', component: LupapasswordComponent
},
{
  path: 'admin', component: AdminComponent
},
{
  path: 'dashboard2', component: Dashboard2Component
},
{
  path: 'dashboard3', component: Dashboard3Component
},

// ---
{
 path: "", redirectTo: "login", pathMatch: "full"
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
