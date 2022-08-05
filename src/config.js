const MAIN_URL = 'https://restcountries.com/v2/';

export const ALL = MAIN_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) => MAIN_URL + 'name/' + name;

export const filterByCode = (codes) => MAIN_URL + 'alpha?codes=' + codes.join(',');
