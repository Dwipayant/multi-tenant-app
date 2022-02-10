import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { CreateFormComponent } from './modules/home/components/create-form/create-form.component';
import { CurrencyLangComponent } from './modules/main/components/currency-lang/currency-lang.component';
import { SettingsComponent } from './modules/main/components/settings/settings.component';

const routes: Routes = [
  {
    path: "theme-selection",
    pathMatch: 'full',
    component: SettingsComponent
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
