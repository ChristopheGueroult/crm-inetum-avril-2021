import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public item$ = this.ordersService.selectedItem;
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }

}
