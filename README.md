# Currency Exchange Rates

A simple module based on [exchangeratesapi.io](https://exchangeratesapi.io/) API.

### README
- [Currency Exchange npm](https://www.npmjs.com/package/currencies-exchange-rates)
- [Currency Exchange GitHub](https://github.com/simaskem/currency-exchange)

## Description
```
Module provides methods to get currency rates, get an exchange rate of the desired currency, convert currency and even pick from which historical date pick the rates.
```
```
Note: the code is now written in ECMAScript 6 modules and placed inside src/ directory. Temporary build (ECMAScript 5) files are placed under lib/.
```

## Getting started

### Installation
This package can be installed using npm

```
npm install currencies-exchange-rates
```

### Import
Import `currencies-exchange-rates` methods and use them as Promises.

```
import {convertCurrency, getCurrencyRate, getCurrencyRateList} from 'currencies-exchange-rates';
```

## Usage

### 1. getCurrencyRateList(base, date)

##### Description
```
Gets the list of currency rates.
```

##### Properties
```
base: string - currency abbreviation, describes regarding which currency get the list.
date: string - Optional. in order to get historical currency rates - date must be provided. Format "YYYY-MM-DD".
```

##### Example
```
getCurrencyRateList('EUR')
```
or
```
getCurrencyRateList('EUR', '2016-06-06')
```

### 2. getCurrencyRate(from, to, date)

##### Description
```
Gets the rate of defined currencies. Date can be provided to pick rate from historical date.
```

##### Properties
```
from: string - currency abbreviation, describes currency to convert from
to: string - currency abbreviation, describes currency to convert to
date: string - Optional. Provided in order to get historical currency rate. Format "YYYY-MM-DD".
```

#### Example
```
getCurrencyRate('USD', 'EUR')
```
or
```
getCurrencyRate('USD', 'EUR', '2016-06-06')
```

### 3. convertCurrency(from, to, amount, date)

##### Description
```
Gets the rate of defined currencies. Date can be provided to pick rate from historical date.
```

##### Properties
```
from: string - currency abbreviation, describes currency to convert from
to: string - currency abbreviation, describes currency to convert to
amount: number - amount to convert
date: string - Optional. Provided in order to get historical currency rate. Format "YYYY-MM-DD".
```

#### Example
```
convertCurrency('USD', 'EUR', 100)
```
or
```
convertCurrency('USD', 'EUR', 100, '2016-06-06')
```

## Issues
If any issues are found, they can be reported [here](https://github.com/simaskem/currency-exchange/issues).

## License

This project is licensed under the [MIT](LICENSE) license.

