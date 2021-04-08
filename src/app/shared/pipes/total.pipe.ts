import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(item: any, ttc: boolean): number {
    if (ttc) {
      return item.total(item.tjmHt, item.nbJours, item.tva);
    }
    return item.total(item.tjmHt, item.nbJours);
  }
}
