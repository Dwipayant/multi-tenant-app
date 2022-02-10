import { CURRENCY_CODE } from '@app/enums';
import { LocaleModel } from '@interfaces/index';
import { de, enGB, enIN, enUS, es, fr, pt } from 'date-fns/locale';

export const LOCALE_LIST : LocaleModel[]= [
    {
      id: "enIn",
      label: "English - India",
      code: 'en',
      currency: CURRENCY_CODE.INR,
      date: enIN,
    },
    {
      id: "enUS",
      label: "English - USA",
      code: 'en',
      currency: CURRENCY_CODE.USD,
      date: enUS,
    },
    
    {
      id: "enGB",
      label: "English - UK",
      code: 'en', 
      currency: CURRENCY_CODE.GBP,
      date: enGB,
    },
    {
      id: 'fr',
      label: "French",
      code: 'fr',
      date: fr,
    },
    {
      id: 'pt',
      label: "Português",
      code: 'pt',
      date: pt
    },
    {
      id: 'es',
      label: "Español",
      code: 'es',
      date: es
    },
    {
      id: 'de',
      label: "Deutsch",
      code: 'de',
      date: de
    },
    {
      id: 'hi',
      label: "Hindi",
      code: 'hi',
      date: enIN,
      currency: CURRENCY_CODE.INR
    }
  ]
  