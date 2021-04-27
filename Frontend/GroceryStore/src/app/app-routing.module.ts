import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddemployeeComponent } from './admin-addemployee/admin-addemployee.component';
import { AdminAddproductsComponent } from './admin-addproducts/admin-addproducts.component';
import { AdminDeleteemployeeComponent } from './admin-deleteemployee/admin-deleteemployee.component';
import { AdminDeleteproductsComponent } from './admin-deleteproducts/admin-deleteproducts.component';
import { AdminGeneratereportsComponent } from './admin-generatereports/admin-generatereports.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminUpdateproductsComponent } from './admin-updateproducts/admin-updateproducts.component';
import { AdminViewrequestsComponent } from './admin-viewrequests/admin-viewrequests.component';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { EmployeeWindowComponent } from './employee-window/employee-window.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserWindowComponent } from './user-window/user-window.component';

const routes: Routes = [
  { path: 'userWindow', component: UserWindowComponent },
  { path: 'adminWindow', component: AdminWindowComponent },
  { path: 'adminDashboard', component: AdminNavbarComponent },

  { path: 'adminViewRequest', component: AdminViewrequestsComponent },

  { path: 'generateReport', component: AdminGeneratereportsComponent },

  { path: 'employeeWindow', component: EmployeeWindowComponent },

  { path: 'adminAddProduct', component: AdminAddproductsComponent },
  { path: 'adminUpdateProduct', component: AdminUpdateproductsComponent },
  { path: 'adminDeleteProduct', component: AdminDeleteproductsComponent },
  { path: 'adminAddEmployee', component: AdminAddemployeeComponent },
  { path: 'adminDeleteEmplpoyee', component: AdminDeleteemployeeComponent },
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'userSignin', component: UserSigninComponent },
  { path: '', redirectTo: 'userSignin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
