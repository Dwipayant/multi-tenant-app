import { CURRENCY_CODE } from '../enums/index';
export interface LocaleModel {
    id:string,
    label: string,
    code: string,
    currency?: CURRENCY_CODE,
    date: Locale,
}