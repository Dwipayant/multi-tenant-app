import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { DynamicThemeService, AppService } from '@services/index';
import { TenantService } from 'src/app/tenant/tenant.service';
import { Color, ThemeModel } from '@interfaces/index';
@Component({
  selector: 'multi-tenant-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  primaryColor = this.themeService.primaryColor;
  secondaryColor = this.themeService.secondaryColor;
  tertiaryColor = this.themeService.tertiaryColor;
  dynamicThemeLabel!:any;

  dynamicThemeForm: FormGroup;
  dynamicThemeFormConfig = {
    label: ["", Validators.required],
    primary: [this.themeService.primaryColor, Validators.required],
    accent: [this.themeService.secondaryColor, Validators.required],
    warn: [this.themeService.tertiaryColor, Validators.required],
    theme: ["dynamic-theme"],
    isActive: true,
    onHover: ["#525252"],
    onSelect: ["#fdac00"],
    toolBarBG: "#000000",
    toolBarText: "#FFFFFF",
    footerBG: "#f1f1f1",
    footerText: "#000",
  }

  themeOptions = this.themeService.availableThemes;
  themeModeOptions = this.themeService.themeModes;
  selectedThemeMode :"light" | "dark" | string = this.themeService.currentThemeMode;
  selectedTheme: ThemeModel;
  themeApplied = false;
  paletteColor = "#00aa00"
  colorPallets!:Color[];

  showAddTheme = false;
  showEditTheme = false;
  activeTheme:ThemeModel;

  constructor(
    private fb: FormBuilder,
    public themeService: DynamicThemeService,
    private appService: AppService,
    private tenantService:TenantService
  ) {
    this.dynamicThemeForm = this.fb.group(this.dynamicThemeFormConfig);

    this.themeService.getThemeChangedSubject().subscribe(res => {
      this.themeOptions = this.themeService.availableThemes;
      this.activeTheme = this.themeOptions.find(e => e.isActive);
      this.selectedTheme = this.activeTheme;
      this.themeService.setTheme(this.activeTheme || this.themeService.selectedTheme);
    });

    this.paletteChanged();
    this.getAllThemes();
    this.setDefaultTheme();
  }

  setDefaultTheme() {
    this.selectedTheme = this.activeTheme = this.themeService.selectedTheme;
    this.closeOwnTheme();
  }

  setTheme() {
    if (this.selectedTheme.id !== "DYN_THM") {
      this.themeService.setTheme(this.selectedTheme);
      this.activeTheme = this.selectedTheme;
      this.autoPopulateOnEdit(this.activeTheme);
    }
  }

  autoPopulateOnEdit(theme:ThemeModel){
    if(this.activeTheme.theme === "dynamic-theme" && this.showEditTheme) {
      this.dynamicThemeForm.patchValue(theme);
    } else {
      this.showEditTheme = false;
    }
  }

  onEditActiveTheme(){
    this.showAddTheme = false;
    this.showEditTheme = !this.showEditTheme;
    this.autoPopulateOnEdit(this.activeTheme);
  }

  onAddNewTheme(){
    this.showAddTheme = true;
    this.showEditTheme = false;
    this.dynamicThemeForm = null;
    this.dynamicThemeForm = this.fb.group(this.dynamicThemeFormConfig);
  }
  closeOwnTheme() {
    this.showEditTheme = false;
    this.showAddTheme = false;
  }

  toggleTheme() {
    this.themeService.toggleThemeMode();
  }

  useTheme() {
    if (this.dynamicThemeForm.invalid) {
      this.themeApplied = false;
      return false;
    }
    const dyTheme: ThemeModel = this.dynamicThemeForm.value;
    this.themeService.setTheme(dyTheme);
    this.themeApplied = true;
  }

  applyTheme(selectedTheme) {
    this.themeService.setTheme(selectedTheme);
    this.activeTheme = selectedTheme;
  }
  getAllThemes(){
    this.appService.getAllThemes().subscribe((res:any) => {
      const appTheme = res[this.tenantService.getTenant()];
      if(appTheme && Array.isArray(appTheme)) {
        appTheme.forEach(eachTheme => {
          eachTheme["id"] = eachTheme._id;
          eachTheme["theme"] = eachTheme.theme || eachTheme.themeName;
        });
        this.themeService.setAvailabeThemesAndNotify(<ThemeModel[]>appTheme);
      }
    }, (error) => {});
  }

  getSelectedThemes() {
    this.appService.getSelectedTheme().subscribe((res: any) => {
      if(res) {
        res["id"] = res._id;
        res["theme"] = res.theme || res.themeName;
        this.themeService.setAvailabeThemesAndNotify(<ThemeModel[]>[res]);
      }
    }, (error) => {});
  }

  primaryColorChanged(event) {
    this.dynamicThemeForm.get('onSelect').setValue(this.getSelectedColorFromPrimaryColor(event.target.value));
  }
  getSelectedColorFromPrimaryColor(pColor){
    if(pColor) {
      const colorPallets = this.themeService.computeColors(pColor);
      return colorPallets[9].hex;
    }
  }
  paletteChanged(){
    this.colorPallets = this.getPaletteColors(this.paletteColor);
  }
  getPaletteColors(colorCode){
    const colorNames = ["300", "400", "500", "600", "700", "800", "900", "A400", "A700"]
    return this.themeService.computeColors(colorCode).filter((colorItem, index) => colorNames.includes(colorItem.name));
  }
}
