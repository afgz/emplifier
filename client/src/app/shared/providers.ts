import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupLists = {
  genders: ['Male', 'Female'],
  maritalStatuses: ['Single', 'Married'],
  statuses: ['Contract', 'Permanent'],
  grades: ['SE-JP', 'SE-PG', 'SE-AP', 'SE-AN'],
  divisions: ['SWD Red', 'SWD Blue', 'SWD Green', 'SWD Yellow', 'SWD Gold'],
  cities: ['All', 'Jakarta', 'Yogyakarta', 'Bandung', 'Bali'],
};
