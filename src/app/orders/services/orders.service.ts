import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection
  private collection$!: Observable<Order[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>('http://localhost:3000/orders');
  }

  // get collection
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // set collection
  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // change state item

  // update item in collection

  // delete item in collection

  // get item by id from collection
}
