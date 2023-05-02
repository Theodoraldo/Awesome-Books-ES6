import { luxon } from '../node_modules/luxon/src/datetime.js';
/* Datetime display */
const localDate = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_MED);
const { hour } = luxon.DateTime.local().c;
const min = luxon.DateTime.local().c.minute;
export {
  localDate, hour, min,
};