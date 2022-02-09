import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { CreateFormComponent } from './modules/home/create-form/create-form.component';
import { CurrencyLangComponent } from './modules/main/currency-lang/currency-lang.component';
import { SettingsComponent } from './modules/main/settings/settings.component';

const routes: Routes = [
  {
    path: "security",
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/post-login-user-mgmt/post-login-user-mgmt.module').then(m => m.PostLoginUserMgmtModule)
  },
  {
    path: "dashboard",
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "theme-selection",
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: SettingsComponent
  },
  {
    path: "dyn-form",
    pathMatch: "full",
    canActivate: [NotAuthGuard],
    component: CreateFormComponent
  },
  {
    path: "settings",
    pathMatch: "full",
    component: CurrencyLangComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
