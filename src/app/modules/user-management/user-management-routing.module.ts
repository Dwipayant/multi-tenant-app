import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { NotAuthGuard } from 'src/app/guards/not-auth.guard';
import { ChangePswdComponent } from './components/change-pswd/change-pswd.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
    pathMatch: 'full'
  },
  {
    pathMatch: 'full',
    path: 'change-password',
    canActivate: [AuthGuard],
    component: ChangePswdComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
