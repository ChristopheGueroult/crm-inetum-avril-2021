import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'TotalHT',
    'TotalTTC',
    'State',
  ];
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  public total(val: number, coef: number, tva?: number) {
    console.log('total called');

    if (tva) {
      return val * coef * (1 + tva / 100);
    }
    return val * coef;
  }
}
