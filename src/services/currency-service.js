import fetch from 'node-fetch';
import { getCurrencyRate } from '../index';

class CurrencyService {

    static async fetchData (url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async convert (from, to, amount = 0, date) {
        try {
            const currencyRate = await getCurrencyRate(from, to, date);
            if (!currencyRate || !currencyRate.rates) {
                throw new Error('Currency Exchange rate is unknown!');
            }
            return amount * currencyRate.rates[to.toUpperCase()];
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default CurrencyService;