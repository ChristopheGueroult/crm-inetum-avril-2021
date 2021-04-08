import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public states = Object.values(StateOrder);
  public headers = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'TotalHT',
    'TotalTTC',
    'State',
  ];
  constructor(private ordersService: OrdersService, private router: Router) {
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnInit(): void {}
  public goToEdit(item: Order): void {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((data) => {
      // traiter codes error response api or maj item.state côté front
      item.state = data.state;
    });
  }
}
