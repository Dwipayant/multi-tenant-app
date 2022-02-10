
import { SidebarComponentComponent } from '../components/sidebar-component/sidebar-component.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { CurrencyLangComponent } from '../components/currency-lang/currency-lang.component';
import { CustomDatePipe } from '../../../pipes/custom-date.pipe';
import { HeaderComponent } from '../components/header/header.component';

export const COMPONENTS = [
    HeaderComponent,
    SidebarComponentComponent,
    FooterComponent,
    SettingsComponent,
    CurrencyLangComponent,
    CustomDatePipe
  ];