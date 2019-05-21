import CurrencyService from './services/currency-service';
import CacheService from './services/cache-service';
import { prepareAbbreviation, prepareDate } from './utils/helpers';
import { EUR, exchangeApi, ttl } from "./constants";

const cache = new CacheService(ttl); // Create a new cache service instance

export const getCurrencyRateList = async (base = EUR, date) =>
    await cache.get(`getCurrencyRateList_${prepareAbbreviation(base)}_${prepareDate(date)}`,
        () => CurrencyService.fetchData(`${exchangeApi}${prepareDate(date)}?base=${prepareAbbreviation(base)}`));

export const getCurrencyRate = async (from, to, date) =>
    await cache.get(`getCurrencyRate_${prepareAbbreviation(from)}_to_${prepareAbbreviation(to)}_${prepareDate(date)}`,
        () => CurrencyService.fetchData(`${exchangeApi}${prepareDate(date)}?base=${prepareAbbreviation(from)}&symbols=${prepareAbbreviation(to)}`));

export const convertCurrency = async (from, to, amount, date) =>  await CurrencyService.convert(from, to, amount, date);