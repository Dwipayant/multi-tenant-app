export interface ThemeModel {
    _id?: any;
    id: string | number;
    theme: string;
    label: string;
    isActive: boolean;
    primary?: string;
    accent?: string;
    warn?: string;
    toolBarBG?: string;
    toolBarText?: string;
    defaultThemeMode?:string,
    onHover?:string,
    onSelect?:string,
  
    footerBG?: string,
    footerText?: string,
  }