import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartproductsComponent } from './flipkartproducts/flipkartproducts.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentsComponent } from './students/students.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthGuard } from './auth.guard';
import { NotifyGuard } from './notify.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthGuard], component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'users',component:UsersComponent},
    {path:'products',component:ProductsComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'flipkartproducts',component:FlipkartproductsComponent},
    {path:'mail',component:MailComponent},
    {path:'weather',component:WeatherComponent},
    {path:'create-vehicles', canDeactivate:[NotifyGuard], component:CreateVehiclesComponent},
    {path:'create-accounts',component:CreateAccountsComponent},
    {path:'students',component:StudentsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehiclesComponent},
    {path:'account-details/:id',component:AccountDetailsComponent},
    {path:'edit-account/:id',component:CreateAccountsComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:"create-student",component:CreateStudentComponent},
    {path:"edit-student/:id",component:CreateStudentComponent},
    {path:"create-user",component:CreateUserComponent},
    {path:"parent",component:ParentComponent},
    {path:"items",component:ItemsComponent},
    {path:"nav",component:NavComponent},
    {path:"cart",component:CartComponent}
  ]},
  
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
