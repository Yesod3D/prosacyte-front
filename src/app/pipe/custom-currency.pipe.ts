import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(
    value: number,
    currencyCode: string = 'EUR',
    display: 'symbol' | 'code' | 'narrowSymbol' | 'name' = 'symbol',
    digitsInfo: string = '1.2-2',
    locale: string = 'es'
  ): string {
    if (typeof value !== 'number') return 'N/A';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: display,
      minimumFractionDigits: parseInt(digitsInfo.split('.')[1]?.split('-')[0]) || 2,
      maximumFractionDigits: parseInt(digitsInfo.split('.')[1]?.split('-')[1]) || 2
    }).format(value);
  }
}