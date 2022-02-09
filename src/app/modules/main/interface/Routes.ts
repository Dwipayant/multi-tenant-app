export interface ROUTE {
    icon?: string;
    route?: string;
    title?: string;
    children?: any[];
    condition?:any;
    onClick?: any,
    params?:any
  }