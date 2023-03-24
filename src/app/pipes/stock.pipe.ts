import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value == 0)
    {
      
      return 'Out Of Stock'
    }
   
    return 'in stock'
  }



}
